# PhotoSwipe

## OA 系统，系统全屏后，预览图片点击遮罩后退出全屏。

OA 系统中使用了 `PhotoSwipe` 库实现图片预览。问题：

当系统使用 `screenfull` 调用页面全屏 API 后点击预览图片，再点击图片关闭预览时，页面会退出全屏状态。

解决方案：

```js
const options = {
    fullscreenEl: false,
}

const ps = new PhotoSwipe(`DOM`, options)
```

-   [PhotoSwipe - Options](https://photoswipe.com/documentation/options.html)
