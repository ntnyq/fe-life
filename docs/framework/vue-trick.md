# Tricks

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
    <img
      :src="require('@images/icon.png')"
      alt="icon"
    >
  </div>
</template>
```

## 动态修改页面 Title

使用 **afterEach** 钩子函数，在路由切换成功后修改 `title`。

```js
const router = new VueRouter({
  routes: [],
})

router.afterEach(route => {
  let documentTitle = process.env.VUE_APP_TITLE || 'DEFAULT_TITLE'

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
    el.addEventListener('click', () => {
      const data = binding.value
      let prefix = 'store'

      if (OS.isAndroid || OS.isPhone) {
        prefix = 'wap'
      }

      analytics.request({ ty: `${prefix}_${data.type}`, dc: data.desc || '' }, 'n')
    })
  },
})
```

## 深度作用选择器

Vue 组件样式在 `scoped` 模式下，默认情况下，无法通过选择器修改子组件内的样式。通过使用深度作用选择器可以解决这个问题。

深度选择器有两种形式 `>>>` 和 `/deep/`，但 `sass` 预处理器不能很好的解析 `>>>`，所以建议使用 `/deep/`。

```vue
<style lang="scss" scoped>
.parent {
  & /deep/ .child {
    color: red;
  }
}
</style>
```

## SCSS 与 JS 共享变量

```scss
// src/styles/var.scss

$primary-color: #095ce5;

/* stylelint-disable */
:export {
  primarycolor: $primary-color;
}
/* stylelint-enable */
```

```js
import { primaryColor } from '@/styles/var.scss'

console.log(primaryColor) // #095ce5
```

参考资料：

- [How to Share Variables Between JavaScript and Sass](https://www.bluematador.com/blog/how-to-share-variables-between-js-and-sass)
