// Temporary debug endpoint. Remove after confirming relay works.
export default function handler(req, res) {
  res.status(200).json({
    RELAY_ENABLED: process.env.RELAY_ENABLED,
    RELAY_CHANNEL_ID: process.env.RELAY_CHANNEL_ID,
    RELAY_TIMEOUT_MS: process.env.RELAY_TIMEOUT_MS,
    SLACK_BOT_USER_ID: process.env.SLACK_BOT_USER_ID ? 'set' : 'unset',
    SLACK_BOT_TOKEN: process.env.SLACK_BOT_TOKEN ? 'set' : 'unset',
    node_version: process.version,
  });
}
