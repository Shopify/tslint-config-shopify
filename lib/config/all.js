// Aggregate all the tslint rules
// See https://palantir.github.io/tslint/rules/

var merge = require('merge');

module.exports = merge(
  require('./rules/functionality'),
  require('./rules/maintainability'),
  require('./rules/style'),
  require('./rules/typescript')
);
