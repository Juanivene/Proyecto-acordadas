module.exports = {
  env: {
    browser: true,
    es2024: true,
  },
  // ! The order of the extends should not be changed - it affects their operation
  extends: [
    'eslint:recommended', // ESLint recommended rules
    'plugin:react/recommended', // Recommended rules for React
    'airbnb', // Airbnb Settings Rules
    'prettier', // Disables ESLint rules that might conflict with Prettier
    'plugin:prettier/recommended', // This adds eslint-config-prettier y eslint-plugin-prettier
  ],
  overrides: [],
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Enables support for JSX
    },
    ecmaVersion: 'latest', // Use the latest version of ECMAScript
    sourceType: 'module', // Use ECMAScript modules
  },
  plugins: [
    'react', // Plugin for React specific rules
    'import', // Import rules plugin
    'jsx-a11y', // Plugin for accessibility in JSX
    'react-hooks', // Plugin for React hooks rules
    'prettier', // Plugin to integrate Prettier with ESLint
  ],
  settings: {
    react: {
      version: 'detect', // Automatically detect the version of React used
    },
  },
  rules: {
    // ! ESLint Rules (core)
    'array-callback-return': 'error', // Ensures return statements in array callbacks
    'no-console': 'error', // Disallows console statements
    'no-const-assign': 'error', // Disallows reassignment of const variables
    'no-dupe-keys': 'error', // Disallows duplicate keys in object literals
    'no-duplicate-case': 'error', // Disallows duplicate case labels in switch statements
    'no-duplicate-imports': 'error', // Disallows duplicate imports
    'no-dupe-args': 'error', // Disallows duplicate arguments in function definitions
    'no-dupe-else-if': 'error', // Disallows duplicate else-if conditions
    'no-empty-pattern': 'error', // Disallows empty destructuring patterns
    'no-import-assign': 'error', // Disallows assignment to imported bindings
    'no-inner-declarations': 'error', // Disallows function or variable declarations in nested blocks
    'no-irregular-whitespace': 'warn', // Disallows irregular whitespace outside of strings and comments
    'no-loss-of-precision': 'error', // Disallows numbers that lose precision
    'no-misleading-character-class': 'warn', // Disallows misleading characters in regular expressions
    'no-obj-calls': 'error', // Disallows calling global object properties as functions
    'no-self-assign': 'error', // Disallows assignments where both sides are the same
    'no-self-compare': 'error', // Disallows comparisons where both sides are the same
    'no-setter-return': 'error', // Disallows returning values in setters
    'no-sparse-arrays': 'error', // Disallows sparse arrays
    'no-template-curly-in-string': 'error', // Disallows template literals in strings
    'no-undef': 'error', // Disallows the use of undeclared variables
    'no-underscore-dangle': ['error', { allow: ['__dirname', '__filename'] }], // Disallows dangling underscores in identifiers, except for __dirname and __filename
    'no-unreachable-loop': 'error', // Disallows unreachable loops
    'no-unsafe-finally': 'warn', // Disallows control flow statements in finally blocks
    'no-unsafe-negation': 'error', // Disallows negation of the left operand in in/instanceof operations
    'no-unsafe-optional-chaining': 'warn', // Disallows unsafe optional chaining
    'no-unused-vars': 'error', // Disallows unused variables
    'no-use-before-define': 'error', // Disallows the use of variables before they are defined
    'use-isnan': 'error', // Requires calls to isNaN() when checking for NaN
    'valid-typeof': 'error', // Enforces valid typeof comparisons
    'arrow-body-style': ['warn', 'as-needed'], // Enforces consistent arrow function body style
    'block-scoped-var': 'error', // Enforces the use of block scoped variables
    camelcase: 'error', // Enforces camelcase naming convention
    'consistent-return': 'error', // Requires return statements to either always or never specify values
    'default-case': 'error', // Requires default case in switch statements
    'default-case-last': 'error', // Enforces default case to be last in switch statements
    'default-param-last': 'warn', // Enforces default parameters to be last
    'dot-notation': 'warn', // Enforces dot notation whenever possible
    eqeqeq: ['error', 'always'], // Enforces the use of === and !==

    // ! eslint-plugin-import plugin rules
    'import/prefer-default-export': 'error', // Prefers default export if module only exports one thing
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true, // Allows importing devDependencies
      },
    ],
    'import/no-cycle': 'off', // Disables cyclic dependency check

    // ! eslint-plugin-react plugin rules
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function', // Enforces arrow function for named components
        unnamedComponents: 'arrow-function', // Enforces arrow function for unnamed components
      },
    ],
    'react/jsx-no-duplicate-props': [
      2,
      {
        ignoreCase: false, // Disallows duplicate props in JSX, case-sensitive
      },
    ],
    'react/jsx-uses-react': 'off', // Disables checking if React is used in JSX files (not needed in React 17+)
    'react/forbid-prop-types': 'error', // Forbids certain prop types
    'react/react-in-jsx-scope': 'off', // Disables requiring React to be in scope in JSX files (not needed in React 17+)
    'react/jsx-uses-vars': 'error', // Prevents variables used in JSX from being marked as unused
    'react/prop-types': 'error', // Enforces type checking with PropTypes
    'react/jsx-props-no-spreading': 'off', // Disables the rule to prevent prop spreading in JSX
    'react/require-default-props': 'off', // Disables the rule that requires defaultProps to be defined for non-required props

    // ! eslint-plugin-prettier plugin rules
    'prettier/prettier': 'error', // Runs Prettier as an ESLint rule and reports differences as ESLint errors

    // ! react-hooks/recommended plugin rules
    'react-hooks/rules-of-hooks': 'error', // Enforces the rules of hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies

    // ! Additional rules that disable eslint-config-airbnb plugin configurations
    'no-param-reassign': 'off', // Disables the rule to prevent reassignment of function parameters

    'import/order': 'off',
  },
};
