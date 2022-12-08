import { h } from 'vue'
import Theme from 'vitepress/theme'
import HomeIntroduction from './components/HomeIntroduction.vue'

export default {
  ...Theme,
  Layout () {
    return h(Theme.Layout, null, {
      'home-features-after': () => h(HomeIntroduction),
    })
  },
}
