# HTML

## 禁止视频全屏播放

IOS、QQ 和微信浏览器，在 video 标签上加如上 3 个属性。

```html
<video src="video.mp4" playsinline webkit-playsinline="true" x5-playsinline></video>
```

参考资料:

-   [IOS webview 解决方案](https://www.jianshu.com/p/37404ccfabe8)

## a 链接的 target

```html
<!-- 所有target为 _blank 的链接都会在不同的新窗口中打开 -->
<a href="https://www.google.com" target="_blank">Google</a>

<!-- 所有target为 blank 的链接都会在同一个新窗口中打开 -->
<a href="https://www.google.com" target="blank">Google</a>
```

::: tip
当使用 target 属性时，建议给链接添加 `rel="noreferrer"` 来避免 `window.opener` API 带来的安全问题。

当使用 `target="_blank"` 属性的链接打开新页面时，新打开的页面会和当前页面使用同个进程。如果新页面消耗系统资源过多，则会影响当前页面的性能。建议添加 `rel="noopener"` 属性来避免影响。
:::

参考资料:

-   [MDN-The Anchor element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Attributes)
-   [What is the difference between target=“\_blank” and “target=blank”?](https://stackoverflow.com/questions/35703005/what-is-the-difference-between-target-blank-and-target-blank)

## meta 标签页面重定向兼容

```html
<meta http-equiv="refresh" content="3; url=http://www.baidu.com" />
```

**content** 内的 3 代表 3 秒后页面跳转，**url** 指向目标跳转地址。

兼容性差异：

| 浏览器            | 支持性                                     |
| ----------------- | ------------------------------------------ |
| IE6 IE7 IE8 Opera | 支持 "分号" 和 "空格" 做分隔符             |
| Firefox           | 支持 "分号" 、 "逗号" 和 "空格" 做分隔符。 |
| Chrome Safari     | 支持 "分号" 和 "逗号" 做分隔符。           |

## 无搜索按钮搜索

PC 端回车触发搜索，并且移动端软键盘显示 **搜索**。

```html
<form action="#" method="GET">
    <input class="search-input" type="search" placeholder="回车搜索" />
</form>
```

```scss
// 去掉搜索框右侧的交叉图标
.search-input {
    &::-webkit-search-cancel-button {
        display: none;
    }
}
```

```js
const searchInput = document.querySelector('.search-input')

searchInput.addEventListener('keypress', evt => {
  const keyword = searchInput.value.trim()
  const KEYCODE_ENTER = 13

  if (evt.keyCode === KEYCODE_ENTER) {
    console.log(keyword)
    evt.preventDefault()
  }
}, !1,)
```

## 使用 mp4 替代 gif 图片

```html
<video src="video.mp4" autoplay="autoplay" loop="loop" muted="muted"></video>
```

## 图片缩小变模糊

```css
img {
    image-rendering: -moz-crisp-edges;
    image-rendering: -o-crisp-edges;
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
    -ms-interpolation-mode: nearest-neighbor;
    -webkit-font-smoothing: antialiased;
}
```

**参考资料**

-   [css-图片缩小变模糊了。](https://juejin.cn/post/6978853282156396557)
