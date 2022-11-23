# CSS

与其说是 CSS 的坑，不如说是**兼容**的坑，或者厂商们的坑。👀

> 你问我兼容不兼容，我说兼容。

## 通用

### 伪元素尺寸大于元素本身引起的可点击位置错误

项目需求，有一个设计效果带光影的按钮，切图后发现设计师提供的 **图层** 带的光影比较大，已经超过了按钮实际在设计图上占据的空间。于是采用伪元素将光影作为背景加到了按钮的背景下面。没想到这就踩坑了。

问题：点击光影也就是伪元素的占据的区域，也能够触发按钮的点击事件。

解决方案：

在伪元素上面加 `pointer-events: none;` 属性，来阻止伪元素响应点击事件。

兼容性：[Can-I-Use](https://caniuse.com/#search=pointer-events) IE11+ 移动端基本无兼容问题。

### fixed 定位的参照物问题

在父元素设置了 `transform` 属性的情况下，`position: fixed;` 定位的元素不再以浏览器视口为参照，即使 `transform` 并未对元素的位置产生影响。如:

```css
.foo {
  transform: translate(0);
}

.bar {
  transform: scale(0);
}
```

[参考资料](https://segmentfault.com/a/1190000017939779)

[示例 Demo](https://ntnyq.github.io/demos/html/fixed-test.html)

### input[type="number"]光标上移异常

当我们设置了 input 元素的 `height` 和 `line-height` 相等来实现竖直方向文字居中时，中文输入法下，在 `input[type="number"]` 输入框下输入中文字符，会引起光标上移。

解决方法：不要设置 `line-height` 属性，或者设置`line-height: normal` 默认值，或者给 input 元素设置`padding` 值，即可解决此问题。

[参考资料](https://blog.csdn.net/haihiaandtongtong/article/details/50345065)

### Input["type=number"]上下箭头

```scss
input[type='number'] {
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    appearance: none;
  }

  -moz-appearance: textfield;

  &::-ms-clear {
    display: none;
  }
}
```

### translate3d 引起字体模糊

在 translate3d 函数内参数出现小数的时候，变幻元素内部的字体会出现发虚模糊的现象。如下：

```scss
.foo {
  transform: translate3d(100.5px, 100.4px, 0);
}
```

小数值越接近 0.5，模糊现象越严重。同时字体发虚的程度与硬件和分辨率存在关联。

解决方案：

1. 放弃使用 translate3d 方法
2. 使用 zoom 属性，添加样式 `zoom: 99%;`
3. 调整元素尺寸，让 translate 的值为整数

参考资料：

- [Blurry text on transform:rotate in Chrome](https://stackoverflow.com/questions/20326220/blurry-text-on-transformrotate-in-chrome)
- [解决 Swiper 中 translate3d 导致字体模糊](http://xuxun.me/blog/2014/04/translate3d-cause-text-blurry-in-swiper/)

### 非系统字族延迟渲染

```scss
h1 {
  font-family: 'FZCYSK';
}
```

新闻页面顶部的标题使用了方正某个字体。

页面内容由 PHP 进行服务器渲染，但加载过程中标题却显示空白，一段时间后才被渲染出来。

去除这个字族设置后，页面渲染恢复正常。

原因：使用非系统字体，未提供回退字体。

### Chrome 最小字体限制

在中文版 Chrome 的某些版本下存在字体大小限制，表现为：

- PC 端可设置字体最小为 12px
- 移动端可设置字体最小为 10px

原因是 Chrome 认为过小的字体对用户是不友好的。

解决方案，使用 CSS transfrom scale 缩放。

英文版 Chrome 不存在此问题。

### 字体图标 transform 失效

原因： `transform` 属性无法应用于行内元素。

解决方案： 设置 `display: inline-block`。

## PC 端

### Input 输入框的默认清空按钮与密码明文图标。

```scss
// type="text"
input::-ms-clear {
  display: none;
}

// type="password"
input::-ms-reveal {
  display: none;
}
```

参考文档：

- [IE 浏览器 input 输入框的默认清空和密码明文按钮](https://zhuanlan.zhihu.com/p/35725266)

## 移动端

☠️☠️☠️

### br 标签行高问题

`<br />` 标签在部分机器上会占据一行的行高，导致原来的行高更高，不同机型之间的文字间隔高度差异过大。

`UeEditor` (百度富文本编辑器)编辑后，得到如下内容：

```html
<p>文字文字文字文字文字</p>
<p><br /></p>
<p>文字文字文字文字文字</p>
```

在部分环境下，如`魅蓝手机`，`QQ浏览器`下文字之间间隔过高。

而在`iPhone 8plus`和电脑端模拟器等显示行高符合预期。

且`p`标签不存在`margin-top, margin-bottom, padding-top, padding-bottom`等样式。

在`Debug`的过程中，我观察到`br`标签的样式继承了`line-height`属性和`font-size`属性，觉得可能是因为`br`标签占据了一行行高导致的。于是把`br`标签的`font-size`设置为`0`，问题完美解决 ❤️。

### Stick 定位

```css
.stick {
  position: -webkit-sticky;
  position: sticky;
  top: 10;
}
```

兼容性:

- [Can I Use](https://caniuse.com/#search=sticky)

### 导入 NPM 安装的样式库。

```css
import "~normalize.css";
```

### 左右两列布局

要求：

- 两列宽度都未知
- 两列加起来占满整个容器
- 整体高度需适应最大内容高度
- 两列内放文本，文本不能侵入对方。

```scss
.wrap {
  position: relative;
  zoom: 1;

  &:after {
    content: '';
    display: block;
    clear: both;
    overflow: hidden;
  }
}

.aside {
  float: left;
}

.main {
  overflow: hidden;
}
```
