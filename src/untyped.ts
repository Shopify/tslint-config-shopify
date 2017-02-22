module.exports = {
  'extends': './base',
   'rules': {
    // Warns for an awaited value that is not a Promise.
    'await-promise': false,
    // Warns on comparison to a boolean literal, as in x === true.
    'no-boolean-literal-compare': false,
    // Promises returned by functions must be handled appropriately.
    'no-floating-promises': false,
    // Disallows iterating over an array with a for-in loop.
    'no-for-in-array': false,
    // Disallow type inference of {} (empty object type) at function and constructor call sites
    'no-inferred-empty-object-type': false,
    // Warns when a method is used as outside of a method call.
    'no-unbound-method': false,
    // Warns when a namespace qualifier (A.x) is
    'no-unnecessary-qualifier': false,
     // Warns when using an expression of type ‘any’ in an unsafe way. Type casts and tests are allowed. Expressions that work on all values (such as ‘”” + x’) are allowed.
    'no-unsafe-any': false,
    // Requires expressions of type void to appear in statement position.
    'no-void-expression': false,
    // Requires any function or method that returns a promise to be marked async.
    'promise-function-async': false,
    // When adding two variables, operands must both be of type number or of type string.
    'restrict-plus-operands': false,
    // Usage of &amp;&amp; or || operators should be with boolean operands and
    // expressions in If, Do, While and For statements should be of type boolean
    'strict-boolean-expressions': false,
    // Warns for type predicates that are always true or always false. Works for ‘typeof’ comparisons to constants (e.g. ‘typeof foo === “string”’), and equality comparison to ‘null’/’undefined’. (TypeScript won’t let you compare ‘1 === 2’, but it has an exception for ‘1 === undefined’.) Does not yet work for ‘instanceof’. Does not warn for ‘if (x.y)’ where ‘x.y’ is always truthy. For that, see strict-boolean-expressions.
    'strict-type-predicates': false,
  },
};
