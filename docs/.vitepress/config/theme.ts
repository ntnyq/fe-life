import type { DefaultTheme } from 'vitepress'

const projects = [
  'vuepress-plugin-social-share',
  'vuepress-plugin-svg-icons',
  'element-plus-admin',
  'omz-plugin-pnpm',
  'gulp-plugins',
]

export const themeConfig: DefaultTheme.Config = {
  logo: '/favicon-32x32.png',

  search: {
    provider: 'local',
    options: {
      translations: {
        button: {
          buttonText: '搜索全站',
          buttonAriaLabel: 'Search full site',
        },
        modal: {
          displayDetails: '显示详情',
          resetButtonTitle: '重置',
          backButtonTitle: '回退',
          noResultsText: '暂无匹配内容',
          footer: {
            selectText: '选择',
            selectKeyAriaLabel: 'Select',
            navigateText: '导航',
            navigateUpKeyAriaLabel: 'Navigate up',
            navigateDownKeyAriaLabel: 'Navigate down',
            closeText: '关闭',
            closeKeyAriaLabel: 'Close',
          },
        },
      },
    },
  },

  editLink: {
    pattern: 'https://github.com/ntnyq/fe-life/edit/main/docs/:path',
    text: '帮助我改进页面内容！',
  },

  socialLinks: [
    { icon: 'twitter', link: 'https://twitter.com/ntnyq' },
    { icon: 'github', link: 'https://github.com/ntnyq/fe-life' },
  ],

  footer: {
    message: `<a
  class="VPLink"
  href="https://creativecommons.org/licenses/by-nc/4.0/"
  target="_blank"
  rel="noopener noreferrer"
>CC BY-NC 4.0</a>`,
    copyright: 'Copyright © 2019-present ntnyq. All Rights Reserved.',
  },

  nav: [
    { text: '首页', link: '/' },
    {
      text: '前端篇',
      activeMatch: '^/fe/',
      items: [
        { text: '基础篇', link: '/fe/html' },
        { text: '构建篇', link: '/dev/webpack' },
        { text: '插件篇', link: '/plugins/videojs' },
      ],
    },
    {
      text: '框架篇',
      link: '/framework/vue-core',
    },
    {
      text: '拓展篇',
      activeMatch: '^/(node|extension)/',
      items: [
        { text: 'Node篇', link: '/node/base' },
        { text: '浏览器插件篇', link: '/extension/webext' },
        { text: '油猴插件', link: '/extension/monkey' },
      ],
    },
    { text: '工具篇', activeMatch: '^/tools/', link: '/tools/git' },
    {
      text: '我的项目',
      items: projects.map(project => ({
        text: `${project}`,
        link: `https://github.com/ntnyq/${project}`,
      })),
    },
  ],

  sidebar: {
    '/fe/': [
      {
        text: '前端篇',
        items: [
          { text: 'html', link: '/fe/html' },
          { text: 'css', link: '/fe/css' },
          { text: 'scss', link: '/fe/scss' },
          { text: 'jquery', link: '/fe/jquery' },
          { text: 'javscript', link: '/fe/javascript' },
          { text: 'npm', link: '/fe/npm' },
          { text: 'yarn', link: '/fe/yarn' },
          { text: 'wechat', link: '/fe/wechat' },
          { text: 'weapp', link: '/fe/weapp' },
          { text: 'ie', link: '/fe/ie' },
        ],
      },
    ],
    '/dev/': [
      {
        text: '构建篇',
        items: [
          { text: 'webpack', link: '/dev/webpack' },
          { text: 'gulp', link: '/dev/gulp' },
          { text: 'parcel', link: '/dev/parcel' },
          { text: 'babel', link: '/dev/babel' },
          { text: 'typescript', link: '/dev/typescript' },
          { text: 'vite', link: '/dev/vite' },
        ],
      },
    ],
    '/framework/': [
      {
        text: 'vue',
        items: [
          { text: 'vue', link: '/framework/vue-core' },
          { text: 'router', link: '/framework/vue-router' },
          { text: 'vuex', link: '/framework/vue-vuex' },
          { text: 'cli', link: '/framework/vue-cli' },
          { text: 'trick', link: '/framework/vue-trick' },
          { text: 'element', link: '/framework/vue-element' },
          { text: 'vant', link: '/framework/vue-vant' },
          { text: 'plugin', link: '/framework/vue-plugin' },
          { text: 'i18n', link: '/vue/i18n' },
        ],
      },
      {
        text: 'react',
        items: [{ text: 'react', link: '/framework/react-core' }],
      },
    ],
    '/node/': [
      {
        text: 'Node篇',
        items: [
          { text: 'base', link: '/node/base' },
          { text: 'api', link: '/node/api' },
          { text: 'path', link: '/node/path' },
          { text: 'trick', link: '/node/trick' },
          { text: 'package', link: '/node/package' },
          { text: 'electron', link: '/node/electron' },
          { text: 'http', link: '/node/http' },
          { text: 'nvm', link: '/node/nvm' },
          { text: 'pnpm', link: '/node/pnpm' },
          { text: 'esm', link: '/node/esm' },
        ],
      },
    ],
    '/tools/': [
      {
        text: '工具篇',
        items: [
          { text: 'git', link: '/tools/git' },
          { text: 'github', link: '/tools/github' },
          { text: 'shell', link: '/tools/shell' },
          { text: 'zsh', link: '/tools/zsh' },
          { text: 'tmux', link: '/tools/tmux' },
          { text: 'nginx', link: '/tools/nginx' },
          { text: 'editor', link: '/tools/editor' },
          { text: 'vim', link: '/tools/vim' },
          { text: 'markdown', link: '/tools/markdown' },
          { text: 'chrome', link: '/tools/chrome' },
          { text: 'mongo', link: '/tools/mongo' },
          { text: 'photoshop', link: '/tools/photoshop' },
          { text: 'aliyun', link: '/tools/aliyun' },
          { text: 'eslint', link: '/tools/eslint' },
          { text: 'tsup', link: '/tools/tsup' },
        ],
      },
    ],
    '/plugins/': [
      {
        text: '',
        items: [
          { text: 'videojs', link: '/plugins/videojs' },
          { text: 'echarts', link: '/plugins/echarts' },
          { text: 'swiper', link: '/plugins/swiper' },
          { text: 'ueditor', link: '/plugins/ueditor' },
          { text: 'photoswipe', link: '/plugins/photoswipe' },
        ],
      },
    ],
  },
}
