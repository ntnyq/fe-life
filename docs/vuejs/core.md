# Vue

## 指令Directive

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

## 过滤器Filter

通过`Vue.filter`指令可注册全局的过滤器。

在项目中，以如下的格式使用：

``` js
// utils/filter.js
export function toThousand (num) {
  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','));
}
```

``` js
// main.js
import * as filters from '@/utils/filter';

Object,keys(filters).forEach(k => {
  Vue.filter(k, filter[k]);
});
```

## 实例方法

### vm.$nextTick

将传入的回调函数，延迟到下次 **Dom** 更新循环之后执行。在修改数据之后立即调用它，然后等待 **Dom** 更新。

``` js
export default {
  methods: {
    update () {
      this.msg = 'Hello world'
      this.$nextTick(() => {
        // this绑定当前组件实例
      })
    }
  }
}
```

作用：当我们更新了数据，要对 **Dom** 做操作时，保证操作的是更新后的 **Dom**。

[官方文档](https://cn.vuejs.org/v2/api/#vm-nextTick)

## 函数式组件

``` js
export default {
  functional: true,
  render (h, { props, slots }) {
    render h('span', {
      class: ['class-name', props.attr1, props.att2]
    }, props.text || slots().default)
  } 
}
```

## $Refs

在元素上添加`ref="Foo` 属性，即可在 Vue 中使用 `this.$refs['Foo']` 来访问这个引用。

对普通元素来说，它相当于获取了 Dom 节点。对于 `Vue Component`，它相当于这个组件的引用。

在 **父组件上** 可以通过它来调用子组件上的方法。例：

``` js

```

## 生命周期

经常遇到的一个问题：

**Vue 中数据请求，应该放在哪个生命周期函数内，created还是mounted？**

其实，两种都有其优点。

总的说来，`mounted` 时候请求数据，肯定没问题，但是因为 `mounted` 会在子组件渲染完毕后才挂载，所以请求时间会滞后一点。

为了更好的用户体验，更快地展现首屏内容，我们应该在可以将数据请求提到 `created` 周期时，就使用 `created` 函数去发起数据请求。