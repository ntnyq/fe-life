const extendsNetworks = {
  email: {
    sharer: 'mailto:?subject=@title&body=@url%0D%0A%0D%0A@description',
    type: 'direct',
    icon: '/email.png',
  },
  pinterest: {
    sharer:
      'https://pinterest.com/pin/create/button/?url=@url&media=@media&description=@title',
    type: 'popup',
    icon: '/pinterest.png',
  },
  linkedin: {
    sharer:
      'https://www.linkedin.com/shareArticle?mini=true&url=@url&title=@title&summary=@description',
    type: 'popup',
    color: '#1786b1',
    icon:
      '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M910.336 0H113.664A114.005333 114.005333 0 0 0 0 113.664v796.672A114.005333 114.005333 0 0 0 113.664 1024h796.672A114.005333 114.005333 0 0 0 1024 910.336V113.664A114.005333 114.005333 0 0 0 910.336 0zM352.256 796.330667H207.189333V375.466667h145.066667z m-72.021333-477.866667a77.824 77.824 0 0 1-81.237334-74.069333A77.824 77.824 0 0 1 280.234667 170.666667a77.824 77.824 0 0 1 81.237333 73.728 77.824 77.824 0 0 1-81.237333 73.386666z m582.314666 477.866667H716.8v-227.669334c0-46.762667-18.432-93.525333-73.045333-93.525333a84.992 84.992 0 0 0-81.237334 94.549333v226.304h-140.629333V375.466667h141.653333v60.757333a155.989333 155.989333 0 0 1 136.533334-71.338667c60.416 0 163.498667 30.378667 163.498666 194.901334z" /></svg>',
  },
}
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
        extendsNetworks,
      },
    ],
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
      { text: 'Node篇', link: '/node/base' },
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
