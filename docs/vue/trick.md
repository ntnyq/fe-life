# 小技巧

## 静态资源

将静态资源根据种类在 **assets** 目录下分目录保存。如 **images**，**fonts**，**medias**等。

在 **SCSS** 中使用图片或字体，可以通过如下形式来引用：

```scss
// 直接使用
.icon {
  background-image: url('~@/assets/images/icon.png');
}

// 通过 mixin
@mixin bg($name, $ext: 'png') {
  background-image: url('~@/assets/images/#{$name}.#{$ext}');
}

.icon {
  @include bg('icon');
}
```

在 **Vue Template** 中使用图片：

::: tip

建议通过 webpack 配置更加简洁的 **alias**，方便使用。

:::

```vue
<template>
  <div>
    <img :src="require('@assets/images/icon.png')" alt="icon" />
  </div>
</template>
```

## 动态修改页面 Title

使用 **afterEach** 钩子函数，在路由切换成功后修改 `title`。

```js
const router = new VueRouter({
  // ...
})

router.afterEach(route => {
  const documentTitle = process.env.VUE_APP_TITLE || 'Title'

  route.matched.forEach(path => {
    if (path.meta.title) {
      documentTitle += ` - ${path.meta.title}`
    }
  })

  document.title = documentTitle
})
```

## EventBus 使用场景

::: tip

在路由的 `beforeEnter` 钩子函数触发时，还无法获取到 `this` 对象，这时我们可以使用 `EventBus` 抛出事件。

:::

```js
export default {
  beforeEnter(to, from, next) {
    if (isPrivateMode()) {
      EventBus.$emit('get-localdata-error')
      next(false)
      return
    }
  },
}
```

```vue
// App.vue
<script>
export default {
  mounted() {
    EventBus.$on('get-localdata-error', () => {
      this.$alert('请勿使用无痕模式浏览')
    })
  },
}
</script>
```

## 自定义指令埋点

```js
Vue.directive('stat', {
  bind(el, binding) {
    el.addEventListener(
      'click',
      () => {
        const data = binding.value
        let prefix = 'store'

        if (OS.isAndroid || OS.isPhone) {
          prefix = 'mall'
        }

        analytics.request(
          {
            ty: `${prefix}_${data.type}`,
            dc: data.desc || '',
          },
          'n'
        )
      },
      false
    )
  },
})
```
