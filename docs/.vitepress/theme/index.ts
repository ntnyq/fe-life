import { h } from 'vue'
import Theme from 'vitepress/theme'
import {
  LayoutMode,
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesPlugin,
  NolebaseEnhancedReadabilitiesScreenMenu,
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import RegisterSW from './components/RegisterSW.vue'
import HomeIntroduction from './components/HomeIntroduction.vue'
import type { Theme as ITheme } from 'vitepress/client'

import 'uno.css'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'

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
