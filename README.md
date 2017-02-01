# tslint-config-shopify :+1:
[![Circle CI](https://circleci.com/gh/Shopify/eslint-plugin-shopify.svg?style=svg)](https://circleci.com/gh/Shopify/tslint-config-shopify)

Shopify’s TSlint rules and configs.

## Installation

Install [TSlint](https://palantir.github.io/tslint/) and `tslint-config-shopify`:

**With Yarn**
```
yarn add --dev tslint tslint-config-shopify
```

**With npm**
```
npm install tslint tslint-config-shopify --save-dev
```


## Usage
Shopify’s TSLint rules come bundled in `tslint-config-shopify`.
To enable these rules, create a `tslint.json` file at the root level of your project, and extend `tslint-config-shopify`.
```
{
  "extends": "tslint-config-shopify"
}
```

Now you can run TSLint by adding the following linting script to your `package.json`. See [here](https://palantir.github.io/tslint/usage/cli/) for more script configurations.
```
{
  "scripts": {
    "tslint": "tslint -c tslint.json './src/**/*.{ts,tsx}' --project tsconfig.json --type-check"
  }
}
```
Run it:

**With Yarn**
```
yarn run tslint
```

**With npm**
```
npm run tslint
```


## Configuration
* See [here](https://palantir.github.io/tslint/usage/tslint-json/) for more details on configuring your `tslint.json`.
* See [here](https://palantir.github.io/tslint/rules/) for all the rules provided by [TSlint](https://palantir.github.io/tslint/)

Some of the rules configured in `tslint-config-shopify`  may not be sufficient for your project.
Override these rules in `tslint.json`:

```json
{
  "extends": "tslint-config-shopify",
  "rules": {
    "no-console": false
  }
}
```

## Inline Linting in Text Editors


`tslint-config-shopify` comes with a few rules that require type-checking to be enabled, however `tslint` uses a [private API](https://github.com/palantir/tslint/issues/1445#issuecomment-236330061) to resolves rules that require `type-checking`.

For this reason, text editors will fail when trying to resolve rules that require `type-checking`.

To resolve this issue, turn off the rules that require type-checking in your `tslint.json`

```json
{
  "extends": ["./config/tslint-full.json"],
  "rules": {
    "no-for-in-array": false,
    "no-inferred-empty-object-type": false,
    "restrict-plus-operands": false
  }
}
```

However, this will omit validating these rules in your `tslint` script. To enable the `type-checking` rules to be validated in your script, it is [recommended](https://github.com/Microsoft/vscode-tslint/issues/70#issuecomment-263120859) that you run your CLI `tslint` script against a sepereate `tslint.json` file.

Eg: `./config/tslint-full.json`
```json
{
  "extends": ["tslint-config-shopify"]
}
```

Then update your CLI tslint script to run against `tslint-full.json`.

```json
{
  "scripts": {
    "tslint": "tslint -c ./config/tslint-full.json './src/**/*.{ts,tsx}' --project tsconfig.json --type-check"
  }
}
```

## Commiting
This repo uses [`commitizen`](https://github.com/commitizen/cz-cli)'s simple commit conventions.
To commit changes using `commitizen`, stage your changes with `git add . `, then launch `commitizen` with
```
yarn run commit
```