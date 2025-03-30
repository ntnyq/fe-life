import { withPwa } from '@vite-pwa/vitepress'
import { defineConfig } from 'vitepress'
import { demoMdPlugin } from 'vitepress-plugin-demo'
import { head } from './config/head'
import { pwa } from './config/pwa'
import { themeConfig } from './config/theme'

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
      md.use(demoMdPlugin)
    },
  },
})

export default withPwa(config)
