// Assembles prior conversation context from Slack before the model sees
// the current message.  Handles both threaded and top-level messages.

import {
  fetchThreadMessages,
  fetchChannelHistory,
  resolveUser,
} from './slack.js';

const MAX_CONTEXT_MESSAGES = 15;
const MAX_CONTEXT_CHARS = 3000;

export async function buildThreadContext(event) {
  const { channel, ts, thread_ts } = event;
  let messages = [];

  if (thread_ts) {
    // Inside a thread: fetch the full thread (parent + replies).
    messages = await fetchThreadMessages(channel, thread_ts);
  } else {
    // Top-level channel message: grab a small window of recent history.
    messages = await fetchChannelHistory(channel, ts, 8);
  }

  if (!messages || messages.length === 0) return '';

  // Drop the current message itself (it is sent as the user turn).
  messages = messages.filter((m) => m.ts !== ts);

  // Keep only the last N turns to avoid prompt bloat.
  if (messages.length > MAX_CONTEXT_MESSAGES) {
    messages = messages.slice(-MAX_CONTEXT_MESSAGES);
  }

  const botUserId = process.env.SLACK_BOT_USER_ID || '';

  const formatted = [];
  for (const msg of messages) {
    const isBot =
      msg.bot_id || (botUserId && msg.user === botUserId);
    const name = isBot
      ? 'claudesington (you)'
      : msg.user
        ? await resolveUser(msg.user)
        : 'unknown';

    const text = await resolveInlineMentions(msg.text || '');
    if (!text) continue;
    formatted.push(`[${name}]: ${text}`);
  }

  // Trim from the front if the total exceeds the character budget.
  let result = formatted.join('\n');
  if (result.length > MAX_CONTEXT_CHARS) {
    result = '';
    for (let i = formatted.length - 1; i >= 0; i--) {
      const candidate = formatted[i] + (result ? '\n' + result : '');
      if (candidate.length > MAX_CONTEXT_CHARS) break;
      result = candidate;
    }
  }

  return result;
}

// Resolve <@U123> mentions and Slack formatting inside historical messages.
async function resolveInlineMentions(text) {
  if (!text) return '';

  const mentionPattern = /<@([A-Z0-9]+)(?:\|[^>]*)?>/g;
  const matches = [...text.matchAll(mentionPattern)];
  let resolved = text;
  for (const match of matches) {
    const name = await resolveUser(match[1]);
    resolved = resolved.replace(match[0], `@${name}`);
  }

  // Channel mentions
  resolved = resolved.replace(/<#[A-Z0-9]+\|([^>]+)>/g, '#$1');
  resolved = resolved.replace(/<#([A-Z0-9]+)>/g, '#channel');

  // URLs
  resolved = resolved.replace(/<(https?:\/\/[^|>]+)\|([^>]+)>/g, '$2');
  resolved = resolved.replace(/<(https?:\/\/[^>]+)>/g, '$1');

  return resolved;
}
