import crypto from 'crypto';

export function verifySlackSignature(req, rawBody) {
  const slackSig = req.headers['x-slack-signature'];
  const timestamp = req.headers['x-slack-request-timestamp'];

  if (!slackSig || !timestamp) return false;

  // Reject stale requests (replay attack prevention)
  const fiveMinutesAgo = Math.floor(Date.now() / 1000) - 300;
  if (parseInt(timestamp) < fiveMinutesAgo) return false;

  const sigBase = `v0:${timestamp}:${rawBody}`;
  const expected = 'v0=' + crypto
    .createHmac('sha256', process.env.SLACK_SIGNING_SECRET)
    .update(sigBase, 'utf8')
    .digest('hex');

  try {
    return crypto.timingSafeEqual(
      Buffer.from(expected, 'utf8'),
      Buffer.from(slackSig, 'utf8')
    );
  } catch {
    return false;
  }
}

export async function postToSlack({ channel, text, thread_ts }) {
  const body = {
    channel,
    text,
    ...(thread_ts && { thread_ts }),
  };

  const res = await fetch('https://slack.com/api/chat.postMessage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.SLACK_BOT_TOKEN}`,
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  if (!data.ok) console.error('Slack post failed:', data.error);
  return data;
}
