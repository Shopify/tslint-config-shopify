# Enforces order of import statement types.

## Rationale
- Improves readability and organization by grouping naturally related items together.

## Rule Details
Enforce order of import statement types. Import structure should be listed in the following order:

* Externals
* Absolute paths
* Parent directories
* Siblings

The following are considered warnings
```js
import Foo from './foo';
import Baz = '../baz';
import BarModule from 'BarModule';
```

The following import order is valid:

```js
export interface TheThreeStooges {
import BarModule from 'BarModule';
import Baz = '../baz';
import Foo from './foo';
}
```

## When Not To Use It

If you do not wish to enforce consistency in your import statements.
