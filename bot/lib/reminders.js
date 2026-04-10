// KV-backed reminder system. Users ask the bot to remind them about
// something, the bot stores it, and a cron job checks every 5 minutes
// for due reminders and sends them as Slack DMs or thread replies.

import { kv } from '@vercel/kv';

const REMINDERS_KEY = 'reminders:pending';

const kvAvailable = !!(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
const memoryFallback = [];

// ---- public API ----

// Create a new reminder.
export async function createReminder({
  userId,
  userName,
  channel,
  threadTs,
  message,
  triggerAt,  // ISO string or Date
}) {
  const reminder = {
    id: `rem_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    userId,
    userName: userName || userId,
    channel,
    threadTs: threadTs || null,
    message,
    triggerAt: typeof triggerAt === 'string' ? triggerAt : triggerAt.toISOString(),
    createdAt: new Date().toISOString(),
    sent: false,
  };

  const list = await getAllReminders();
  list.push(reminder);
  await saveReminders(list);

  console.log(`reminder: created ${reminder.id} for ${userName} at ${reminder.triggerAt}`);
  return reminder;
}

// Get all pending (unsent) reminders that are due.
export async function getDueReminders() {
  const now = new Date().toISOString();
  const list = await getAllReminders();
  return list.filter(r => !r.sent && r.triggerAt <= now);
}

// Mark reminders as sent.
export async function markRemindersSent(ids) {
  const list = await getAllReminders();
  for (const r of list) {
    if (ids.includes(r.id)) r.sent = true;
  }
  // Prune sent reminders older than 24h to keep the list clean.
  const cutoff = new Date(Date.now() - 24 * 3600 * 1000).toISOString();
  const pruned = list.filter(r => !r.sent || r.triggerAt > cutoff);
  await saveReminders(pruned);
}

// Get all reminders for a specific user (for "list my reminders").
export async function getUserReminders(userId) {
  const list = await getAllReminders();
  return list.filter(r => r.userId === userId && !r.sent);
}

// ---- parsing ----

// Try to parse a natural-language time reference into a Date.
// Handles: "in 30 minutes", "in 2 hours", "tomorrow at 9am",
// "at 3pm", "in 1 hour", "next monday".
export function parseReminderTime(text) {
  const now = new Date();

  // "in X minutes/hours/days"
  const inMatch = text.match(/\bin\s+(\d+)\s*(min(?:ute)?s?|hours?|hrs?|days?)\b/i);
  if (inMatch) {
    const num = parseInt(inMatch[1]);
    const unit = inMatch[2].toLowerCase();
    if (unit.startsWith('min')) return new Date(now.getTime() + num * 60 * 1000);
    if (unit.startsWith('h')) return new Date(now.getTime() + num * 3600 * 1000);
    if (unit.startsWith('d')) return new Date(now.getTime() + num * 86400 * 1000);
  }

  // "at Xam/pm" or "at X:XXam/pm" (today or tomorrow if past)
  const atMatch = text.match(/\bat\s+(\d{1,2})(?::(\d{2}))?\s*(am|pm)\b/i);
  if (atMatch) {
    let hours = parseInt(atMatch[1]);
    const minutes = parseInt(atMatch[2] || '0');
    const ampm = atMatch[3].toLowerCase();
    if (ampm === 'pm' && hours !== 12) hours += 12;
    if (ampm === 'am' && hours === 12) hours = 0;

    const target = new Date(now);
    target.setHours(hours, minutes, 0, 0);
    // If the time is already past today, push to tomorrow.
    if (target <= now) target.setDate(target.getDate() + 1);
    return target;
  }

  // "tomorrow" (default 9am)
  if (/\btomorrow\b/i.test(text)) {
    const target = new Date(now);
    target.setDate(target.getDate() + 1);
    // Check if there's a time attached
    const timeMatch = text.match(/tomorrow\s+(?:at\s+)?(\d{1,2})(?::(\d{2}))?\s*(am|pm)/i);
    if (timeMatch) {
      let h = parseInt(timeMatch[1]);
      const m = parseInt(timeMatch[2] || '0');
      const ap = timeMatch[3].toLowerCase();
      if (ap === 'pm' && h !== 12) h += 12;
      if (ap === 'am' && h === 12) h = 0;
      target.setHours(h, m, 0, 0);
    } else {
      target.setHours(9, 0, 0, 0);
    }
    return target;
  }

  // "next monday/tuesday/..." (default 9am)
  const dayMatch = text.match(/\bnext\s+(monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/i);
  if (dayMatch) {
    const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const targetDay = dayNames.indexOf(dayMatch[1].toLowerCase());
    const target = new Date(now);
    const currentDay = target.getDay();
    let daysAhead = targetDay - currentDay;
    if (daysAhead <= 0) daysAhead += 7;
    target.setDate(target.getDate() + daysAhead);
    target.setHours(9, 0, 0, 0);
    return target;
  }

  // "end of day" / "eod"
  if (/\b(eod|end\s+of\s+day)\b/i.test(text)) {
    const target = new Date(now);
    target.setHours(17, 0, 0, 0);
    if (target <= now) target.setDate(target.getDate() + 1);
    return target;
  }

  return null;
}

// ---- internals ----

async function getAllReminders() {
  try {
    if (kvAvailable) {
      return (await kv.get(REMINDERS_KEY)) || [];
    }
    return [...memoryFallback];
  } catch (e) {
    console.error('reminders: get failed:', e.message);
    return [...memoryFallback];
  }
}

async function saveReminders(list) {
  try {
    if (kvAvailable) {
      await kv.set(REMINDERS_KEY, list, { ex: 30 * 24 * 3600 }); // 30-day TTL
    }
    memoryFallback.length = 0;
    memoryFallback.push(...list);
  } catch (e) {
    console.error('reminders: save failed:', e.message);
  }
}

// ---- test helpers ----
export function _resetReminders() {
  memoryFallback.length = 0;
}
