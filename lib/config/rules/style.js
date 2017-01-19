// Style:
// These rules enforce consistent style across your codebase
// Reference https://palantir.github.io/tslint/rules/
module.exports = {
  // Enforces vertical alignment.
  align: false,
  // Requires using either ‘T[]’ or ‘Array' for arrays.
  'array-type': false,
  // Requires parentheses around the parameters of arrow function definitions.
  'arrow-parens': false,
  // An interface or literal type with just a call signature can be written as a function type.
  'callable-types': false,
  // Enforces PascalCased class and interface names.
  'class-name': false,
  // Enforces formatting rules for single-line comments.
  'comment-format': false,
  // Enforces documentation for important items be filled out.
  'completed-docs': false,
  // Enforces a certain header comment for all files, matched by a regular expression.
  'file-header': false,
  // Ensures proper spacing between import statement keywords
  'import-spacing': false,
  // Requires interface names to begin with a capital ‘I’
  'interface-name': false,
  // Prefer an interface declaration over a type literal (`type T = { ... }`)
  'interface-over-type-literal': false,
  // Enforces basic format rules for JSDoc comments.
  'jsdoc-format': false,
  // Requires parentheses when invoking a constructor via the `new` keyword.
  'new-parens': false,
  // Requires the use of `as Type` for type assertions instead of `&lt;Type&gt;`.
  'no-angle-bracket-type-assertion': false,
  // Disallows one or more blank lines in a row.
  'no-consecutive-blank-lines': false,
  // Disallows parameter properties in class constructors.
  'no-parameter-properties': false,
  // Enforces consistent object literal property quote style.
  'object-literal-key-quotes': false,
  // Enforces use of ES6 object literal shorthand when possible.
  'object-literal-shorthand': false,
  // Requires the specified tokens to be on the same line as the expression preceding them.
  'one-line': false,
  // Disallows multiple variable definitions in the same declaration statement.
  'one-variable-per-declaration': false,
  // Requires that import statements be alphabetized.
  'ordered-imports': false,
  // Requires single or double quotes for string literals.
  quotemark: false,
  // Enforces consistent semicolon usage at the end of every statement.
  semicolon: false,
  // Require or disallow a space before function parenthesis
  'space-before-function-paren': false,
  // Checks variable names for various errors.
  'variable-name': false,
  // Enforces whitespace style conventions.
  whitespace: false,
};
