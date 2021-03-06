module.exports = {
  extends: ["eslint:recommended", "prettier", "plugin:jest/recommended"],
  plugins: ["jest", "import", "cypress"],
  env: {
    jest: true,
    "cypress/globals": true
  },
  rules: {
    eqeqeq: "error",
    camelcase: "error",
    curly: "error",
    indent: "off",
    "dot-notation": "error",
    "guard-for-in": "error",
    "key-spacing": "off",
    "new-cap": "off",
    "consistent-return": "off",
    "no-alert": "off",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-shadow": "off",
    "no-console": "warn",
    "no-extend-native": "error",
    "no-shadow-restricted-names": "off",
    "no-underscore-dangle": "off",
    "no-unused-expressions": "error",
    "no-use-before-define": "error",
    "no-extra-bind": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-new-func": "error",
    "no-return-assign": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-useless-call": "error",
    "no-useless-concat": "error",
    "no-useless-escape": "error",
    "no-unneeded-ternary": "error",
    "no-with": "error",
    strict: ["off", "function"],
    "one-var": ["error", { initialized: "never" }],
    "no-eval": "error",
    "no-floating-decimal": "error",
    "no-implicit-coercion": "error",
    "no-implied-eval": "error",
    "no-invalid-this": "off",
    "no-iterator": "error",
    "no-new": "error",
    "no-new-wrappers": "error",
    "no-proto": "error",
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-unmodified-loop-condition": "error",

    "import/no-unresolved": "error",
    "import/named": "error",
    "import/namespace": "error",
    "import/default": "error",
    "import/export": "error",
    "import/no-named-as-default-member": "error",
    "import/no-duplicates": "error",
    "import/unambiguous": "error"
  }
};
