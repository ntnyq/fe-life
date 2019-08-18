module.exports = {
  title: 'Ntnyq的前端人生',
  description: 'Ntnyq的前端人生踩坑记录。',
  base: '/',
  dest: 'site',
  head: [
    [
      'meta',
      {
        name: 'google-site-verification',
        content: 'JVSw-F97ZlD3D0yqM4MiBYvtRfpHfNtmH1J3PFX4fGk',
      },
    ],
  ],
  ga: 'UA-144489350-2',
  plugins: [
    '@vuepress/google-analytics',
    [
      'sitemap',
      {
        hostname: 'https://fe.ntnyq.com',
      },
    ],
  ],
  themeConfig: {
    sidebarDepth: 1,
    repo: 'ntnyq/fe-life',
    docsRepo: 'ntnyq/fe-life',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '帮助我改进页面内容！',
    nav: [
      { text: '首页', link: '/' },
      { text: '前端篇', link: '/fe/html' },
      {
        text: '框架篇',
        items: [
          {
            text: 'Vue篇',
            link: '/vue/core',
          },
          {
            text: 'React篇',
            link: '/react/core',
          },
        ],
      },
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
          {
            text: 'vuepress-plugin-social-share',
            link: 'https://github.com/ntnyq/vuepress-plugin-social-share',
          },
          {
            text: 'element-boilerplate',
            link: 'https://github.com/ntnyq/element-boilerplate',
          },
        ],
      },
    ],
    sidebar: {
      '/fe/': [
        'html',
        'css',
        'scss',
        'jquery',
        'javascript',
        'typescript',
        'npm',
        'yarn',
        'gulp',
        'webpack',
        'parcel',
        'babel',
        'wechat',
        'weapp',
      ],
      '/vue/': [
        'core',
        'router',
        'vuex',
        'cli',
        'trick',
        'faq',
        'element',
        'mint',
        'vant',
        'plugin',
      ],
      '/node/': ['base', 'api', 'path', 'trick', 'modules', 'electron', 'http'],
      '/tools/': [
        'git',
        'shell',
        'github',
        'nginx',
        'editor',
        'chrome',
        'mongo',
        'photoshop',
        'aliyun',
      ],
      '/plugins/': ['echarts', 'videojs', 'swiper', 'ueditor'],
    },
    lastUpdated: '最后更新时间',
  },
}
