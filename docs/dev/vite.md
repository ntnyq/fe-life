# ViteJs

## 全局 SCSS 变量

```js
// vite.config.{js|ts}

export default {
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "path_to_your/variables;"`,
            },
        },
    },
}
```
