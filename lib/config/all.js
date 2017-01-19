var merge = require('merge');

module.exports = {

  env: {
    es6: true,
    node: true,
  },

  plugins: [
    'typescript',
  ],

  rules: merge(
    require('./rules/functionality'),
    require('./rules/maintainability'),
    require('./rules/style'),
    require('./rules/typescript')
  ),
};
