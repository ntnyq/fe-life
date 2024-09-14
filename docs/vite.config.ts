/**
 * @file
 */

import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [UnoCSS()],

  optimizeDeps: {
    exclude: ['@nolebase/vitepress-plugin-enhanced-readabilities', 'vitepress'],
  },

  ssr: {
    noExternal: ['@nolebase/vitepress-plugin-enhanced-readabilities'],
  },
})
