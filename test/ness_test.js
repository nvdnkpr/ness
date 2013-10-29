var assert = require('assert');
var ness = require('..');

describe('test', function() {
  it('evaluates zero to true', function() {
    assert.strictEqual(ness(0).test(), true);
  });

  it('evaluates empty string to true', function() {
    assert.strictEqual(ness('').test(), true);
  });

  it('evaluates NaN to true', function() {
    assert.strictEqual(ness(NaN).test(), true);
  });

  it('evaluates false to false', function() {
    assert.strictEqual(ness(false).test(), false);
  });

  it('evaluates null to false', function() {
    assert.strictEqual(ness(null).test(), false);
  });

  it('evaluates undefined to false', function() {
    assert.strictEqual(ness(undefined).test(), false);
  });
});
