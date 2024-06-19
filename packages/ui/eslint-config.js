import baseConfig from "@troper/eslint-config/base";
import reactConfig from "@troper/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
const config = [
  {
    ignores: [],
  },
  ...baseConfig,
  ...reactConfig,
];

export default config;