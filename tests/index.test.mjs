import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('plain gauge', () => {
  assert.equal(api.stitchCount(50, 20, 10), 100);
});
test('repeat and edges', () => {
  assert.equal(api.stitchCount(51, 20, 10, 8, 2), 106);
});
test('edge minimum', () => {
  assert.equal(api.stitchCount(1, 1, 10, 4, 5), 5);
});
test('row ceiling', () => {
  assert.equal(api.rowCount(21, 30, 10), 63);
  assert.equal(api.rowCount(20.1, 30, 10), 61);
});
test('repeat property', () => {
  for (let w = 1; w <= 100; w++) {
    const n = api.stitchCount(w, 20, 10, 6, 2);
    assert.equal((n - 2) % 6, 0);
    assert.ok(n >= w * 2);
  }
});
test('invalid and unsafe', () => {
  assert.throws(() => api.stitchCount(0, 20, 10));
  assert.throws(() => api.rowCount(1, 0, 10));
  assert.throws(() => api.stitchCount(1e6, 1e6, 1e-6));
});
