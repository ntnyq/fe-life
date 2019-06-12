# HTML

## 禁止视频全屏播放

> IOS、QQ和微信浏览器。

``` html
<video src="video.mp4" playsinline webkit-playsinline="true" x5-playsinline></video>
```

解决方案： 在video标签上加如上3个属性。

[IOS webview解决方案](https://www.jianshu.com/p/37404ccfabe8)

## Input["type=number"]上下箭头

``` scss
input[type="number"] {
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    appearance: none;
  }

  -moz-appearance: textfield;

  &::-ms-clear {
    display: none;
  }
}
```

## meta标签页面重定向兼容

``` html
<meta http-equiv="refresh" content="3; url=http://www.baidu.com" />
```

__content__ 内的3代表3秒后页面跳转，__url__ 指向目标跳转地址。

兼容性差异：

| 浏览器            | 支持性                                     |
| ----------------- | ------------------------------------------ |
| IE6 IE7 IE8 Opera | 支持 "分号" 和 "空格" 做分隔符             |
| Firefox           | 支持 "分号" 、 "逗号" 和 "空格" 做分隔符。 |
| Chrome Safari     | 支持 "分号" 和 "逗号" 做分隔符。           |

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