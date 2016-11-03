# eslint-config-strict-flowtype

ESLint sharable config for strict linting on FlowType code.

## Installation

Install this config package and ESLint:

```bash
$ npm install --save-dev eslint-config-strict-flowtype
```

If you're using npm < v3 you'll also need to install all of the dependencies of this project:

```bash
$ npm install --save-dev eslint eslint-plugin-flowtype
```

## Usage

This set of configs is meant to be extended on a per-project basis as necessary
using ESLint's [shareable configs][] feature.

Simply use `strict-flowtype` in your extends config to add React linting rules to your project. This can be layered with other eslint rules, for example [`eslint-config-strict`](https://github.com/keithamus/eslint-config-strict).

### How to use

Simply define your `.eslintrc` (or add a `eslintConfig` object to `package.json`)
like so:

```json
{
  "extends": ["strict-flowtype"]
}
```

Add any additional plugins you want, for example:

```json
{
  "extends": ["other-config", "strict-flowtype"]
}
```

Feel free to define additional globals or rules, or override them as you see fit:

```json
{
  "extends": ["strict-flowtype/es6"],

  "globals": {
    "blarg": true
  },

  "rules": {
      "flowtype/id-match": 0
  }
}
```

For more details about how shareable configs work, see the
[ESLint documentation][extend].

[shareable configs]: http://eslint.org/docs/developer-guide/shareable-configs
[extend]: http://eslint.org/docs/user-guide/configuring#extending-configuration-files
