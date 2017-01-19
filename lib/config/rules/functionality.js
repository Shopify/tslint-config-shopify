// Functionality Specific:
// These rules catch common errors in JS programming or
// otherwise confusing constructs that are prone to producing bugs:
// Reference https://palantir.github.io/tslint/rules/

module.exports = {
  // Bans the use of specific functions or global methods.
  ban: false,
  // Enforces braces for `if`/`for`/`do`/`while` statements.
  curly: false,
  // Requires a `for ... in` statement to be filtered with an `if` statement.
  forin: false,
  // Disallows importing the specified modules directly via `import` and `require`.
  // Instead only sub modules may be imported from that module.
  'import-blacklist': false,
  // Only allows labels in sensible locations.
  'label-position': false,
  // Disallows use of `arguments.callee`.
  'no-arg': false,
  // Disallows bitwise operators.
  'no-bitwise': false,
  // Disallows any type of assignment in conditionals.
  'no-conditional-assignment': false,
  // Bans the use of specified `console` methods.
  'no-console': false,
  // Disallows access to the constructors of `String`, `Number`, and `Boolean`. 
  'no-construct': false,
  // Disallows `debugger` statements.
  'no-debugger': false,
  // Disallows duplicate variable declarations in the same block scope.
  'no-duplicate-variable': false,
  // Disallows empty blocks.
  'no-empty': false,
  // Disallows `eval` function invocations.
  'no-eval': false,
  // Disallows iterating over an array with a for-in loop.
  'no-for-in-array': false,
  // Disallow type inference of {} (empty object type) at function and constructor call sites
  'no-inferred-empty-object-type': false,
  // Disallows using the `this` keyword outside of classes.
  'no-invalid-this': false,
  // Disallows use of the `null` keyword literal.
  'no-null-keyword': false,
  // Disallows shadowing variable declarations.
  'no-shadowed-variable': false,
  // Disallows object access via string literals.
  'no-string-literal': false,
  // Flags throwing plain strings or concatenations of strings because only Errors produce proper stack traces.
  'no-string-throw': false,
  // Disallows falling through case statements.
  'no-switch-case-fall-through': false,
  // Disallows control flow statements, such as `return`, `continue`,
  // `break` and `throws` in finally blocks.
  'no-unsafe-finally': false,
  // Disallows unused expression statements.
  'no-unused-expression': false,
  // Disallows unused ‘new’ expression statements.
  'no-unused-new': false,
  // Disallows usage of variables before their declaration.
  'no-use-before-declare': false,
  // Disallows usage of the `var` keyword.
  'no-var-keyword': false,
  // Requires expressions of type `void` to appear in statement position.
  'no-void-expression': false,
  // Requires the radix parameter to be specified when calling `parseInt`.
  radix: false,
  // When adding two variables, operands must both be of type number or of type string.
  'restrict-plus-operands': false,
  // Usage of &amp;&amp; or || operators should be with boolean operands and
  // expressions in If, Do, While and For statements should be of type boolean
  'strict-boolean-expressions': false,
  // Require a `default` case in all `switch` statements.
  'switch-default': false,
  // Requires `===` and `!==` in place of `==` and `!=`.
  'triple-equals': false,
  // Makes sure result of `typeof` is compared to correct string values
  'typeof-compare': false,
  // Enforces use of the `isNaN()` function to check for NaN references instead of a comparison to the `NaN` constant.
  'use-isnan': false,
};
