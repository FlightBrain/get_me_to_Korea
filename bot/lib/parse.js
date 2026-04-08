// Cleans Slack message text so the model sees the actual question.
// Strips the BOT's own mention (it's a trigger, not content) but
// preserves other user/channel mentions as readable references.

export function cleanSlackText(text) {
  if (!text) return '';

  const botId = process.env.SLACK_BOT_USER_ID || '';
  let cleaned = text;

  // 1. Strip the bot's own @mention (trigger, not part of the question).
  if (botId) {
    cleaned = cleaned.replace(
      new RegExp(`<@${botId}(?:\\\\|[^>]*)?>`, 'g'),
      '',
    );
  }

  // 2. Convert OTHER user mentions to @displayName.
  cleaned = cleaned.replace(
    /<@([A-Z0-9]+)(?:\|([^>]+))?>/g,
    (_, id, label) => (label ? `@${label}` : `@${id}`),
  );

  // 3. Channel mentions -> #channel-name.
  cleaned = cleaned.replace(/<#[A-Z0-9]+\|([^>]+)>/g, '#$1');
  cleaned = cleaned.replace(/<#([A-Z0-9]+)>/g, '#$1');

  // 4. URLs: keep both label and href for context.
  cleaned = cleaned.replace(
    /<(https?:\/\/[^|>]+)\|([^>]+)>/g,
    '$2 ($1)',
  );
  cleaned = cleaned.replace(/<(https?:\/\/[^>]+)>/g, '$1');

  // 5. Collapse whitespace.
  cleaned = cleaned.replace(/\s+/g, ' ').trim();

  return cleaned;
}
