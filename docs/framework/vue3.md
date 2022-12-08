# Vue3

# Provide & Inject 传递配置

```ts
import type { App } from 'vue'
import { inject } from 'vue'

interface Config {
  name: string
}

const CONFIG_SYMBOL = symbol(`app-config`)

export const injectConfig = (app: App, config?: Config) => {
  app.provide(CONFIG_SYMBOL, config)
}

export const useConfig = () => {
  return inject<Config>(CONFIG_SYMBOL, {} as Config)
}
```
