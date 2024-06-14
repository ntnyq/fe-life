/**
 * @file
 */

import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [],

  optimizeDeps: {
    exclude: ['@nolebase/vitepress-plugin-enhanced-readabilities', 'vitepress'],
  },

  ssr: {
    noExternal: ['@nolebase/vitepress-plugin-enhanced-readabilities'],
  },
})
