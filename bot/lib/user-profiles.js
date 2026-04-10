// Persistent user profile store backed by Vercel KV.
// Learns about users over time: who they are, what they talk about,
// how they interact with the bot, so responses can be personalized.

import { kv } from '@vercel/kv';

const KEY_PREFIX = 'user:';
const MAX_TOPICS = 15;       // keep the N most recent topics
const MAX_INTERACTIONS = 10;  // recent interaction summaries

// Fallback: if KV isn't configured, use in-memory (survives warm instances only).
const memoryFallback = new Map();
const kvAvailable = !!(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);

// ---- public API ----

// Get a user's profile. Returns null if we've never seen them.
export async function getUserProfile(userId) {
  if (!userId) return null;
  try {
    if (kvAvailable) {
      return await kv.get(`${KEY_PREFIX}${userId}`);
    }
    return memoryFallback.get(userId) || null;
  } catch (e) {
    console.error(`user-profiles: get failed for ${userId}:`, e.message);
    return memoryFallback.get(userId) || null;
  }
}

// Update a user's profile after an interaction.
// Called after every message the bot processes.
export async function updateUserProfile(userId, {
  displayName,
  message,
  intent,
  channel,
}) {
  if (!userId) return;

  const existing = await getUserProfile(userId) || createBlankProfile(userId);

  // Update basics
  if (displayName && displayName !== userId) {
    existing.displayName = displayName;
  }
  existing.lastSeen = new Date().toISOString();
  existing.messageCount = (existing.messageCount || 0) + 1;

  // Track which channels they're active in
  if (channel && !existing.channels.includes(channel)) {
    existing.channels.push(channel);
    if (existing.channels.length > 10) existing.channels.shift();
  }

  // Track intent distribution (what they usually ask about)
  existing.intentCounts[intent] = (existing.intentCounts[intent] || 0) + 1;

  // Extract and store topics from their messages
  const topics = extractTopics(message);
  for (const topic of topics) {
    // Remove old instance if it exists, add to end (most recent)
    existing.recentTopics = existing.recentTopics.filter(t => t !== topic);
    existing.recentTopics.push(topic);
  }
  if (existing.recentTopics.length > MAX_TOPICS) {
    existing.recentTopics = existing.recentTopics.slice(-MAX_TOPICS);
  }

  // Store a brief interaction summary
  const summary = buildInteractionSummary(message, intent);
  if (summary) {
    existing.recentInteractions.push({
      summary,
      intent,
      timestamp: new Date().toISOString(),
    });
    if (existing.recentInteractions.length > MAX_INTERACTIONS) {
      existing.recentInteractions.shift();
    }
  }

  // Detect personality signals from how they talk to the bot
  updatePersonalitySignals(existing, message);

  await saveProfile(userId, existing);
}

// Build a concise text block for the system prompt.
export function profileToPromptContext(profile) {
  if (!profile) return '';

  const lines = [];

  if (profile.displayName) {
    lines.push(`name: ${profile.displayName}`);
  }

  if (profile.messageCount > 1) {
    lines.push(`interactions: ${profile.messageCount} messages total`);
  }

  if (profile.personality.length > 0) {
    lines.push(`vibe: ${profile.personality.join(', ')}`);
  }

  // Top intent (what they usually ask about)
  const topIntent = getTopIntent(profile.intentCounts);
  if (topIntent) {
    lines.push(`usually asks about: ${topIntent}`);
  }

  if (profile.recentTopics.length > 0) {
    lines.push(`recent topics: ${profile.recentTopics.slice(-5).join(', ')}`);
  }

  if (profile.recentInteractions.length > 0) {
    const last = profile.recentInteractions[profile.recentInteractions.length - 1];
    lines.push(`last interaction: ${last.summary}`);
  }

  return lines.length > 0 ? lines.join('\n') : '';
}

// ---- internals ----

function createBlankProfile(userId) {
  return {
    userId,
    displayName: null,
    firstSeen: new Date().toISOString(),
    lastSeen: new Date().toISOString(),
    messageCount: 0,
    channels: [],
    intentCounts: {},
    recentTopics: [],
    recentInteractions: [],
    personality: [],  // e.g. ["jokes around", "direct", "asks for links"]
  };
}

async function saveProfile(userId, profile) {
  try {
    if (kvAvailable) {
      // TTL of 90 days - profiles expire if user goes quiet
      await kv.set(`${KEY_PREFIX}${userId}`, profile, { ex: 90 * 24 * 3600 });
    }
    memoryFallback.set(userId, profile);
  } catch (e) {
    console.error(`user-profiles: save failed for ${userId}:`, e.message);
    memoryFallback.set(userId, profile);
  }
}

// Extract meaningful topics from a message.
const TOPIC_PATTERNS = [
  // Company/product names (capitalized words that aren't common English)
  { re: /\b(zapier|notion|dropbox|retool|coursera|graphite|replit|navan|braintrust|langsmith|langfuse|arize)\b/gi, type: 'product' },
  // Work topics
  { re: /\b(eval|evals|evaluation|observability|pipeline|sequence|cadence|outreach|demo|meeting|quota|territory|accounts?)\b/gi, type: 'work' },
  // Features/tech
  { re: /\b(rag|llm|gpt|agent|agents|prompt|model|fine.?tun|embeddings?|vector|search|voice)\b/gi, type: 'tech' },
  // Events
  { re: /\b(builders?\s*night|trace|summit|conference|event|dinner|warriors)\b/gi, type: 'event' },
];

function extractTopics(message) {
  if (!message) return [];
  const topics = new Set();
  for (const { re } of TOPIC_PATTERNS) {
    const matches = message.matchAll(re);
    for (const m of matches) {
      topics.add(m[0].toLowerCase());
    }
  }
  return [...topics];
}

function buildInteractionSummary(message, intent) {
  if (!message) return null;
  // Truncate to keep storage lean
  const short = message.length > 80 ? message.slice(0, 77) + '...' : message;
  const intentLabel = intent === 'general_qna' ? '' : ` [${intent}]`;
  return `${short}${intentLabel}`;
}

// Detect personality traits from message patterns over time.
const PERSONALITY_SIGNALS = [
  { trait: 'jokes around', re: /\b(lol|lmao|haha|joke|roast|funny|xd)\b/i },
  { trait: 'direct', re: /\b(give me|send me|now|asap|quick)\b/i },
  { trait: 'asks for links', re: /\b(link|url|doc|resource|deck|slides)\b/i },
  { trait: 'asks about people', re: /\b(who is|where is|where'?s)\b/i },
  { trait: 'tests the bot', re: /\b(can you|do you|are you|prove|test)\b/i },
  { trait: 'competitive intel', re: /\b(langsmith|langfuse|arize|competitor|vs)\b/i },
];

function updatePersonalitySignals(profile, message) {
  if (!message) return;
  for (const { trait, re } of PERSONALITY_SIGNALS) {
    if (re.test(message) && !profile.personality.includes(trait)) {
      profile.personality.push(trait);
      if (profile.personality.length > 6) profile.personality.shift();
    }
  }
}

function getTopIntent(intentCounts) {
  const entries = Object.entries(intentCounts || {});
  if (entries.length === 0) return null;
  entries.sort((a, b) => b[1] - a[1]);
  const [intent, count] = entries[0];
  if (count < 2) return null; // need at least 2 to be a pattern
  const label = intent.replace(/_/g, ' ');
  return label;
}

// ---- test helpers ----
export function _resetProfiles() {
  memoryFallback.clear();
}
