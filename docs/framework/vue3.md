# Vue3

## Provide & Inject 传递配置

```ts
import type { App } from 'vue'
import { inject } from 'vue'

interface Config {
  name: string
}

const CONFIG_SYMBOL = symbol('app-config')

export const injectConfig = (app: App, config?: Config) => {
  app.provide(CONFIG_SYMBOL, config)
}

export const useConfig = () => {
  return inject<Config>(CONFIG_SYMBOL, {} as Config)
}
```

## 组件生命周期事件

Component lifecycle event

用户监听例如组件的 updated mounted 等生命周期事件。

Vue2 示例:

```vue
<template>
  <div class="parent">
    <Child @hook:mounted="handleComponentMounted" />
  </div>
</template>
```

Vue3 示例:

```vue
<template>
  <div class="parent">
    <Child @vue:mounted="handleComponentMounted" />
  </div>
</template>
```

参考资料:

- [VNode Lifecycle Events](https://v3-migration.vuejs.org/breaking-changes/vnode-lifecycle-events.html)
