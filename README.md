# tslint-config-shopify
Shopify’s TSlint rules and configs.

## Installation 

Install [TSlint](https://palantir.github.io/tslint/) and `tslint-config-shopify` : 

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
    "tslint": "tslint -c tslint.json './{app,server,client,packages,config}/**/*.{ts,tsx}' --exclude './**/node_modules/**/*.{ts,tsx}' --project tsconfig.json --type-check"
  }
}
```
Now you're ready to go with your new script. Run it with:

**With Yarn**
``` 
yarn run tslint
```

**With npm**
``` 
npm run tslint
```


## Configuration 
Some of the rules configured in `tslint-config-shopify`  may not be suffice for your project. 
You can overide these rules in your `tslint.json` like below. 
* See [here](https://palantir.github.io/tslint/usage/tslint-json/) for more details on configuring your `tslint.json`.
* See [here](https://palantir.github.io/tslint/rules/) for all the rules provided by [TSlint](https://palantir.github.io/tslint/)
```
{
  "extends": "tslint-config-shopify", 
  "rules": {
    "quotemark": [true, "double"]
  }
}
```

