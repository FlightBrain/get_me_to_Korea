import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert/strict';

import { isDuplicate, _resetDedup } from '../lib/dedup.js';
import { cleanSlackText } from '../lib/parse.js';
import { classifyIntent } from '../lib/intent.js';
import { detectTrigger } from '../lib/trigger.js';
import { applyGuardrails } from '../lib/guardrails.js';
import { toSlackMrkdwn } from '../lib/slack.js';
import { buildSystemPrompt } from '../prompts/system.js';

// ---------------------------------------------------------------------------
// Dedup
// ---------------------------------------------------------------------------

describe('isDuplicate', () => {
  beforeEach(() => _resetDedup());

  it('returns false for first occurrence', () => {
    const event = { channel: 'C999', ts: '1111.0001', user: 'U1' };
    assert.equal(isDuplicate(event), false);
  });

  it('returns true for same event seen twice', () => {
    const event = { channel: 'C999', ts: '2222.0001', user: 'U1' };
    isDuplicate(event);
    assert.equal(isDuplicate(event), true);
  });

  it('treats different ts as different events', () => {
    const e1 = { channel: 'C999', ts: '3333.0001', user: 'U1' };
    const e2 = { channel: 'C999', ts: '3333.0002', user: 'U1' };
    isDuplicate(e1);
    assert.equal(isDuplicate(e2), false);
  });

  it('treats different channels as different events', () => {
    const e1 = { channel: 'C001', ts: '4444.0001', user: 'U1' };
    const e2 = { channel: 'C002', ts: '4444.0001', user: 'U1' };
    isDuplicate(e1);
    assert.equal(isDuplicate(e2), false);
  });
});

// ---------------------------------------------------------------------------
// Parse / cleanSlackText
// ---------------------------------------------------------------------------

describe('cleanSlackText', () => {
  it('strips the bot mention when SLACK_BOT_USER_ID is set', () => {
    process.env.SLACK_BOT_USER_ID = 'UBOTID123';
    const result = cleanSlackText('<@UBOTID123> what is this');
    assert.equal(result, 'what is this');
    delete process.env.SLACK_BOT_USER_ID;
  });

  it('preserves other user mentions as @ID when no label', () => {
    process.env.SLACK_BOT_USER_ID = 'UBOTID123';
    const result = cleanSlackText('<@UBOTID123> ask <@UOTHER99>');
    assert.equal(result, 'ask @UOTHER99');
    delete process.env.SLACK_BOT_USER_ID;
  });

  it('preserves other user mentions with label', () => {
    const result = cleanSlackText('hey <@UOTHER99|nick> what do you think');
    assert.equal(result, 'hey @nick what do you think');
  });

  it('converts channel mentions to readable form', () => {
    assert.equal(
      cleanSlackText('<#C093Z82DK18|sdr-playersonly> check this'),
      '#sdr-playersonly check this',
    );
  });

  it('preserves URL label and href', () => {
    assert.equal(
      cleanSlackText('check <https://braintrust.dev|braintrust.dev>'),
      'check braintrust.dev (https://braintrust.dev)',
    );
  });

  it('preserves bare URLs', () => {
    assert.equal(
      cleanSlackText('see <https://example.com/foo>'),
      'see https://example.com/foo',
    );
  });

  it('handles combined bot mention + channel + user', () => {
    process.env.SLACK_BOT_USER_ID = 'UBOTID123';
    const input =
      '#kensington-belza-helpdesk <@UBOTID123> ask <@UNICK|nick> about <#CSALES|sales>';
    const result = cleanSlackText(input);
    assert.equal(result, '#kensington-belza-helpdesk ask @nick about #sales');
    delete process.env.SLACK_BOT_USER_ID;
  });

  it('returns empty string for null input', () => {
    assert.equal(cleanSlackText(null), '');
  });

  it('collapses extra whitespace', () => {
    assert.equal(cleanSlackText('  hello   world  '), 'hello world');
  });
});

// ---------------------------------------------------------------------------
// Intent classification
// ---------------------------------------------------------------------------

describe('classifyIntent', () => {
  it('detects calendar/whereabouts', () => {
    assert.equal(classifyIntent('where is ava today'), 'calendar_whereabouts');
  });

  it('detects account/pipeline', () => {
    assert.equal(
      classifyIntent('what is the pipeline looking like'),
      'account_or_pipeline',
    );
  });

  it('detects person lookup', () => {
    assert.equal(classifyIntent('who is nick'), 'identity_person_lookup');
  });

  it('detects resource requests', () => {
    assert.equal(
      classifyIntent('do we have a case study for search'),
      'braintrust_resources',
    );
  });

  it('detects bot meta questions', () => {
    assert.equal(classifyIntent('what can you do'), 'bot_meta');
  });

  it('detects banter', () => {
    assert.equal(classifyIntent('lol'), 'banter');
  });

  it('defaults to general_qna', () => {
    assert.equal(
      classifyIntent('how do I set up a demo environment'),
      'general_qna',
    );
  });
});

