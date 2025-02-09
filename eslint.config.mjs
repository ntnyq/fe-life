// @ts-check

import { defineESLintConfig } from '@ntnyq/eslint-config'

export default defineESLintConfig({
  svgo: true,
  vue: {
    overrides: {
      'vue/component-api-style': 'off',
    },
  },
})
