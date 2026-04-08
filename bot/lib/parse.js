// Cleans Slack message text so the model sees the actual question,
// not raw markup like <@U0AR6BMV46B> or <#C093Z82DK18|sdr-playersonly>.

export function cleanSlackText(text) {
  if (!text) return '';

  return text
    // Strip user mentions: <@U12345> or <@U12345|display>
    .replace(/<@[A-Z0-9]+(?:\|[^>]*)?>/g, '')
    // Strip channel mentions: <#C12345|channel-name> -> #channel-name
    .replace(/<#[A-Z0-9]+\|([^>]+)>/g, '#$1')
    // Strip channel mentions without label: <#C12345>
    .replace(/<#[A-Z0-9]+>/g, '')
    // Strip URL formatting: <https://example.com|label> -> label
    .replace(/<(https?:\/\/[^|>]+)\|([^>]+)>/g, '$2')
    // Strip bare URL formatting: <https://example.com> -> https://example.com
    .replace(/<(https?:\/\/[^>]+)>/g, '$1')
    // Collapse whitespace
    .replace(/\s+/g, ' ')
    .trim();
}
