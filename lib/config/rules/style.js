// Style:
// These rules enforce consistent style across your codebase
// Reference https://palantir.github.io/tslint/rules/

module.exports = {
  // Enforces vertical alignment. <FEEDBACK>
  align: false,
  // Requires using either ‘T[]’ or ‘Array' for arrays. <FEEDBACK>
  'array-type': false,
  // Requires parentheses around the parameters of arrow function definitions.
  'arrow-parens': true,
  // An interface or literal type with just a call signature can be written as a function type.
  'callable-types': false,
  // Enforces PascalCased class and interface names.
  'class-name': true,
  // Enforces formatting rules for single-line comments.
  'comment-format': [true, 'check-space'],
  // Enforces documentation for important items be filled out.
  'completed-docs': false,
  // Enforces a certain header comment for all files, matched by a regular expression.
  'file-header': false,
  // Ensures proper spacing between import statement keywords
  'import-spacing': true,
  // Requires interface names to begin with a capital ‘I’ <FEEDBACK>
  'interface-name': false,
  // Prefer an interface declaration over a type literal (`type T = { ... }`)
  'interface-over-type-literal': false,
  // Enforces basic format rules for JSDoc comments. <FEEDBACK>
  'jsdoc-format': false,
  // Requires parentheses when invoking a constructor via the `new` keyword.
  'new-parens': true,
  // Requires the use of `as Type` for type assertions instead of `<Type>`. <FEEDBACK>
  'no-angle-bracket-type-assertion': false,
  // Disallows one or more blank lines in a row. <FEEDBACK>
  'no-consecutive-blank-lines': [true, 2],
  // Disallows parameter properties in class constructors. <FEEDBACK>
  'no-parameter-properties': false,
  // Enforces consistent object literal property quote style.
  'object-literal-key-quotes': [true, 'as-needed'],
  // Enforces use of ES6 object literal shorthand when possible.
  'object-literal-shorthand': true,
  // Requires the specified tokens to be on the same line as the expression preceding them. <FEEDBACK>
  'one-line': false,
  // Disallows multiple variable definitions in the same declaration statement. <FEEDBACK>
  'one-variable-per-declaration': false,
  // Requires that import statements be alphabetized. <FEEDBACK>
  'ordered-imports': false,
  // Requires single or double quotes for string literals.
  quotemark: [true, 'single', 'jsx-single', 'avoid-escape'],
  // Enforces consistent semicolon usage at the end of every statement. <FEEDBACK> https://palantir.github.io/tslint/rules/semicolon/
  semicolon: [true, 'always'],
  // Require or disallow a space before function parenthesis
  'space-before-function-paren': false,
  // Checks variable names for various errors.
  'variable-name': [true, 'ban-keywords', 'check-format', 'allow-leading-underscore'],
  // Enforces whitespace style conventions.
  whitespace: [true, 'check-decl', 'check-operator', 'check-module', 'check-separator', 'check-type', 'check-typecast'],
};
