# ElementUI

> ElememtUI库踩坑记录。

## 绑定原生事件native修饰符失效

在 ElementUI 的 [FAQ](https://github.com/ElemeFE/element/blob/dev/FAQ.md) 中，要求在为 **自定义组件** 绑定 **原生事件** 的时候，要加上 `.native` 修饰符。

同样也可以在 Vue 的官方文档中看到。

但是最近的项目中，却发生了 `el-switch` 组件和 `el-select` 组件绑定 `change` 事件时候加上 `.native` 修饰符却无法触发方法的情况。

刚才又在官方文档里看到 这种 [特定的例子](https://cn.vuejs.org/v2/guide/components-custom-events.html#%E5%B0%86%E5%8E%9F%E7%94%9F%E4%BA%8B%E4%BB%B6%E7%BB%91%E5%AE%9A%E5%88%B0%E7%BB%84%E4%BB%B6)，暂时还不完全理解原理，但总算是找到了参考资料。具体原理可能需要阅读源码去了解。

## El-dropdown内部嵌套svg-icon

``` vue
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

``` vue
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