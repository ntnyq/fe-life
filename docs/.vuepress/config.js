const projects = [
  'vuepress-plugin-svg-icons',
  'vuepress-plugin-social-share',
  'gulp-format-html',
  'gulp-diffable-html',
  'element-boilerplate',
  'taro-zhihu-daily',
]

module.exports = {
  title: 'ntnyq的前端人生',
  description: 'ntnyq的前端人生踩坑记录。',
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
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-144489350-2',
      },
    ],
    [
      'social-share',
      {
        networks: ['twitter', 'qq', 'facebook', 'weibo', 'email'],
        email: 'ntnyq13@gmail.com',
      },
    ],
    ['sitemap', { hostname: 'https://fe.ntnyq.com' }],
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
      {
        text: '前端篇',
        items: [
          { text: '基础篇', link: '/fe/html' },
          { text: '构建篇', link: '/dev/webpack' },
          { text: '插件篇', link: '/plugins/videojs' },
        ],
      },
      {
        text: '框架篇',
        items: [
          { text: 'Vue篇', link: '/vue/core' },
          { text: 'React篇', link: '/react/core' },
        ],
      },
      {
        text: '拓展篇',
        items: [
          { text: 'Node篇', link: '/node/base' },
          { text: '浏览器插件篇', link: '/extension/base' },
        ],
      },
      { text: '工具篇', link: '/tools/git' },
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
        'html',
        'css',
        'scss',
        'jquery',
        'javascript',
        'npm',
        'yarn',
        'wechat',
        'weapp',
      ],
      '/dev/': ['webpack', 'gulp', 'parcel', 'babel', 'typescript'],
      '/vue/': [
        'core',
        'router',
        'vuex',
        'cli',
        'trick',
        'typescript',
        'faq',
        'element',
        'mint',
        'vant',
        'plugin',
      ],
      '/react/': ['core'],
      '/node/': [
        'base',
        'api',
        'path',
        'trick',
        'package',
        'electron',
        'http',
        'nvm',
      ],
      '/tools/': [
        'git',
        'github',
        'shell',
        'zsh',
        'tmux',
        'nginx',
        'editor',
        'vim',
        'markdown',
        'chrome',
        'mongo',
        'photoshop',
        'aliyun',
        'eslint',
      ],
      '/plugins/': ['videojs', 'echarts', 'swiper', 'ueditor'],
    },
    lastUpdated: '最后更新时间',
  },
}
