import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser, // Add browser globals
      },
    },
    files: ["**/*.js", "**/*.mjs"], // Specify files to lint
  },
  {
    ignores: ["dist/**", "node_modules/**"],
  },
  pluginJs.configs.recommended, // Directly include the recommended config
  {
    rules: {
      "no-unused-vars": "warn",
    },
  },
  eslintConfigPrettier,
];
