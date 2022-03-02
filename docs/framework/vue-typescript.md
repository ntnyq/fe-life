# TypeScript

## tsx 文件不编译

Vue 项目使用 `vue-tsx-support` 后，无法渲染 tsx 文件组件。

经过大量时间 debug 后发现是由于自己习惯性地将 `main.ts` 中做了如下修改:

```ts
import Vue from 'vue'
import App from './App'

new Vue({
    // render: h => h(App)
    ...App,
})
```

而 `./App.tsx` 文件导出的是一个函数，而不是对象。所以无法渲染。
