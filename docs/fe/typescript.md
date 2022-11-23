# TypeScript

## 全局变量类型声明

```ts
import { App } from 'vue'

declare global {
  interface Window {
    $app: App
  }
}
```

## 箭头函数返回泛型

<!-- prettier-ignore-start -->
```ts
import { defineStore } from 'pinia'

export interface IUserStateTree {
    roles: string[]
}

export const useUserStore = defineStore({
    id: `user`,

    // state(): IUserStateTree {
    //     return {
    //         roles: [],
    //     }
    // },

    state: () => <IUserStateTree>({
      roles: []
    }),
})
```
<!-- prettier-ignore-end -->
