const assert = require("node:assert/strict");
const model = require("../model.js");

assert.equal(model.forceNeeded(4), 30);
assert.equal(model.forceNeeded(8), 15);
assert.equal(model.forceNeeded(12), 10);

assert.equal(model.mechanicalAdvantageFromForce(30), 2);
assert.equal(model.mechanicalAdvantageFromForce(15), 4);
assert.equal(model.mechanicalAdvantageFromForce(10), 6);

assert.deepEqual(model.RADIUS_OPTIONS.map((option) => option.radiusCm), [4, 8, 12]);

console.log("model checks passed");
