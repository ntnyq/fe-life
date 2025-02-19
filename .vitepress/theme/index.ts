import 'floating-vue/dist/style.css'
import 'uno.css'
import './style.css'
import FloatingVue from 'floating-vue'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import DemoContainer from './components/DemoContainer/index.vue'
import CustomLayout from './CustomLayout.vue'
import type { Theme } from 'vitepress/client'

FloatingVue.options.distance = 10

export default {
  extends: DefaultTheme,
  Layout: () => h(CustomLayout),
  enhanceApp({ app }) {
    app.use(FloatingVue)
    app.component('DemoContainer', DemoContainer)
  },
} satisfies Theme
