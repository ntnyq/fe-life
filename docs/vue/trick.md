# 小技巧

## 项目内使用静态资源。

将静态资源根据种类在 **assets** 目录下分目录保存。如 **images**，**fonts**，**medias**等。

在 **SCSS** 中使用图片或字体，可以通过如下形式来引用：

``` scss
// 直接使用
.icon {
  background-image: url("~@/assets/images/icon.png");
}

// 通过 mixin
@mixin bg ($name, $ext: "png") {
  background-image: url("~@/assets/images/#{$name}.#{$ext}");
}

.icon {
  @include bg("icon");
}
```

在 **Vue Template** 中使用图片：

::: tip

建议通过 webpack 配置更加简洁的 **alias**，方便使用。

:::

``` vue
<template>
	<div>
  	<img :src="require('@/assets/images/icon.png')" alt="icon" />
  </div>
</template>
```

