# Enforces a certain structure in your import statements

## Rationale
- Consistency in import statement structure throughout the codebase

## Rule Details
Enforce a certain structure in your imports. Import structure should be listed in the following order:

* Module imports
* Absolute imports
* Relative parent/ancestor directory imports
* Relative sibling directory imports

The following are considered warnings
```js
import Foo from './foo';
import Baz = '../baz';
import BarModule from 'BarModule';
```

The following patterns are not warnings:

```js
export interface TheThreeStooges {
import BarModule from 'BarModule';
import Baz = '../baz';
import Foo from './foo';
}
```

## When Not To Use It

If you do not with to enforce consistency in your import structuring.
