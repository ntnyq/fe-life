import { withPwa } from '@vite-pwa/vitepress'
import { defineConfig } from 'vitepress'
import { head } from './config/head'
import { pwa } from './config/pwa'
import { themeConfig } from './config/theme'
import { mdPlugins } from './plugins/md'

const config = defineConfig({
  title: 'ntnyq的前端人生',
  description: 'ntnyq的前端人生踩坑记录。',
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,
  head,
  pwa,
  themeConfig,
  vite: {
    server: {
      open: true,
    },
  },

  markdown: {
    config(md) {
      md.use(mdPlugins)
    },
  },
})

export default withPwa(config)
