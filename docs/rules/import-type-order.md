# Enforces order of import statement types.

## Rationale
- Improves readability and organization by grouping naturally related items together.

## Rule Details
Enforce order of import statement types. Import statments should be listed in the following order:

- Externals
- Absolute paths
- Parent paths
- Sibling paths

The following are considered warnings
```js
import Foo from './foo'; // Should come after external and parent imports.
import Baz = '../baz'; // Should come after external imports
import BarModule from 'BarModule';
```

The following import order is valid:

```js
import BarModule from 'BarModule';
import Baz = '../baz';
import Foo from './foo';
```

## When Not To Use It

If you do not wish to enforce consistency in your import statements.
