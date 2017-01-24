module.exports = {
  'extends': 'plugin:shopify/esnext',

  // Allow the following global variables
  'env': {
   'mocha': true
  },

  'rules': {
    'quotes':  ['warn', 'single', { 'allowTemplateLiterals': true }],
  }
};
