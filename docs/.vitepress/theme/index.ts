import 'floating-vue/dist/style.css'
import 'uno.css'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'
import {
  LayoutMode,
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesPlugin,
  NolebaseEnhancedReadabilitiesScreenMenu,
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import FloatingVue from 'floating-vue'
import Theme from 'vitepress/theme'
import { h } from 'vue'
import DemoContainer from './components/DemoContainer/index.vue'

import HomeIntroduction from './components/HomeIntroduction.vue'
import RegisterSW from './components/RegisterSW.vue'
import type { Theme as ITheme } from 'vitepress/client'

FloatingVue.options.distance = 10

const theme: ITheme = {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu),
      'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu),
      'home-features-after': () => h(HomeIntroduction),
      'layout-bottom': () => h(RegisterSW),
    })
  },
  enhanceApp({ app }) {
    app.component('DemoContainer', DemoContainer)

    app.use(FloatingVue)

    app.use(NolebaseEnhancedReadabilitiesPlugin, {
      locales: {
        'zh-CN': {
          title: {
            title: '阅读增强插件',
          },
        },
      },
      layoutSwitch: {
        defaultMode: LayoutMode.FullWidth,
      },
    })
  },
}

export default theme
