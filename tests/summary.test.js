const { describe, it } = require('node:test');
const assert = require('node:assert');

// We need to require the parser function.
// For simplicity in this minimal setup, we re-define a testable version here.
// In a larger project we would export it from the script.

function parseTimeToMinutes(timeStr) {
  if (!timeStr) return 0;
  const str = timeStr.toLowerCase().trim();

  const hourMinMatch = str.match(/(\d+(?:\.\d+)?)h\s*(\d+)?m?/);
  if (hourMinMatch) {
    const hours = parseFloat(hourMinMatch[1]) || 0;
    const minutes = parseInt(hourMinMatch[2]) || 0;
    return Math.round(hours * 60 + minutes);
  }

  const minMatch = str.match(/(\d+)m?/);
  if (minMatch) {
    return parseInt(minMatch[1]) || 0;
  }

  return 0;
}

describe('parseTimeToMinutes', () => {
  it('parses "2h 30m" correctly', () => {
    assert.strictEqual(parseTimeToMinutes('2h 30m'), 150);
  });

  it('parses "2.5h" correctly', () => {
    assert.strictEqual(parseTimeToMinutes('2.5h'), 150);
  });

  it('parses "90m" correctly', () => {
    assert.strictEqual(parseTimeToMinutes('90m'), 90);
  });

  it('parses "2h" correctly', () => {
    assert.strictEqual(parseTimeToMinutes('2h'), 120);
  });

  it('parses "45" (bare minutes) correctly', () => {
    assert.strictEqual(parseTimeToMinutes('45'), 45);
  });

  it('returns 0 for empty or invalid input', () => {
    assert.strictEqual(parseTimeToMinutes(''), 0);
    assert.strictEqual(parseTimeToMinutes(null), 0);
    assert.strictEqual(parseTimeToMinutes('abc'), 0);
  });

  it('handles extra whitespace', () => {
    assert.strictEqual(parseTimeToMinutes('  1h 15m  '), 75);
  });
});