/**
 * @file vitepress config
 */

import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'
import { SearchPlugin } from 'vitepress-plugin-search'
import { pwa } from './config/pwa'
import { head } from './config/head'
import { themeConfig } from './config/theme'

const searchOptions = {
  previewLength: 62,
  buttonLabel: '搜索',
  placeholder: '搜索文档...',
}

export default withPwa(
  defineConfig({
    title: 'ntnyq的前端人生',

    description: 'ntnyq的前端人生踩坑记录。',

    vite: {
      server: {
        open: true,
        host: true,
      },

      build: {
        ssr: false, // SearchPlugin
      },

      plugins: [SearchPlugin(searchOptions)],
    },

    head,
    pwa,
    themeConfig,
  }),
)
