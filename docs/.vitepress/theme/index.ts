import { h } from 'vue'
import Theme from 'vitepress/theme'
import RegisterSW from './components/RegisterSW.vue'
import HomeIntroduction from './components/HomeIntroduction.vue'
import type { Theme as ITheme } from 'vitepress/client'

const theme: ITheme = {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      'home-features-after': () => h(HomeIntroduction),
      'layout-bottom': () => h(RegisterSW),
    })
  },
  enhanceApp() {},
}

export default theme
