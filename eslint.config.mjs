// @ts-check

import { defineESLintConfig } from '@ntnyq/eslint-config'

export default defineESLintConfig({
  svgo: true,
  unocss: false,
  vue: {
    overrides: {
      'vue/component-api-style': 'off',
    },
  },
})
