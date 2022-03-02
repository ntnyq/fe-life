/**
 * @file vitepress config
 */

import { defineConfig } from 'vitepress'

const projects = [
  `vuepress-plugin-social-share`,
  `vuepress-plugin-svg-icons`,
  `gulp-format-html`,
  `gulp-diffable-html`,
  `element-boilerplate`,
  `taro-zhihu-daily`,
]

export default defineConfig({
  title: `ntnyq的前端人生`,

  description: `ntnyq的前端人生踩坑记录。`,

  outDir: `../dist`,

  head: [
    [`link`, { rel: `icon`, href: `/favicon.ico` }],
    [
      `meta`,
      {
        name: `google-site-verification`,
        content: `JVSw-F97ZlD3D0yqM4MiBYvtRfpHfNtmH1J3PFX4fGk`,
      },
    ],
  ],

  markdown: {
    // extend markdown-it
    config: md => {},
  },

  themeConfig: {
    repo: `ntnyq/fe-life`,
    docsRepo: 'ntnyq/fe-life',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '帮助我改进页面内容！',
    lastUpdated: `最后更新时间`,
    nav: [
      { text: `首页`, link: `/` },
      {
        text: `前端篇`,
        activeMatch: `^/fe/`,
        items: [
          { text: `基础篇`, link: `/fe/html` },
          { text: `构建篇`, link: `/dev/webpack` },
          { text: `插件篇`, link: `/plugins/videojs` },
        ],
      },
      {
        text: `框架篇`,
        link: `/framework/vue-core`,
      },
      {
        text: `拓展篇`,
        activeMatch: `^/(node|extension)/`,
        items: [
          { text: `Node篇`, link: `/node/base` },
          { text: `浏览器插件篇`, link: `/extension/base` },
        ],
      },
      { text: `工具篇`, activeMatch: `^/tools/`, link: `/tools/git` },
      { text: `插件篇`, activeMatch: `^/plugins/`, link: `/plugins/videojs` },
      {
        text: `我的项目`,
        items: projects.map(project => ({
          text: `${project}`,
          link: `https://github.com/ntnyq/${project}`,
        })),
      },
    ],

    sidebar: {
      '/fe/': [
        {
          text: `前端篇`,
          children: [
            { text: `html`, link: `/fe/html` },
            { text: `css`, link: `/fe/css` },
            { text: `scss`, link: `/fe/scss` },
            { text: `jquery`, link: `/fe/jquery` },
            { text: `javscript`, link: `/fe/javascript` },
            { text: `npm`, link: `/fe/npm` },
            { text: `yarn`, link: `/fe/yarn` },
            { text: `wechat`, link: `/fe/wechat` },
            { text: `weapp`, link: `/fe/weapp` },
          ],
        },
      ],
      '/dev/': [
        {
          text: `构建篇`,
          children: [
            { text: `webpack`, link: `/dev/webpack` },
            { text: `gulp`, link: `/dev/gulp` },
            { text: `parcel`, link: `/dev/parcel` },
            { text: `babel`, link: `/dev/babel` },
            { text: `typescript`, link: `/dev/typescript` },
            { text: `vite`, link: `/dev/vite` },
          ],
        },
      ],
      '/framework/': [
        {
          text: `vue`,
          children: [
            { text: `vue`, link: `/framework/vue-core` },
            { text: `router`, link: `/framework/vue-router` },
            { text: `vuex`, link: `/framework/vue-vuex` },
            { text: `vuex`, link: `/framework/vue-vuex` },
            { text: `cli`, link: `/framework/vue-cli` },
            { text: `trick`, link: `/framework/vue-trick` },
            { text: `element`, link: `/framework/vue-element` },
            { text: `vant`, link: `/framework/vue-vant` },
            { text: `plugin`, link: `/framework/vue-plugin` },
          ],
        },
        {
          text: `react`,
          children: [{ text: `react`, link: `/framework/react-core` }],
        },
      ],
      '/node/': [
        {
          text: `Node篇`,
          children: [
            { text: `base`, link: `/node/base` },
            { text: `api`, link: `/node/api` },
            { text: `path`, link: `/node/path` },
            { text: `trick`, link: `/node/trick` },
            { text: `package`, link: `/node/package` },
            { text: `electron`, link: `/node/electron` },
            { text: `http`, link: `/node/http` },
            { text: `nvm`, link: `/node/nvm` },
          ],
        },
      ],
      '/tools/': [
        {
          text: `工具篇`,
          children: [
            { text: `git`, link: `/tools/git` },
            { text: `github`, link: `/tools/github` },
            { text: `shell`, link: `/tools/shell` },
            { text: `zsh`, link: `/tools/zsh` },
            { text: `tmux`, link: `/tools/tmux` },
            { text: `nginx`, link: `/tools/nginx` },
            { text: `editor`, link: `/tools/editor` },
            { text: `vim`, link: `/tools/vim` },
            { text: `markdown`, link: `/tools/markdown` },
            { text: `chrome`, link: `/tools/chrome` },
            { text: `mongo`, link: `/tools/mongo` },
            { text: `photoshop`, link: `/tools/photoshop` },
            { text: `aliyun`, link: `/tools/aliyun` },
            { text: `eslint`, link: `/tools/eslint` },
          ],
        },
      ],
      '/plugins/': [
        {
          text: ``,
          children: [
            { text: `videojs`, link: `/plugins/videojs` },
            { text: `echarts`, link: `/plugins/echarts` },
            { text: `swiper`, link: `/plugins/swiper` },
            { text: `ueditor`, link: `/plugins/ueditor` },
            { text: `photoswipe`, link: `/plugins/photoswipe` },
          ],
        },
      ],
    },
  },
})
