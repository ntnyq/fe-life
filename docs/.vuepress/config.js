module.exports = {
  title: 'Ntnyq的前端人生',
  head: [
    ['meta', { 'http-equiv': 'cache-control', content: 'no-cache' }],
    ['meta', { 'http-equiv': 'pragma', content: 'no-cache' }],
    ['meta', { 'http-equiv': 'expires', content: '0' }]
  ],
  base: '/fe-life/',
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
      { text: 'Home', link: '/' },
      {
        text: 'templates',
        items: [
          { text: 'element-boilerplate', link: 'https://github.com/ntnyq/element-boilerplate' }
        ]
      }
    ],
    sidebar: [
      {
        key: 'troubles',
        title: '踩坑记录',
        collapsable: true,
        children: [
          'docs/html',
          'docs/css',
          'docs/scss',
          'docs/javascript',
          'docs/git',
          'docs/gulp',
          'docs/webpack',
          'docs/wechat',
          'docs/yarn',
          'docs/bash',
          'docs/editor',
          'docs/mongodb',
          'docs/npm',
          'docs/yarn'
        ]
      },
      {
        key: 'vueJs',
        title: 'Vue学习',
        collapsable: true,
        children: [
          'vuejs/core',
          'vuejs/router',
          'vuejs/vuex',
          'vuejs/cli',
          'vuejs/element',
          'vuejs/mint',
          'vuejs/vant',
          'vuejs/faq'
        ]
      },
      {
        key: 'articles',
        title: '优秀博文',
        collapsable: true,
        children: ['articles/solution', 'articles/study', 'articles/tech']
      },
      {
        key: 'plugins',
        title: '常用插件',
        collapsable: true,
        children: ['plugins/videojs']
      },
      {
        key: 'tools',
        title: '关于我的',
        collapsable: true,
        children: ['about/tool']
      }
    ],
    lastUpdated: '最后更新时间'
  }
}
