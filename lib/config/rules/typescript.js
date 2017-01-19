// Typescript Specific:
// These rules find errors related to TypeScript features
// Reference https://palantir.github.io/tslint/rules/

module.exports = {
  // Enforces function overloads to be consecutive.
  'adjacent-overload-signatures': 'off',
  // Requires explicit visibility declarations for class members. // ???
  'member-access': 'off',
  // Enforces member ordering. // ??? https://palantir.github.io/tslint/rules/member-ordering/
  'member-ordering': 'off',
  // Diallows usages of `any` as a type declaration. // ???
  'no-any': 'off',
  // Forbids empty interfaces. // ???
  'no-empty-interface': 'off',
  // Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean. // ???
  'no-inferrable-types': 'off',
  // Disallows internal `module` // ???
  'no-internal-module': 'off',
  // Disallows the use constant number values outside of variable assignments.
  // When no list of allowed values is specified, -1, 0 and 1 are allowed by default.
  'no-magic-numbers': 'off',
  // Disallows use of internal `modules` and `namespaces`.
  'no-namespace': 'off',
  // Disallows `/// <reference path=>` imports (use ES6-style imports instead). // ???
  'no-reference': 'off',
  // Disallows the use of require statements except in import statements. // ???
  'no-var-requires': 'off',
  // Disallows traditional (non-arrow) function expressions.
  'only-arrow-functions': 'off',
  // Recommends a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated.
  'prefer-for-of': 'off',
  // Requires any function or method that returns a promise to be marked async.
  'promise-function-async': 'off',
  // Requires type definitions to exist. // ???
  typedef: 'off',
  // Requires or disallows whitespace for type definitions. // ???
  'typedef-whitespace': 'off',
  // Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter. // ???
  'unified-signatures': 'off',
};
