# Enforce boolean attributes notation in JSX (jsx-boolean-value)

In JSX, when a boolean attributes value is true, explicitly setting it is optional.

The following two examples are both valid in JSX:

Explicitly passing `true`:
```
<Foo bar={true} />
```

Implicitly passing `true`:
```
<Foo bar />
```

This rule will enforce one or the other to keep consistency in your code.

## Config
Rule options: `always`, `never`

Examples:
```
"jsx-boolean-value": [true, "always"]
```
```
"jsx-boolean-value": [true, "never"]
```

## Rule Details

When `always` is set, errors are raised when boolean attributes are missing its value.

Good:
```
<Foo bar={true} />;
```
Bad:
```
<Foo bar />;

```

When `never` is set, errors are raised when `true` is explicitly set.
Good:
```
<Foo bar />;
```
Bad:
```
<Foo bar={true} />;

```

## When Not To Use It

If you do not want to enforce any style for boolean attributes, then you can safely disable this rule.
