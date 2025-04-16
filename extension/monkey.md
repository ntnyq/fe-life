# 油猴插件

## 交互式配置

```js
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand

function useOption(key, title, defaultValue) {
  if (typeof GM_getValue === 'undefined') {
    return {
      value: defaultValue,
    }
  }

  let value = GM_getValue(key, defaultValue)

  const ref = {
    get value() {
      return value
    },

    set value(v) {
      value = v
      GM_setValue(key, v)
      location.reload()
    },
  }

  GM_registerMenuCommand(`${title}: ${value ? '✅' : '❌'}`, () => {
    ref.value = !value
  })

  return ref
}

const hideBlueBadge = useOption(
  'twitter_hide_blue_badge',
  'Hide Blue Badges',
  true,
)

if (hideBlueBadge.value) {
  // do something
}
```

参考文档:

- [antfu/userscript-clean-twitter](https://github.com/antfu/userscript-clean-twitter/blob/main/index.js)
