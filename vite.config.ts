import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import VueComponents from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    exclude: ['vitepress'],
  },

  plugins: [
    UnoCSS({
      inspector: false,
    }),
    VueComponents({
      dts: 'types/components.d.ts',
    }),
    AutoImport({
      dts: 'types/auto-imports.d.ts',
      imports: ['vue', '@vueuse/core'],
    }),
  ],
})
