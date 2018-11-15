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

## ES6

### 懒加载模块并使用

> ES6 moduels懒加载。

``` js
import(‘idcard’).then(IDCard => {
    // doSomething with module idcard
})
```
