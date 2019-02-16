# MintUI踩坑记录

!> 已弃用MintUI做为移动端组件库，因为该项目已长时间不再维护，建议使用[VantUI](https://youzan.github.io/vant)

## 按需导入

针对组件库的按需导入，[官方文档](https://mint-ui.github.io/docs/#/zh-cn2/quickstart) 中是包含的，但在实际使用中，会出现报错，无法实现按需导入。

经过一番查资料和折腾后，总结方案如下：

```js
// main.js
import Vue from 'vue'
import {
  Button
} from 'mint-ui'

Vue.component(Button.name, Button)

// babel.config.js
module.exports = {
  presets: [ '@vue/app' ],
  plugins: [
    [
      'component',
      {
        libraryName: 'mint-ui',
        style: true
      }
    ]
  ]
}
```
