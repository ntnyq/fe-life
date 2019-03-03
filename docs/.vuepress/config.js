module.exports = {
  title: 'Ntnyq的前端人生',
  description: 'Ntnyq的前端人生踩坑记录。',
  base: '/',
  dest: 'site',
  themeConfig: {
    sidebarDepth: 0,
    repo: 'https://github.com/ntnyq/fe-life',
    docsRepo: 'https://github.com/ntnyq/fe-life',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '帮助我改进页面内容！',
    nav: [
      { text: '首页', link: '/' },
      { text: '前端篇', link: '/fe/html' },
      { text: 'Vue篇', link: '/vue/core' },
      { text: 'Node篇', link: '/node/base' },
      { text: '工具篇', link: '/tools/git' },
      { text: '插件篇', link: '/plugins/videojs' },
      {
        text: '我的项目',
        items: [
          {
            text: 'vuepress-plugin-svg-icons',
            link: 'https://github.com/ntnyq/vuepress-plugin-svg-icons',
          },
          { text: 'element-boilerplate', link: 'https://github.com/ntnyq/element-boilerplate' },
        ],
      },
    ],
    sidebar: {
      '/fe/': ['html', 'css', 'scss', 'javascript', 'npm', 'yarn', 'gulp', 'webpack', 'wechat'],
      '/vue/': ['core', 'router', 'vuex', 'cli', 'faq', 'element', 'mint', 'vant'],
      '/node/': ['base', 'api', 'path', 'trick', 'modules'],
      '/tools/': ['git', 'shell', 'editor', 'mongo'],
      '/plugins/': ['videojs'],
    },
    lastUpdated: '最后更新时间',
  },
}
