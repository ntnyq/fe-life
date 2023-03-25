import type { HeadConfig } from 'vitepress'

const ogTitle = 'ntnyq的前端人生'
const ogUrl = 'https://fe.ntnyq.com'

export const head: HeadConfig[] = [
  ['link', { rel: 'icon', href: '/favicon.ico' }],
  ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
  ['meta', { name: 'theme-color', href: '#ffffff' }],
  ['meta', { property: 'og:type', content: 'website' }],
  ['meta', { property: 'og:title', content: ogTitle }],
  ['meta', { property: 'og:url', content: ogUrl }],
  [
    'meta',
    {
      name: 'google-site-verification',
      content: 'JVSw-F97ZlD3D0yqM4MiBYvtRfpHfNtmH1J3PFX4fGk',
    },
  ],
  [
    'script',
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-LM88CRBNZ4',
      async: '',
    },
  ],
  [
    'script',
    {},
    `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-LM88CRBNZ4');
`,
  ],
]
