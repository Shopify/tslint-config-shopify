// Style:
// These rules enforce consistent style across your codebase
// Reference https://palantir.github.io/tslint/rules/

import spaceBeforeFunctionParen from './rule-helpers/space-before-function-paren-rule';

export default {
  // Enforces vertical alignment.
  'align': true,
  // Requires using either ‘T[]’ or ‘Array' for arrays.
  'array-type': false,
  // Requires parentheses around the parameters of arrow function definitions.
  'arrow-parens': true,
  // Suggests to convert () => { return x; } to () => x.
  'arrow-return-shorthand': true,
  // In a binary expression, a literal should always be on the right-hand side if possible. For example, prefer ‘x + 1’ over ‘1 + x’.
  'binary-expression-operand-order': true,
  // An interface or literal type with just a call signature can be written as a function type.
  'callable-types': false,
  // Enforces PascalCased class and interface names.
  'class-name': true,
  // Enforces formatting rules for single-line comments.
  'comment-format': [true, 'check-space'],
  // Enforces documentation for important items be filled out.
  'completed-docs': false,
  // Enforces UTF-8 file encoding.
  'encoding': true,
  // Enforces a certain header comment for all files, matched by a regular expression.
  'file-header': false,
  // Ensures proper spacing between import statement keywords
  'import-spacing': true,
  // Requires interface names to begin with a capital ‘I’
  'interface-name': false,
  // Prefer an interface declaration over a type literal (`type T = { ... }`)
  'interface-over-type-literal': true,
  // Enforces basic format rules for JSDoc comments.
  'jsdoc-format': true,
  // Requires that a default import have the same name as the declaration it imports. Does nothing for anonymous default exports.
  'match-default-export-name': false,
  // Enforces blank line before return when not the only line in the block.
  'newline-before-return': false,
  // Requires parentheses when invoking a constructor via the `new` keyword.
  'new-parens': true,
  // Requires the use of `as Type` for type assertions instead of `<Type>`.
  'no-angle-bracket-type-assertion': true,
  // Warns on comparison to a boolean literal, as in x === true.
  'no-boolean-literal-compare': true,
  // Disallows one or more blank lines in a row.
  'no-consecutive-blank-lines': [true, 2],
  // Disallow irregular whitespace outside of strings and comments
  'no-irregular-whitespace': true,
  // Disallows parameter properties in class constructors.
  'no-parameter-properties': false,
  // Don’t if you import “foo” anyway.
  'no-reference-import': true,
  // Enforces consistent object literal property quote style.
  'object-literal-key-quotes': [true, 'as-needed'],
  // Enforces use of ES6 object literal shorthand when possible.
  'object-literal-shorthand': true,
  // Requires the specified tokens to be on the same line as the expression preceding them.
  'one-line': [true, 'check-catch', 'check-finally', 'check-else', 'check-open-brace', 'check-whitespace'],
  // Disallows multiple variable definitions in the same declaration statement.
  'one-variable-per-declaration': true,
  // Requires that import statements be alphabetized.
  'ordered-imports': false,
  // Warns for class methods that do not use ‘this’.
  'prefer-function-over-method': true,
  // Prefer foo(): void over foo: () => void in interfaces and types.
  'prefer-method-signature': true,
  // Prefer a switch statement to an if statement with simple === comparisons.
  'prefer-switch': false,
  // Prefer a template expression over string literal concatenation.
  'prefer-template': true,
  // Prefer return; in void functions and return undefined; in value-returning functions.
  'return-undefined': false,
  // Requires single or double quotes for string literals.
  'quotemark': [true, 'single', 'jsx-double', 'avoid-escape'],
  // Enforces consistent semicolon usage at the end of every statement.
  'semicolon': [true, 'always', 'ignore-interfaces'],
  // Require or disallow a space before function parenthesis
  'space-before-function-paren': spaceBeforeFunctionParen,
  // Checks whether the final clause of a switch statement ends in break;.
  'switch-final-break': true,
  // Checks that type literal members are separated by semicolons. Enforces a trailing semicolon for multiline type literals.
  'type-literal-delimiter': false,
  // Checks variable names for various errors.
  'variable-name': [true, 'ban-keywords', 'check-format', 'allow-pascal-case'],
  // Enforces whitespace style conventions.
  'whitespace': [true, 'check-branch', 'check-decl', 'check-operator', 'check-module', 'check-separator', 'check-type', 'check-typecast'],
};
