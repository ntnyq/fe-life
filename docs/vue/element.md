# ElementUI

> ElememtUI 库踩坑记录。

## 绑定原生事件 native 修饰符失效

在 ElementUI 的 [FAQ](https://github.com/ElemeFE/element/blob/dev/FAQ.md) 中，要求在为 **自定义组件** 绑定 **原生事件** 的时候，要加上 `.native` 修饰符。

同样也可以在 Vue 的官方文档中看到。

但是最近的项目中，却发生了 `el-switch` 组件和 `el-select` 组件绑定 `change` 事件时候加上 `.native` 修饰符却无法触发方法的情况。

刚才又在官方文档里看到 这种 [特定的例子](https://cn.vuejs.org/v2/guide/components-custom-events.html#%E5%B0%86%E5%8E%9F%E7%94%9F%E4%BA%8B%E4%BB%B6%E7%BB%91%E5%AE%9A%E5%88%B0%E7%BB%84%E4%BB%B6)，暂时还不完全理解原理，但总算是找到了参考资料。具体原理可能需要阅读源码去了解。

## El-dropdown 内部嵌套 svg-icon

```vue
<el-dropdown trigger="click" @command="delete">
  <svg-icon icon="ellipsis-v"></svg-icon>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item class="text-danger" :command="scope.$index">
      {{ scope.title }}
    </el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
```

```vue
<!-- svg-icon.vue -->
<template>
	<svg class="svg-icon">
  	<use :xlink:href="`icon-${svg}`">
  </svg>
</template>
```

会出现报错`Error in callback for watcher "focusing": "TypeError: Cannot assign to read only property 'className' of object '#'"`

解决方案 使用 html 标签再对 `svg` 进行一次包裹。例如：

```vue
<el-dropdown trigger="click" @command="delete">
  <span>
  	<svg-icon icon="ellipsis-v"></svg-icon>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item class="text-danger" :command="scope.$index">
      {{ scope.title }}
    </el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
```

[参考文档](https://github.com/ElemeFE/element/issues/13453#issuecomment-441138145)

## 表单验证 validate 函数不执行

自定义表单验证规则无论成功与否，必须最后调用 `callback` 函数。

## 修改主题颜色不起作用

以如下的形式修改了主题颜色。

```scss
$--color-primary: darkblue
$--font-path: "~element-ui/lib/theme-chalk/fonts"
@import "~element-ui/packages/theme-chalk/src/index"
```

::: tip
在自定义修改样式的时候，注意需要将对样式的引入，放在对 UI 库组件引入的下面。
:::

```js
import './plugins/element'
import './styles/element-reset'
```

## Table 内嵌套 Popover 无法弹出

```vue
<template>
  <div class="element-demo">
    <el-table :data="data">
      <el-table-column type="index" label="序号"></el-table-column>

      <el-table-column prop="lang" label="框架" width="180"></el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-popover
            placement="top"
            width="200"
            trigger="manual"
            :ref="`popover${scope.$index}`"
          >
            <p>Lorem ipsum, dolor sit amet consectetur</p>
            <el-button
              slot="reference"
              @click.stop="showPopover(scope.$index)"
              type="primary"
              >Popover</el-button
            >
          </el-popover>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'ElementDemo',

  data() {
    return {
      data: [
        { lang: 'Vue', ui: 'Element' },
        { lang: 'React', ui: 'Antd' },
        { lang: 'Angular', ui: 'NG-ZORRO' },
      ],
      activePopIndex: undefined,
    }
  },

  methods: {
    showPopover(idx) {
      const index = this.activePopIndex

      if (index && this.$refs[`popover${idx}`]) {
        this.$refs[`popover${index}`].doClose()
        this.activePopIndex = undefined
      }
      this.$refs[`popover${idx}`] && this.$refs[`popover${idx}`].doShow()
    },

    hidePopover() {
      const idx = this.activePopIndex

      this.$refs[`popover${idx}`] && this.$refs[`popover${idx}`].doClose()
      this.activePopIndex = undefined
    },
  },
}
</script>
```

通过调用 **el-popover** 组件自身的 `doShow` 和 `doClose` 两个 methods 来实现。

[在线 Demo](https://codesandbox.io/s/zqm1w7wvxm)

## Table 显示列切换时乱序

```vue
<template>
  <el-table>
    <el-table-column v-if="type === 'foo'" prop="type" label="类型" />
    <el-table-column v-if="type === 'bar'" prop="title" label="标题" />
    <el-table-column v-if="type === 'baz'" prop="date" label="时间" />

    ...
  </el-table>
  <template
/></template>
```

解决方案：

1. 给 `el-table-column` 添加 `:key="Math.random()"`
2. 使用 `v-if` 条件在切换时重新渲染表格组件。

## flex 布局页面过渡坍塌

```vue
<template>
  <div class="layout-content">
    <div class="layout-content-inner">
      <transition name="el-zoom-in-center" mode="out-in">
        <router-view class="container" :key="$router.fullPath" />
      </transition>
    </div>
  </div>
</template>
```

解决办法: 给 `transition` 组件添加 `mode="out-in"` 属性。

## Message 组件页面刷新自动弹出

解决方案：

按需引入

```js
import { Message } from 'element-ui'

// 不能这样使用
Vue.use(Message)

// 而应该这样
Vue.prototype.$message = Message
```

## 无需弹出的日历面板

```vue

```
