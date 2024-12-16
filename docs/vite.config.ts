/**
 * @file
 */

import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    exclude: ['@nolebase/vitepress-plugin-enhanced-readabilities', 'vitepress'],
  },

  plugins: [UnoCSS()],

  ssr: {
    noExternal: ['@nolebase/vitepress-plugin-enhanced-readabilities'],
  },
})
