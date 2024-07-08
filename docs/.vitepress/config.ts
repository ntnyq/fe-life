/**
 * @file vitepress config
 */

import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'
import { pwa } from './config/pwa'
import { head } from './config/head'
import { themeConfig } from './config/theme'
import { mdPlugins } from './plugins/md'

export default withPwa(
  defineConfig({
    title: 'ntnyq的前端人生',

    description: 'ntnyq的前端人生踩坑记录。',

    vite: {
      server: {
        open: true,
      },
    },

    markdown: {
      config: md => {
        md.use(mdPlugins)
      },
    },

    head,
    pwa,
    themeConfig,
  }),
)
