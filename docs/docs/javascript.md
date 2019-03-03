# JavaScript


## 移动端

移动端页面开发时候遇到的坑点。

### 阻止IOS设备滑动时页面底部空白与回弹效果

> 副作用：页面将不能滚动，改为使用内部滚动。

``` js
const body = document.body

body.addEventListener('touchmove', evt => {
  evt.preventDefault() // 阻止下拉滑动效果
}, { passive: false }) // 兼容 IOS 和安卓 使用 passive:true 提高滚动性能并减少崩溃
```

[参考资料](https://segmentfault.com/a/1190000014134234)

### 移动端使用时间格式化问题

在移动端，使用时间格式化函数处理 `yyyy-MM-dd hh:mm:ss` 这个格式的时间，在PC预览时格式化正常，但是在手机上，发现数字成了 `NaN`。

## ES6

### 兼容性

在小程序嵌入 Krpano 的 WebView Demo中使用了 ES6 的**箭头函数**，在 iPhone6sp 上出现问题，页面不可用。
查询 CanIUse 后得知，箭头函数的兼容性是 ios9.3 及以上。

::: tip

目前ES6的兼容性看样子即使在移动端，也无法保证全支持，仍然需要做 **转译**。

::: 

### 懒加载模块并使用

> ES6 moduels懒加载。

``` js
import(‘idcard’).then(IDCard => {
    // doSomething with module idcard
})
```

### 对象key排序

::: tip

将代码粘贴至Chrome控制台运行查看结果

:::

``` js
const obj = {
  f: 'f',
  a: 'a',
  e: 'e',
  b: 'b'
}
let result = {}

Object.keys(obj).sort().forEach(k => {
  result[k] = obj[k]
})

console.log(result)
```

## 页面平滑滚动

``` js
window.scrollTo({ top: 0, behavior: 'smooth' }) // Alternative instanll as default
```

[兼容性](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/scrollTo#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9%E6%80%A7)： 除 IE Edge 浏览器外，Safari 支持不佳，不支持 **scrollOptions** 参数。

参考资料：[Window-ScrollTo - MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/scrollTo)

### 页面刷新事件监听

``` js
window.onbeforeunload = function (evt) {
  // do something
}
```

