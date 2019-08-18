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
  { passive: false }
) // 兼容 IOS 和安卓 使用 passive:true 提高滚动性能并减少崩溃
```

[参考资料](https://segmentfault.com/a/1190000014134234)

### 移动端时间格式化

在移动端，使用时间格式化函数处理 `yyyy-MM-dd hh:mm:ss` 这个格式的时间，在 PC 预览时格式化正常，但是在手机上，发现数字成了 `NaN`。

## ES6

### 兼容性

在小程序嵌入 Krpano 的 WebView Demo 中使用了 ES6 的**箭头函数**，在 iPhone6sp 上出现问题，页面不可用。
查询 CanIUse 后得知，箭头函数的兼容性是 ios9.3 及以上。

::: tip
目前 ES6 的兼容性看样子即使在移动端，也无法保证全支持，仍然需要做 **转译**。
:::

### 懒加载模块并使用

> ES6 moduels 懒加载。

```js
import('idcard').then(IDCard => {
  // doSomething with module idcard
})
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
let result = {}

Object.keys(obj)
  .sort()
  .forEach(k => {
    result[k] = obj[k]
  })

console.log(result)
```

## 页面平滑滚动

```js
// Alternative instanll as default
window.scrollTo({ top: 0, behavior: 'smooth' })
```

兼容性：

- [Window.scrollTo()](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/scrollTo#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9%E6%80%A7)

除 IE Edge 浏览器外，Safari 支持不佳，不支持 `scrollOptions` 参数。

参考资料：

- [Window-ScrollTo - MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/scrollTo)

## 页面刷新事件监听

会在页面刷新时，进行提示。

```js
window.onbeforeunload = function(evt) {
  // do something
}
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
  } catch (error) {
    console.log('You are in private mode!')
    return false
  }
}
```

参考资料：

- [移动端浏览器隐私模式/无痕模式使用本地存储 localStorage/sessionStorage 的问题](https://my.oschina.net/jamesview/blog/2252926)

## 浏览器自动全屏

结论：无法实现，全屏 API 必须由用户主动触发。

使用了 [screenfull.js](https://github.com/sindresorhus/screenfull.js) 进行测试。

报错如下：

```text
Failed to execute 'requestFullscreen' on 'Element': API can only be initiated by a user gesture.
```

## 八进制数转字符串

直接对 8 进制数进行转换字符串操作，例如`num.toString()`，`'' + num` 或 `0${num}` 都会触发数字进制转换，默认会将 8 进制数转换为 10 进制。

```js
const num = 0214 // 8进制数

console.log(`0${num.toString(8)}`)
```
