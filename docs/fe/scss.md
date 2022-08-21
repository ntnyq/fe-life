# SCSS

> Life is short, I use SCSS.

## At-rule

`@use` 用于从其他 sass 文件导入 mixins, functions, variables，或将多个 sass 文件组合到一起。

`@forward` 用于从其他 sass 文件导入 mixins, functions, variables。用于其他 sass 文件的 `@use` 使用。

`@mixin` 和 `@include` 结合使用。前者用于定义 mixin 后者用于使用 mixin。

`@function` 用户定义 function。

`@at-root` 用于将嵌套的样式提升至样式文件根目录。

`@error`, `@warn`, `@debug` 用户 debug。

`@if`, `@else`, `@for`, `@while`, `@each` 条件循环控制语句，提供编程能力。

## @content 指令

> [项目链接](https://github.com/ssshooter/nippon-color)

刚才在阅读上面的基于 Vue 的 **PWA** 项目的源码，在看它的样式代码的时候发现了一种新的 SCSS 的用法。

于是便搜索资料学习了一番。特在这里简单总结一下。

### 命令详解

**@content** 的主要用途是给 **@mixin** 里传递内容，这点可以结合 Vue 的 **slot** 来理解以下。

通常我们使用 **@mixin** 都会通过参数往里面传递内容，在内部直接使用变量或者做判断来订制产生的内容。

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

但是，如果在 **@mixin** 里添加了 **@content** 指令，就可以传递样式内容进去。

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

> **rwd** 代表 **Responsive Web Design**。

```scss
// 变量与mixin
$pc: 1024px;
$mobile: 767px;

@mixin rwd;
```

[参考资料](https://github.com/gonsakon/Learn-Sass-in-90-days/blob/master/docs/Sass/@content.markdown)

## dart-sass v2 禁止 / 作为除法运算符

> 推荐使用 math.div 函数

```js
// vue.config.js
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@use "sass:math"; @import "~@/assets/styles/core/style";`,
                sassOptions: {
                    // @see https://stackoverflow.com/questions/67812380/disable-dart-sass-warnings-produced-by-external-theme-file
                    quietDeps: true, // 关闭控制台警告
                },
            },
        },
    },
}
```

```scss
.box {
    width: math.div($box-width, 2);
}
```
