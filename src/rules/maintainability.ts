// Maintainability:
// These rules make code maintenance easier
// Reference https://palantir.github.io/tslint/rules/

export default {
  // Enforces a threshold of cyclomatic complexity.
  'cyclomatic-complexity': false,
  // Ensures the file ends with a newline.
  'eofline': true,
  // Enforces indentation with tabs or spaces.
  'indent': [true, 'spaces', 2],
  // Enforces a consistent linebreak style.
  'linebreak-style': false,
  // A file may not contain more than the specified number of classes
  'max-classes-per-file': false,
  // Requires files to remain under a certain number of lines
  'max-file-line-count': false,
  // Requires lines to be under a certain max length.
  'max-line-length': false,
  // Disallows default exports in ES6-style modules.
  'no-default-export': false,
  // Disallows mergeable namespaces in the same file.
  'no-mergeable-namespace': true,
  // Disallows invocation of `require()`.
  'no-require-imports': true,
  // Disallows trailing whitespace at the end of a line.
  'no-trailing-whitespace': true,
  // Replaces x => f(x) with just f. To catch more cases, enable only-arrow-functions and arrow-return-shorthand too.
  'no-unnecessary-callback-wrapper': true,
  // Forbids a ‘var’/’let’ statement or destructuring initializer to be initialized to ‘undefined’.
  'no-unnecessary-initializer': true,
  // Warns when a namespace qualifier (A.x) is unnecessary.
  'no-unnecessary-qualifier': true,
  // Requires keys in object literals to be sorted alphabetically
  'object-literal-sort-keys': false,
  // Requires that variable declarations use `const` instead of `let` if possible.
  'prefer-const': true,
  // Requires or disallows trailing commas in array and object literals, destructuring assignments, function
  // and tuple typings, named imports and function parameters.
  'trailing-comma': [true, {'multiline': 'always', 'singleline': 'never'}],
};
