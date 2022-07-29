module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:@next/next/recommended',
    'plugin:jest/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  plugins: ['sort-keys-fix', 'testing-library', 'jest'],
  overrides: [
    {
      files: ['**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    // '@typescript-eslint/comma-dangle': 'off',
    // '@typescript-eslint/indent': 'off',
    // '@typescript-eslint/lines-between-class-members': 'off',
    // '@typescript-eslint/naming-convention': 'off',
    // '@typescript-eslint/no-redeclare': 'off',
    // '@typescript-eslint/no-unused-expressions': 'off',
    'arrow-body-style': ['error', 'always'],
    // 'arrow-parens': 'off',
    // 'camelcase': 'off',
    // 'class-methods-use-this': 'off',
    // 'comma-dangle': [
    //   'error',
    //   {
    //     arrays: 'always-multiline',
    //     objects: 'always-multiline',
    //     imports: 'always-multiline',
    //     exports: 'always-multiline',
    //     functions: 'ignore',
    //   },
    // ],
    // 'default-case': 'off',
    // 'function-paren-newline': 'off',
    // 'implicit-arrow-linebreak': 'off',
    'import/exports-last': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/jest.config.js',
          '**/jest.config.ts',
          '**/jest.setup.js',
          '**/jest.setup.ts',
          '**/.eslintrc.js',
          '**/.eslintrc.ts',
          '**/*{.,_}{test,spec}.{ts,tsx}',
          '**/*.stories.*',
          '**/*.story.*',
          '**/.storybook/**/*.*',
        ],
        peerDependencies: true,
      },
    ],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: [
          'builtin',
          'external',
          'internal',
          'sibling',
          'parent',
          'index',
        ],
        'newlines-between': 'always',
        pathGroups: [
          { pattern: 'react', group: 'builtin', position: 'before' },
        ],
        pathGroupsExcludedImportTypes: ['react'],
      },
    ],
    // 'import/prefer-default-export': 'off',
    // 'jsx-a11y/anchor-is-valid': 'off',
    // 'jsx-a11y/control-has-associated-label': 'off',
    // 'jsx-a11y/label-has-for': 'off',
    // 'jsx-a11y/mouse-events-have-key-events': 'off',
    // 'jsx-a11y/no-autofocus': 'off',
    'max-len': [
      'error',
      80,
      {
        ignoreTrailingComments: true,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true,
      },
    ],
    // 'no-confusing-arrow': 'off',
    // 'no-nested-ternary': 'off',
    // 'no-underscore-dangle': 'off',
    // 'no-unused-expressions': 'off',
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: 'always',
        ObjectPattern: { multiline: true },
        ImportDeclaration: { multiline: true },
        ExportDeclaration: { multiline: true },
      },
    ],
    // 'operator-linebreak': 'off',
    // 'react/destructuring-assignment': 'off',
    // 'react/function-component-definition': 'off',
    // 'react/jsx-curly-newline': 'off',
    // 'react/jsx-indent': 'off',
    // 'react/jsx-no-bind': 'off',
    // 'react/jsx-no-constructed-context-values': 'off',
    // 'react/jsx-no-useless-fragment': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': 'error',
    'react/jsx-wrap-multilines': 'off',
    // 'react/no-array-index-key': 'off',
    // 'react/no-danger': 'off',
    // 'react/no-unstable-nested-components': 'off',
    // 'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    // 'react/require-default-props': 'off',
    // 'react/sort-comp': 'off',
    // 'react/state-in-constructor': 'off',
    // 'react/static-property-placement': 'off',
    // 'spaced-comment': 'off',
    'sort-keys': [
      'error',
      'asc',
      { caseSensitive: true, natural: false, minKeys: 2 },
    ],
    'sort-keys-fix/sort-keys-fix': 'warn',
  },
};
