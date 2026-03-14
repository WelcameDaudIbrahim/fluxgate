import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import turboPlugin from "eslint-plugin-turbo";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import onlyWarn from "eslint-plugin-only-warn";
import eslintSimpleImportSort from "eslint-plugin-simple-import-sort";

export const config = [
  js.configs.recommended,

  // Prettier formatting rules
  eslintConfigPrettier,

  // TypeScript rules
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2026,
        sourceType: "module",
        project: "./tsconfig.json",
      },
    },
    plugins: { "@typescript-eslint": tsPlugin },
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },

  // Turbo repo plugin
  {
    plugins: { turbo: turboPlugin },
    rules: {
      "turbo/no-undeclared-env-vars": "warn",
    },
  },

  // Only warn plugin (turn all errors into warnings)
  { plugins: { onlyWarn } },

  // Import sorting and code style
  {
    plugins: { "simple-import-sort": eslintSimpleImportSort },
    rules: {
  "simple-import-sort/imports": "warn",
  "simple-import-sort/exports": "warn",
      "no-console": "error",
      "no-debugger": "error",
      "prefer-const": "warn",
      "eqeqeq": ["warn", "always"],
      "curly": ["warn", "all"],
      "no-unneeded-ternary": "warn",
      "no-var": "warn",
      "consistent-return": "warn",
    },
  },

  // Ignore build outputs
  {
    ignores: ["dist/**", ".next/**", "out/**", "node_modules/**"],
  },
];