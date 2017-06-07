// Functionality Specific:
// These rules catch common errors in JS programming or
// otherwise confusing constructs that are prone to producing bugs:
// Reference https://palantir.github.io/tslint/rules/

import consoleMethods from './rule-helpers/console-methods';

export default {
  // Warns for an awaited value that is not a Promise.
  'await-promise': true,
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
   // Warns if ‘super()’ appears twice in a constructor.
  'no-duplicate-super': true,
  // Disallows duplicate variable declarations in the same block scope.
  'no-duplicate-variable': true,
  // Disallows empty blocks.
  'no-empty': true,
  // Disallows `eval` function invocations.
  'no-eval': true,
   // Promises returned by functions must be handled appropriately.
  'no-floating-promises': false,
  // Disallows iterating over an array with a for-in loop.
  'no-for-in-array': true,
  // Disallow type inference of {} (empty object type) at function and constructor call sites
  'no-inferred-empty-object-type': true,
  // Warns on use of ${ in non-template strings.
  'no-invalid-template-strings': true,
  // Disallows using the `this` keyword outside of classes.
  'no-invalid-this': true,
  // Warns on apparent attempts to define constructors for interfaces or new for classes.
  'no-misused-new': true,
  // Disallows use of the `null` keyword literal.
  'no-null-keyword': false,
  // Forbids an object literal to appear in a type assertion expression. Casting to any is still allowed.
  'no-object-literal-type-assertion': true,
  // Disallows shadowing variable declarations.
  'no-shadowed-variable': true,
  // Forbids array literals to contain missing elements.
  'no-sparse-arrays': true,
  // Disallows object access via string literals.
  'no-string-literal': false,
  // Flags throwing plain strings or concatenations of strings because only Errors produce proper stack traces.
  'no-string-throw': true,
  // Disallows falling through case statements.
  'no-switch-case-fall-through': true,
   // Warns when a method is used as outside of a method call.
  'no-unbound-method': false,
   // Warns when using an expression of type ‘any’ in an unsafe way. Type casts and tests are allowed. Expressions that work on all values (such as ‘”” + x’) are allowed.
  'no-unsafe-any': false,
  // Disallows control flow statements, such as `return`, `continue`,
  // `break` and `throws` in finally blocks.
  'no-unsafe-finally': true,
  // Disallows unused expression statements.
  'no-unused-expression': true,
  // Disallows unused imports, variables, functions and private class members. Similar to tsc’s –noUnusedParameters and –noUnusedLocals options, but does not interrupt code compilation.
  'no-unused-variable': false,
  // Disallows usage of variables before their declaration.
  'no-use-before-declare': true,
  // Disallows usage of the `var` keyword.
  'no-var-keyword': true,
  // Requires expressions of type `void` to appear in statement position.
  'no-void-expression': false,
  // Recommends to use a conditional expression instead of assigning to the same thing in each branch of an if statement. <FEEDBACK>
  'prefer-conditional-expression': false,
  // Enforces the use of the ES2015 object spread operator over Object.assign() where appropriate.
  'prefer-object-spread': true,
  // Requires the radix parameter to be specified when calling `parseInt`.
  'radix': true,
  // When adding two variables, operands must both be of type number or of type string.
  'restrict-plus-operands': true,
  // Usage of &amp;&amp; or || operators should be with boolean operands and
  // expressions in If, Do, While and For statements should be of type boolean
  'strict-boolean-expressions': false,
  // Warns for type predicates that are always true or always false. Works for ‘typeof’ comparisons to constants (e.g. ‘typeof foo === “string”’), and equality comparison to ‘null’/’undefined’. (TypeScript won’t let you compare ‘1 === 2’, but it has an exception for ‘1 === undefined’.) Does not yet work for ‘instanceof’. Does not warn for ‘if (x.y)’ where ‘x.y’ is always truthy. For that, see strict-boolean-expressions.
  'strict-type-predicates': false,
  // Require a `default` case in all `switch` statements.
  'switch-default': false,
  // Requires `===` and `!==` in place of `==` and `!=`.
  'triple-equals': [true, 'allow-null-check'],
  // Makes sure result of `typeof` is compared to correct string values
  'typeof-compare': true,
  // Warns if an explicitly specified type argument is the default for that type parameter. <FEEDBACK>
  'use-default-type-parameter': false,
  // Enforces use of the `isNaN()` function to check for NaN references instead of a comparison to the `NaN` constant.
  'use-isnan': true,
};
