import 'floating-vue/dist/style.css'
import 'uno.css'
import './style.css'
import {
  LayoutMode,
  NolebaseEnhancedReadabilitiesPlugin,
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import FloatingVue from 'floating-vue'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import DemoContainer from './components/DemoContainer/index.vue'
import CustomLayout from './CustomLayout.vue'
import type { Theme } from 'vitepress/client'

FloatingVue.options.distance = 10

const theme: Theme = {
  extends: DefaultTheme,
  Layout() {
    return h(CustomLayout)
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