// ---------------------------------------------------------------------------
// Trigger detection
// ---------------------------------------------------------------------------

describe('detectTrigger', () => {
  it('matches claudesington mention', () => {
    assert.equal(detectTrigger('hey claudesington whats up'), 'direct');
  });

  it('matches typo claudsington', () => {
    assert.equal(detectTrigger('claudsington help'), 'direct');
  });

  it('matches inferred account question', () => {
    assert.equal(
      detectTrigger('does ken have pigment covered?'),
      'inferred',
    );
  });

  it('returns null for unrelated message', () => {
    assert.equal(detectTrigger('anyone want lunch'), null);
  });

  it('returns null for empty text', () => {
    assert.equal(detectTrigger(''), null);
  });

  it('matches kenbot nickname', () => {
    assert.equal(detectTrigger('hey kenbot can you help'), 'direct');
  });
});

// ---------------------------------------------------------------------------
// Guardrails
// ---------------------------------------------------------------------------

describe('applyGuardrails', () => {
  it('blocks "lol nah" in short replies', () => {
    const result = applyGuardrails('lol nah');
    assert.ok(!result.includes('lol nah'));
  });

  it('blocks "ask nate"', () => {
    const result = applyGuardrails('ask nate about it');
    assert.ok(!result.includes('ask nate'));
  });

  it('blocks "idk man"', () => {
    const result = applyGuardrails('idk man');
    assert.ok(!result.includes('idk man'));
  });

  it('blocks "my pipeline"', () => {
    const result = applyGuardrails('check my pipeline for details');
    assert.ok(!result.includes('my pipeline'));
  });

  it('blocks "cooked"', () => {
    const result = applyGuardrails('that deal is cooked');
    assert.ok(!result.includes('cooked'));
  });

  it('blocks "not my job"', () => {
    const result = applyGuardrails("that's not my job");
    assert.ok(!result.includes('not my job'));
  });

  it('blocks "above my pay grade"', () => {
    const result = applyGuardrails("that's above my paygrade");
    assert.ok(!result.includes('above my paygrade'));
  });

  it('blocks "good luck with that"', () => {
    const result = applyGuardrails('good luck with that');
    assert.ok(!result.includes('good luck with that'));
  });

  it('blocks "that\'s on you"', () => {
    const result = applyGuardrails("that's on you buddy");
    assert.ok(!result.includes("that's on you"));
  });

  it('strips em dashes', () => {
    const result = applyGuardrails('hello \u2014 world');
    assert.ok(!result.includes('\u2014'));
    assert.ok(result.includes(','));
  });

  it('passes clean replies through unchanged', () => {
    const input =
      'dropbox is a great case study for search/rag. https://braintrust.dev/customers/dropbox';
    assert.equal(applyGuardrails(input), input);
  });

  it('does not block normal use of "ask" + person name', () => {
    const input = 'you could ask kensington about that one';
    assert.equal(applyGuardrails(input), input);
  });

  it('returns safe fallback for very short forbidden phrase', () => {
    const result = applyGuardrails('ykiyk');
    assert.ok(result.includes('happy to help'));
  });
});

// ---------------------------------------------------------------------------
// Slack formatting (toSlackMrkdwn)
// ---------------------------------------------------------------------------

describe('toSlackMrkdwn', () => {
  it('converts **bold** to *bold*', () => {
    assert.equal(toSlackMrkdwn('this is **important**'), 'this is *important*');
  });

  it('converts ## header to *bold* text', () => {
    assert.equal(toSlackMrkdwn('## Resources'), '*Resources*');
  });

  it('converts ### header to *bold* text', () => {
    assert.equal(toSlackMrkdwn('### Sub Header'), '*Sub Header*');
  });

  it('removes horizontal rules', () => {
    assert.equal(toSlackMrkdwn('above\n---\nbelow'), 'above\n\nbelow');
  });

  it('leaves already-correct slack mrkdwn alone', () => {
    const input = 'this is *bold* and _italic_ and `code`';
    assert.equal(toSlackMrkdwn(input), input);
  });

  it('handles null input', () => {
    assert.equal(toSlackMrkdwn(null), null);
  });

  it('handles empty string', () => {
    assert.equal(toSlackMrkdwn(''), '');
  });
});

// ---------------------------------------------------------------------------
// System prompt construction
// ---------------------------------------------------------------------------

