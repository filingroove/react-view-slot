module.exports = {
  'plugins': [
    'react',
    '@typescript-eslint'
  ],
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  "parser": "@typescript-eslint/parser",
  "rules": {
    "max-len": [
      "warn",
      120
    ],
    "object-curly-newline": [
      "warn",
      {
        "ImportDeclaration": "never"
      }
    ]
  },
  "overrides": [
    {
      "files": [
        "**/*.ts(x)?"
      ],
      "rules": {
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "import/named": "warn",
        "react/jsx-props-no-spreading": "off",
        "react/destructuring-assignment": "off",
        "react/jsx-filename-extension": "off",
        "react/prop-types": "off",
        "no-use-before-define": "off",
        "arrow-parens": "off",
        "prefer-arrow-callback": "off",
        "max-classes-per-file": "off",
        "object-curly-spacing": "off",
        "object-curly-newline": ["error", {"consistent": true}],
        "no-unused-vars": ["warn", { "varsIgnorePattern": "^_" }],
        "class-methods-use-this": "off",
        "no-else-return": "off",
        "@typescript-eslint/no-unused-vars": ["warn", { "varsIgnorePattern": "^_" }]
      }
    }
  ]
}
