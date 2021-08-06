# SCSS

> Life is short, I use SCSS.

## @content 指令

> [项目链接](https://github.com/ssshooter/nippon-color)

刚才在阅读上面的基于 Vue 的**PWA**项目的源码，在看它的样式代码的时候发现了一种新的 SCSS 的用法。

于是便搜索资料学习了一番。特在这里简单总结一下。

### 命令详解

**@content**的主要用途是给**@mixin**里传递内容，这点可以结合 Vue 的**slot**来理解以下。

通常我们使用**@mixin**都会通过参数往里面传递内容，在内部直接使用变量或者做判断来订制产生的内容。

例：

```scss
// 定义mixin
@mixin bg($textColor, $bgColor) {
  background-color: $bgColor;
  color: $textColor;
}

// 使用mixin
.box {
  @include bg(#fff, #333);
}

// 编译后
.box {
  background-color: #fff;
  color: #333;
}
```

但是，如果在**@mixin**里添加了**@content**指令，就可以传递样式内容进去。

例：

```scss
// 定义mixin
@mixin bg($textColor, $bgColor) {
  background-color: $bgColor;
  color: $textColor;
  @content;
}

// 使用mixin
.box {
  @include bg(#fff, #333);
  font-size: 14px;
}

// 编译后
.box {
  background-color: #fff;
  color: #333;
  font-size: 14px;
}
```

### 作用

#### 选择器的继承与覆盖

> 比如我们有时候需要做浏览器 hack。或者做一些别的全局的样式改变，例如主题切换。

```scss
// 定义mixin
@mixin themeIndigo {
  .theme-indigo & {
    @content;
  }
}

// 使用mixin
.box {
  background-color: #fff;
  @include themeIndigo {
    background-color: indigo;
  }
}

// 编译结果
.box {
  background-color: #fff;
}
.theme-indigo .box {
  background-color: indigo;
}
```

### 媒体查询断点

> **rwd**代表**Responsive Web Design**。

```scss
// 变量与mixin
$pc: 1024px;
$mobile: 767px;

@mixin rwd;
```

[参考资料](https://github.com/gonsakon/Learn-Sass-in-90-days/blob/master/docs/Sass/@content.markdown)

## Node Sass version 6.0.0 is incompatible with ^4.0.0 || ^5.0.0

`sass-loader` 与 `node-sass` 版本冲突。

升级 Loader 或者降级 Sass。
