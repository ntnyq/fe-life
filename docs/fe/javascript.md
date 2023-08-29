# JavaScript

## 移动端

移动端页面开发时候遇到的坑点。

### 阻止 IOS 设备滑动时页面底部空白与回弹效果

> 副作用：页面将不能滚动，改为使用内部滚动。

```js
const body = document.body

body.addEventListener(
  'touchmove',
  evt => {
    evt.preventDefault() // 阻止下拉滑动效果
  },
  { passive: false },
) // 兼容 IOS 和安卓 使用 passive: true 提高滚动性能并减少崩溃
```

参考资料:

- [阻止微信浏览器下拉滑动效果](https://segmentfault.com/a/1190000014134234)

### 移动端时间格式化

时间格式化 `yyyy-MM-dd hh:mm:ss` 此格式时间，PC 端可正常格式化，移动端会出现 `NaN`。

## ES6

### 兼容性

在小程序嵌入 Krpano 的 WebView Demo 中使用了 ES6 的箭头函数，在 iPhone6sp 上出现问题，页面不可用。
查询 CanIUse 后得知，箭头函数的兼容性是 ios9.3 及以上。

::: tip
目前 ES6 的兼容性看样子即使在移动端，也无法保证完全支持，仍需进行 Babel 转译。
:::

### 懒加载模块并使用

> ES6 module 懒加载。

```js
const idCard = await import('id-card')
// doSomething with module idCard
```

### 对象 key 排序

::: tip
将代码粘贴至 Chrome 控制台运行查看结果
:::

```js
const obj = {
  f: 'f',
  a: 'a',
  e: 'e',
  b: 'b',
}
const result = {}

Object.keys(obj)
  .sort()
  .forEach(k => {
    result[k] = obj[k]
  })

console.log(result)
```

### 数组 includes 无法处理对象数组

代码示例:

```js
const array = [{ name: 'ntnyq' }]
const name = 'ntnyq'

console.log(array.includes(item => item.name === name)) // false
```

参考资料:

- [Array.prototype.includes()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

## 页面平滑滚动

```js
// Alternative instant as default
window.scrollTo({ top: 0, behavior: 'smooth' })
```

兼容性:

- [Window.scrollTo()](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo#Browser_Compatibility)

除 IE Edge 浏览器外，Safari 支持不佳，不支持 `scrollOptions` 参数。

Polyfill:

- [smoothscroll](https://github.com/iamdustan/smoothscroll)

参考资料:

- [Window-ScrollTo - MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/scrollTo)

## 页面刷新事件监听

会在页面刷新时，进行提示。

```js
window.addEventListener('beforeunload', evt => {
  // do something
})
```

## 移动端浏览器无痕模式 Storage 报错

Safari 表现：

- localStorage 对象仍然存在
- 但是 setItem 会报异常：`QuotaExceededError`
- getItem 和 removeItem 直接忽略

```js
function isLocalStorageSupported() {
  const TEST_KEY = 'test'
  const storage = window.sessionStorage

  try {
    storage.setItem(TEST_KEY, 'testValue')
    storage.removeItem(TEST_KEY)
    return true
  } catch {
    console.log('You are in private mode!')
    return false
  }
}
```

参考资料:

- [移动端浏览器隐私模式/无痕模式使用本地存储 localStorage/sessionStorage 的问题](https://my.oschina.net/jamesview/blog/2252926)

## 浏览器自动全屏

结论：无法实现，全屏 API 必须由用户主动触发。

使用了 [screenfull.js](https://github.com/sindresorhus/screenfull.js) 进行测试。

报错如下：

```txt
Failed to execute 'requestFullscreen' on 'Element': API can only be initiated by a user gesture.
```

## 八进制数转字符串

直接对 8 进制数进行转换字符串操作，例如`num.toString()`，`'' + num` 或 `0${num}` 都会触发数字进制转换，默认会将 8 进制数转换为 10 进制。

```js
const num = 0o214 // 8进制数

console.log(`0${num.toString(8)}`)
```

## 错误 `cannot convert undefined or null to object`

错误原因：

1. `Object.keys()` 参数为 `null` 或者 `undefined`。
2. `Object.assign()` 第一个参数为 `null` 或者 `undefined`。

## ESM 使用 require 方法

```js
// eslint-disable-next-line import/order
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const foobar = require('foo-bar')
```
