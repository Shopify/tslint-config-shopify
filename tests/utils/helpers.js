const expect = require('chai').expect;

export function verifyRulesCount(ruleCategory, rules, ruleCount) {
  it(`Should have ${ruleCount} ${ruleCategory} rules`, () => {
    expect(Object.keys(rules)).to.have.length(ruleCount);
  });
}
