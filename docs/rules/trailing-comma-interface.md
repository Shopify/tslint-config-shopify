# Requires (or disallows) trailing commas in interface property definitions.

## Rationale
- Team preference.

## Rule Details
Typescript accepts trailing semicolons in interface properties, however this rule will enforce trailing commas instead.

When enabled, this rule enforces trailing commas in interface properties. This rule does not have any options.

The following are considered warnings
```js
export interface TheThreeStooges {
  curly?: string[];
  larry: number;
  moe: number
}
```

The following patterns are not warnings:

```js
export interface TheThreeStooges {
  curly?: string[],
  larry: number,
  moe: number,
}
```

## When Not To Use It

If you do not wish to enforce trailing commas in interface property definitions, then you can safely disable this rule.
