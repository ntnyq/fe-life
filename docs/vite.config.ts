/**
 * @file
 */

import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [UnoCSS()],

  optimizeDeps: {
    exclude: ['@nolebase/vitepress-plugin-enhanced-readabilities', 'vitepress'],
  },

  ssr: {
    noExternal: ['@nolebase/vitepress-plugin-enhanced-readabilities'],
  },
})
