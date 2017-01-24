module.exports = {
  'extends': [
    'plugin:shopify/esnext',
    'plugin:shopify/mocha'
  ],

  'rules': {
    'quotes':  ['warn', 'single', { 'allowTemplateLiterals': true }],
  },
};
