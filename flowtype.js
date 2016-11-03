'use strict';
module.exports = {
  parser: 'babel-eslint',

  plugins: [
    'flowtype',
  ],

  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: false,
    },
  },


  rules: {
    // Enforces a particular style for boolean type annotations.
    'flowtype/boolean-style': [
      2,
      // Enforce it to always be "boolean"
      'boolean',
    ],
    // Marks Flow type identifiers as defined.
    'flowtype/define-flow-type': 2,
    // Enforces consistent use of trailing commas in Object and Tuple annotations
    'flowtype/delimiter-dangle': [
      2,
      // always-multiline, just like comma-dangle
      'always-multiline',
    ],
    // Enforces consistent spacing within generic type annotation parameters
    'flowtype/generic-spacing': [
      2,
      // Never allow spacing in generic types
      'never',
    ],
    // Checks for duplicate properties in Object annotations
    'flowtype/no-dupe-keys': 2,
    // Warns against weak type annotations any, Object and Function.
    'flowtype/no-weak-types': [
      2,
      {
        any: true,
        Object: true,
        Function: true,
      },
    ],
    // Enforces consistent separators between properties in Flow object types.
    'flowtype/object-type-delimiter': [
      2,
      // Separator must be a comma
      'comma',
    ],
    // Requires that all function parameters have type annotations.
    'flowtype/require-parameter-type': 2,
    // Requires that functions have return type annotation.
    'flowtype/require-return-type': 2,
    // This rule validates Flow file annotations.
    'flowtype/require-valid-file-annotation': [
      2,
      // Every file should enable flow
      'always',
      {
        // Enforce using block comment - i.e. `/* @flow */`
        'annotationStyle': 'block',
      },
    ],
    // Enforces consistent use of semicolons after type aliases.
    'flowtype/semi': [
      2,
      // Always use semicolons!
      'always',
    ],
    // Enforces sorting of Object annotations.
    'flowtype/sort-keys': 0,
    // Enforces consistent spacing after the type annotation colon.
    'flowtype/space-after-type-colon': [
      2,
      // Always enforce spacing after the colon
      'always',
    ],
    // Enforces consistent spacing before the opening < of generic type annotation parameters.
    'flowtype/space-before-generic-bracket': [
      2,
      // Never allow spaces before the <
      'never',
    ],
    // Enforces consistent spacing before the type annotation colon.
    'flowtype/space-before-type-colon': [
      2,
      // Never allow spaces befor ethe colon
      'never',
    ],
    // Enforces a consistent naming pattern for type aliases.
    'flowtype/type-id-match': [
      2,
      // identifiers must always be camelCased or CONSTANT_NAMED.
      // (just like eslint-config-strict#id-match)
      '^([A-Za-z]*|[A-Z][A-Z_]*[A-Z])$',
    ],
    // Enforces consistent spacing around union and intersection type separators (| and &).
    'flowtype/union-intersection-spacing': [
      2,
      // Always enforce spacing between union/intersection symbols
      'always',
    ],
    // Marks Flow type alias declarations as used.
    'flowtype/use-flow-type': 2,
  },
};
