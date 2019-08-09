# HTML

## 禁止视频全屏播放

> IOS、QQ和微信浏览器。

``` html
<video src="video.mp4" playsinline webkit-playsinline="true" x5-playsinline></video>
```

解决方案： 在video标签上加如上3个属性。

[IOS webview解决方案](https://www.jianshu.com/p/37404ccfabe8)

## a链接的target

``` html 
<!-- 所有target为_blank的链接都会在不同的新窗口中打开 -->
<a href="https://www.google.com" target="_blank">Google</a>

<!-- 所有target为_blank的链接都会在同一个新窗口中打开 -->
<a href="https://www.google.com" target="blank">Google</a>
```

::: tip 提示
当使用target属性时，建议给链接添加 `rel="noreferrer"` 来避免 `window.opener` API 带来的安全问题。

当使用 `target="_blank"` 属性的链接打开新页面时，新打开的页面会和当前页面使用同个进程。如果新页面消耗系统资源过多，则会影响当前页面的性能。建议添加 `rel="noopener"` 属性来避免影响。
:::

### 参考文档

- [MDN-The Anchor element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Attributes)
- [What is the difference between target=“_blank” and “target=blank”?](https://stackoverflow.com/questions/35703005/what-is-the-difference-between-target-blank-and-target-blank)

## meta标签页面重定向兼容

``` html
<meta http-equiv="refresh" content="3; url=http://www.baidu.com" />
```

__content__ 内的3代表3秒后页面跳转，__url__ 指向目标跳转地址。

兼容性差异：

| 浏览器             | 支持性                                      |
| ----------------- | ------------------------------------------ |
| IE6 IE7 IE8 Opera | 支持 "分号" 和 "空格" 做分隔符                 |
| Firefox           | 支持 "分号" 、 "逗号" 和 "空格" 做分隔符。      |
| Chrome Safari     | 支持 "分号" 和 "逗号" 做分隔符。               |

## 无搜索按钮搜索

PC端回车触发搜索，并且移动端软键盘显示 __搜索__。
 
``` html
<form action="#" method="GET">
  <input class="search-input" type="search" placeholder="回车搜索" />
</form>
```

``` scss
// 去掉搜索框右侧的交叉图标

.search-input {
  &::-webkit-search-cancel-button { 
    display: none; 
  }
}
```

``` js
const searchInput = document.querySelector('.search-input')

searchInput.addEventListener('keypress', function (evt) {
  const keyword = searchInput.value.trim()
  const KEYCODE_ENTER = 13

  if (evt.keyCode === KEYCODE_ENTER) {
    console.log(keyword)

    evt.preventDefault()
  }
}, !1)
```

## 使用mp4替代gif图片

``` html
<video src="video/mp4" autoplay="autoplay" loop="loop" muted="muted" ></video>
```
