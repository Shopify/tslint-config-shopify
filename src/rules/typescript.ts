// Typescript Specific:
// These rules find errors related to TypeScript features
// Reference https://palantir.github.io/tslint/rules/

import {typedefWhitespaceLeft, typedefWhitespaceRight} from './rule-helpers/typedef-whitespace';
import memberOrderingList from './rule-helpers/member-ordering-list';

export default {
  // Enforces function overloads to be consecutive.
  'adjacent-overload-signatures': true,
  // Bans specific types from being used. Does not ban the corresponding runtime objects from being used.
  'ban-types': false,
  // Requires explicit visibility declarations for class members.
  'member-access': false,
  // Enforces member ordering.
  'member-ordering': [true, {'order': memberOrderingList}],
  // Diallows usages of `any` as a type declaration.
  'no-any': false,
  // Forbids empty interfaces.
  'no-empty-interface': false,
  // Avoid import statements with side-effect.
  'no-import-side-effect': false,
  // Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean.
  'no-inferrable-types': true,
  // Disallows internal `module`
  'no-internal-module': false,
  // Disallows the use constant number values outside of variable assignments.
  // When no list of allowed values is specified, -1, 0 and 1 are allowed by default.
  'no-magic-numbers': false,
  // Disallows use of internal `modules` and `namespaces`.
  'no-namespace': false,
  // Disallows non-null assertions.
  'no-non-null-assertion': true,
  // Disallows `/// <reference path=>` imports (use ES6-style imports instead).
  'no-reference': true,
  // Disallows the use of require statements except in import statements.
  'no-var-requires': true,
  // Warns if a type assertion does not change the type of an expression.
  'no-unnecessary-type-assertion': true,
  // Disallows traditional (non-arrow) function expressions.
  'only-arrow-functions': false,
  // Recommends a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated.
  'prefer-for-of': true,
  // Requires any function or method that returns a promise to be marked async.
  'promise-function-async': false,
  // Requires type definitions to exist.
  'typedef': false,
  // Requires or disallows whitespace for type definitions.
  'typedef-whitespace': [true, typedefWhitespaceLeft, typedefWhitespaceRight],
  // Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter.
  'unified-signatures': true,
};
