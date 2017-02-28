// Functionality Specific:
// These rules catch common errors in JS programming or
// otherwise confusing constructs that are prone to producing bugs:
// Reference https://palantir.github.io/tslint/rules/

import consoleMethods from './rule-helpers/console-methods';

export default {
  // Bans the use of specific functions or global methods.
  'ban': false,
  // Enforces braces for `if`/`for`/`do`/`while` statements.
  'curly': true,
  // Requires a `for ... in` statement to be filtered with an `if` statement.
  'forin': true,
  // Disallows importing the specified modules directly via `import` and `require`.
  // Instead only sub modules may be imported from that module.
  'import-blacklist': false,
  // Only allows labels in sensible locations.
  'label-position': true,
  // Disallows use of `arguments.callee`.
  'no-arg': true,
  // Disallows bitwise operators.
  'no-bitwise': true,
  // Disallows any type of assignment in conditionals.
  'no-conditional-assignment': true,
  // Bans the use of specified `console` methods.
  'no-console': consoleMethods,
  // Disallows access to the constructors of `String`, `Number`, and `Boolean`.
  'no-construct': true,
  // Disallows `debugger` statements.
  'no-debugger': true,
  // Disallows duplicate variable declarations in the same block scope.
  'no-duplicate-variable': true,
  // Disallows empty blocks.
  'no-empty': true,
  // Disallows `eval` function invocations.
  'no-eval': true,
  // Disallows iterating over an array with a for-in loop.
  'no-for-in-array': true,
  // Disallow type inference of {} (empty object type) at function and constructor call sites
  'no-inferred-empty-object-type': true,
  // Disallows using the `this` keyword outside of classes.
  'no-invalid-this': true,
  // Disallows use of the `null` keyword literal.
  'no-null-keyword': false,
  // Disallows shadowing variable declarations.
  'no-shadowed-variable': true,
  // Disallows object access via string literals.
  'no-string-literal': false,
  // Flags throwing plain strings or concatenations of strings because only Errors produce proper stack traces.
  'no-string-throw': true,
  // Disallows falling through case statements.
  'no-switch-case-fall-through': true,
  // Disallows control flow statements, such as `return`, `continue`,
  // `break` and `throws` in finally blocks.
  'no-unsafe-finally': true,
  // Disallows unused expression statements.
  'no-unused-expression': true,
  // Disallows unused ‘new’ expression statements.
  'no-unused-new': true,
  // Disallows usage of variables before their declaration.
  'no-use-before-declare': true,
  // Disallows usage of the `var` keyword.
  'no-var-keyword': true,
  // Requires expressions of type `void` to appear in statement position.
  'no-void-expression': false,
  // Requires the radix parameter to be specified when calling `parseInt`.
  'radix': true,
  // When adding two variables, operands must both be of type number or of type string.
  'restrict-plus-operands': true,
  // Usage of &amp;&amp; or || operators should be with boolean operands and
  // expressions in If, Do, While and For statements should be of type boolean
  'strict-boolean-expressions': false,
  // Require a `default` case in all `switch` statements.
  'switch-default': false,
  // Requires `===` and `!==` in place of `==` and `!=`.
  'triple-equals': [true, 'allow-null-check'],
  // Makes sure result of `typeof` is compared to correct string values
  'typeof-compare': true,
  // Enforces use of the `isNaN()` function to check for NaN references instead of a comparison to the `NaN` constant.
  'use-isnan': true,
};
