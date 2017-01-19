var merge = require('merge');

module.exports = {
  rules: merge(
    require('./rules/functionality'),
    require('./rules/maintainability'),
    require('./rules/style'),
    require('./rules/typescript')
  ),
};
