# 微信

## 自动播放音频

```js
const _ = {
  isWechat() {
    const UA_WECHAT_RE = /micromessenger/i

    return UA_WECHAT_RE.test(navigator.userAgent)
  },
}

;((doc, win) => {
  if (_.isWechat()) {
    const audio = doc.querySelector('#audio')

    doc.addEventListener(
      'WeixinJSBridgeReady',
      () => {
        console.log('微信加载Ok')
        audio.load()

        audio.addEventListener(
          'canplay',
          () => {
            console.log('音频可以播放了')
            audio.play()
          },
          !1
        )
      },
      !1
    )
  }
})(document, window)
```
