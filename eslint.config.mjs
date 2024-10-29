import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";
import reactPlugin from "eslint-plugin-react";

// trick
/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  {
    ...reactPlugin.configs.flat.recommended,
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  reactPlugin.configs.flat["jsx-runtime"], //fix the errors around not importing React
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      globals: { React: true, ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    // adding rules
    rules: {
      "react/no-unescaped-entities": "off", // special characters 'can't write single quotes, must be &apos and It may be annoying
      "react/prop-types": "off", // to disable It, because they are by default even though they are deprecated
    },
  },
  prettier,
];