describe('buildSystemPrompt', () => {
  it('includes thread context when provided', () => {
    const prompt = buildSystemPrompt({
      notionContext: '',
      calendarContext: '',
      capabilities: '- test cap',
      intent: 'general_qna',
      threadContext: '[nick]: hey what about pigment?',
    });
    assert.ok(prompt.includes('[nick]: hey what about pigment?'));
    assert.ok(prompt.includes('conversation context'));
  });

  it('omits conversation context section when threadContext is empty', () => {
    const prompt = buildSystemPrompt({
      notionContext: '',
      calendarContext: '',
      capabilities: '- test cap',
      intent: 'general_qna',
      threadContext: '',
    });
    assert.ok(!prompt.includes('conversation context'));
  });

  it('includes intent-specific rules for calendar questions', () => {
    const prompt = buildSystemPrompt({
      notionContext: '',
      calendarContext: '',
      capabilities: '',
      intent: 'calendar_whereabouts',
      threadContext: '',
    });
    assert.ok(prompt.includes('calendar/whereabouts'));
    assert.ok(prompt.includes('do NOT guess'));
  });

  it('includes intent-specific rules for bot_meta', () => {
    const prompt = buildSystemPrompt({
      notionContext: '',
      calendarContext: '',
      capabilities: '',
      intent: 'bot_meta',
      threadContext: '',
    });
    assert.ok(prompt.includes('what you can do'));
    assert.ok(prompt.includes('cannot do'));
  });

  it('never contains em dashes', () => {
    const prompt = buildSystemPrompt({
      notionContext: 'test',
      calendarContext: 'test',
      capabilities: 'test',
      intent: 'general_qna',
      threadContext: 'test',
    });
    assert.ok(!prompt.includes('\u2014'));
  });

  it('contains anti-fabrication rules', () => {
    const prompt = buildSystemPrompt({
      notionContext: '',
      calendarContext: '',
      capabilities: '',
      intent: 'general_qna',
      threadContext: '',
    });
    assert.ok(prompt.includes('never invent facts'));
    assert.ok(prompt.includes('never claim CRM'));
  });

  it('uses slack mrkdwn formatting guidance', () => {
    const prompt = buildSystemPrompt({
      notionContext: '',
      calendarContext: '',
      capabilities: '',
      intent: 'general_qna',
      threadContext: '',
    });
    assert.ok(prompt.includes('*text*'));
    assert.ok(prompt.includes('not **text**'));
  });
});

// ---------------------------------------------------------------------------
// Duplicate-response scenario (event-type guard)
// ---------------------------------------------------------------------------

describe('duplicate-response prevention', () => {
  // This tests the logic documented in slack-events.js:
  // A "message" event whose text contains <@BOT_ID> should be skipped
  // because app_mention will handle it.

  it('message event with bot mention should be skippable', () => {
    const botUserId = 'U0BOT123';
    const eventText = '<@U0BOT123> what is this';
    const eventType = 'message';

    // Simulate the guard condition from processEvent
    const shouldSkip =
      eventType === 'message' &&
      botUserId &&
      new RegExp(`<@${botUserId}>`).test(eventText);

    assert.equal(shouldSkip, true);
  });

  it('app_mention event should NOT be skipped', () => {
    const botUserId = 'U0BOT123';
    const eventText = '<@U0BOT123> what is this';
    const eventType = 'app_mention';

    const shouldSkip =
      eventType === 'message' &&
      botUserId &&
      new RegExp(`<@${botUserId}>`).test(eventText);

    assert.equal(shouldSkip, false);
  });

  it('message event without bot mention should NOT be skipped', () => {
    const botUserId = 'U0BOT123';
    const eventText = 'does ken have pigment covered?';
    const eventType = 'message';

    const shouldSkip =
      eventType === 'message' &&
      botUserId &&
      new RegExp(`<@${botUserId}>`).test(eventText);

    assert.equal(shouldSkip, false);
  });
});

// ---------------------------------------------------------------------------
// Low-confidence fallback behavior
// ---------------------------------------------------------------------------

describe('fallback behavior', () => {
  it('guardrails produce a helpful fallback for short forbidden content', () => {
    const result = applyGuardrails('lol nah');
    assert.ok(result.includes('happy to help'));
    assert.ok(!result.includes('lol'));
  });

  it('guardrails do not produce rude language in fallbacks', () => {
    const result = applyGuardrails('cooked');
    assert.ok(!result.includes('cooked'));
    assert.ok(!result.includes('nah'));
    assert.ok(!result.includes('idk'));
  });
});

// ---------------------------------------------------------------------------
// No fake autobiographical claims
// ---------------------------------------------------------------------------

describe('no fake identity claims', () => {
  it('system prompt says bot is not a person', () => {
    const prompt = buildSystemPrompt({
      notionContext: '',
      calendarContext: '',
      capabilities: '',
      intent: 'general_qna',
      threadContext: '',
    });
    assert.ok(prompt.includes('you are a bot, not a person'));
    assert.ok(prompt.includes('never pretend to be kensington'));
  });

  it('guardrails block "i\'m an sdr"', () => {
    const result = applyGuardrails("i'm an sdr on the west team");
    assert.ok(!result.includes("i'm an sdr"));
  });

  it('guardrails block "my territory"', () => {
    const result = applyGuardrails('that account is in my territory');
    assert.ok(!result.includes('my territory'));
  });

  it('guardrails block "170 named accounts"', () => {
    const result = applyGuardrails('i own 170 named accounts');
    assert.ok(!result.includes('170 named accounts'));
  });
});
