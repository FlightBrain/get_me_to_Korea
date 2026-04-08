import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { isDuplicate } from '../lib/dedup.js';
import { cleanSlackText } from '../lib/parse.js';
import { classifyIntent } from '../lib/intent.js';
import { detectTrigger } from '../lib/trigger.js';
import { applyGuardrails } from '../lib/guardrails.js';

// -- Dedup --

describe('isDuplicate', () => {
  it('returns false for first occurrence', () => {
    const event = { channel: 'C999', ts: '1111.0001', user: 'U1' };
    assert.equal(isDuplicate(event), false);
  });

  it('returns true for same event seen twice', () => {
    const event = { channel: 'C999', ts: '2222.0001', user: 'U1' };
    isDuplicate(event); // first
    assert.equal(isDuplicate(event), true);
  });

  it('treats different ts as different events', () => {
    const e1 = { channel: 'C999', ts: '3333.0001', user: 'U1' };
    const e2 = { channel: 'C999', ts: '3333.0002', user: 'U1' };
    isDuplicate(e1);
    assert.equal(isDuplicate(e2), false);
  });
});

// -- Parse --

describe('cleanSlackText', () => {
  it('strips user mentions', () => {
    assert.equal(
      cleanSlackText('<@U0AR6BMV46B> what is this'),
      'what is this'
    );
  });

  it('strips user mentions with display name', () => {
    assert.equal(
      cleanSlackText('<@U0AR6BMV46B|Claudesington> hello'),
      'hello'
    );
  });

  it('converts channel mentions to readable form', () => {
    assert.equal(
      cleanSlackText('<#C093Z82DK18|sdr-playersonly> check this'),
      '#sdr-playersonly check this'
    );
  });

  it('strips multiple mentions and collapses whitespace', () => {
    assert.equal(
      cleanSlackText('#kensington-belza-helpdesk <@U0AR6BMV46B> what is this'),
      '#kensington-belza-helpdesk what is this'
    );
  });

  it('preserves URLs in label form', () => {
    assert.equal(
      cleanSlackText('check <https://braintrust.dev|braintrust.dev>'),
      'check braintrust.dev'
    );
  });

  it('returns empty string for null input', () => {
    assert.equal(cleanSlackText(null), '');
  });
});

// -- Intent --

describe('classifyIntent', () => {
  it('detects calendar/whereabouts', () => {
    assert.equal(classifyIntent('where is ava today'), 'calendar_whereabouts');
  });

  it('detects account/pipeline', () => {
    assert.equal(classifyIntent('what is the pipeline looking like'), 'account_or_pipeline');
  });

  it('detects person lookup', () => {
    assert.equal(classifyIntent('who is nick'), 'identity_person_lookup');
  });

  it('detects resource requests', () => {
    assert.equal(classifyIntent('do we have a case study for search'), 'braintrust_resources');
  });

  it('detects bot meta questions', () => {
    assert.equal(classifyIntent('what can you do'), 'bot_meta');
  });

  it('detects banter', () => {
    assert.equal(classifyIntent('lol'), 'banter');
  });

  it('defaults to general_qna', () => {
    assert.equal(classifyIntent('how do I set up a demo environment'), 'general_qna');
  });
});

// -- Trigger --

describe('detectTrigger', () => {
  it('matches claudesington mention', () => {
    assert.equal(detectTrigger('hey claudesington whats up'), 'direct');
  });

  it('matches typo claudsington', () => {
    assert.equal(detectTrigger('claudsington help'), 'direct');
  });

  it('matches inferred account question', () => {
    assert.equal(detectTrigger('does ken have pigment covered?'), 'inferred');
  });

  it('returns null for unrelated message', () => {
    assert.equal(detectTrigger('anyone want lunch'), null);
  });

  it('returns null for empty text', () => {
    assert.equal(detectTrigger(''), null);
  });
});

// -- Guardrails --

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

  it('strips em dashes', () => {
    const result = applyGuardrails('hello \u2014 world');
    assert.ok(!result.includes('\u2014'));
    assert.ok(result.includes(','));
  });

  it('passes clean replies through unchanged', () => {
    const input = 'dropbox is a great case study for search/rag. https://braintrust.dev/customers/dropbox';
    assert.equal(applyGuardrails(input), input);
  });

  it('does not block normal use of "ask" + person name', () => {
    const input = 'you could ask kensington about that one';
    assert.equal(applyGuardrails(input), input);
  });
});
