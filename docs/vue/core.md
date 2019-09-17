# Vue

## 指令 Directive

### 自定义指令

### 修饰符

> 修饰符其实是预置的简单的配置

#### 表单数据绑定

> `v-model`指令

- trim 可以去除表单输入内容的前后空格
- number 可以将输入框内容转化为数字

#### 事件绑定

> `v-on`指令或`@`

- left 鼠标左键
- middle 鼠标滚轮
- right 鼠标右键
- prevent 阻止浏览器默认事件
- stop 停止事件向上冒泡
- capture 使用事件捕获进行事件监听
- native 给自定义组件绑定原生事件需要加上此修饰符
- self 事件只能由绑定事件的元素上被触发
- once 事件只能被触发一次

## 过滤器 Filter

通过`Vue.filter`指令可注册全局的过滤器。

在项目中，以如下的格式使用：

```js
// utils/filter.js
export function toThousand(num) {
  return (+num || 0)
    .toString()
    .replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}
```

```js
// main.js
import * as filters from '@/utils/filter'

Object.keys(filters).forEach(k => Vue.filter(k, filter[k]))
```

## 实例方法

### vm.\$nextTick

将传入的回调函数，延迟到下次 **Dom** 更新循环之后执行。在修改数据之后立即调用它，然后等待 **Dom** 更新。

```js
export default {
  methods: {
    update() {
      this.msg = 'Hello world'
      this.$nextTick(() => {
        // this绑定当前组件实例
      })
    },
  },
}
```

作用：当我们更新了数据，要对 **Dom** 做操作时，保证操作的是更新后的 **Dom**。

[官方文档](https://cn.vuejs.org/v2/api/#vm-nextTick)

## 函数式组件

函数式组件没有 **状态** 和 **实例**，(无 `data` 和 `this` )，它使用一个简单的 `render` 函数返回虚拟节点，比普通的模板更加容易渲染。

```js
export default {
  functional: true,

  render(h, { props, slots }) {
    return h(
      'span',
      { class: ['class-name', props.attr1, props.attr2] },
      props.text || slots().default
    )
  },
}
```

- [参考文档](https://cn.vuejs.org/v2/guide/render-function.html#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6)

### 非 functional 组件无 context?

```js
```

### 上下文里的 data 是什么

data 包含以下几个部分：

- staticClass `class="foobar"` 的类

- class `v-bind:class` 的类

- attrs 未被解析成 props 或者别的属性 包括 `v-bind:foo-bar` 语法 和 `foobar="foobar"` 语法

```js
export default {
  render(h, { props, data }) {
    return h('span', {
      ...data,
    })
  },
}
```

## \$Refs

在元素上添加`ref="Foo` 属性，即可在 Vue 中使用 `this.$refs['Foo']` 来访问这个引用。

对普通元素来说，它相当于获取了 Dom 节点。对于 `Vue Component`，它相当于这个组件的引用。

在 **父组件上** 可以通过它来调用子组件上的方法。例：

```vue
// Child.vue
<script>
export default {
  name: 'Child',

  methods: {
    log() {
      console.log('Hello world')
    },
  },

  render(h) {
    return h('div')
  },
}
</script>

// Parent
<template>
  <div class="parent">
    <Child ref="child" />
  </div>
</template>

<script>
export default {
  name: 'Parent',

  mounted() {
    this.$refs.child.log() // Hello world
  },
}
</script>
```

## 生命周期

看的面试题里经常问到的一个问题：

**Vue 框架中进行数据请求，应该在哪个生命周期函数内发起请求，created 还是 mounted？**

其实，两者皆有优点和缺点。

`mounted` 生命周期内发起请求，不会出现错误，但是因为 `mounted` 直到所有子组件渲染完毕后才触发，所以请求发起的时间会略滞后。

而 `created` 生命周期发起请求，如果请求的某些参数要基于 DOM 的，那么这时请求有可能会出现报错或数据不符合预期，当然绝大多数情况是不存在问题的。

总的说来，需要增加自己对代码的掌控力，合理选择数据请求的生命周期。
