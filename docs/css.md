# CSS

与其说是CSS的坑，不如说是**兼容**的坑，或者厂商们的坑。👀

> 你问我兼容不兼容，我说兼容。

## 通用坑点

### 伪元素尺寸大于元素本身引起的可点击位置错误

项目需求，有一个设计效果带光影的按钮，切图后发现设计师提供的`图层`带的光影比较大，已经超过了按钮实际在设计图上占据的空间。于是采用伪元素将光影作为背景加到了按钮的背景下面。没想到这就踩坑了。

问题：点击光影也就是伪元素的占据的区域，也能够触发按钮的点击事件。

解决方案：在伪元素上面加`pointer-events: none;`属性，来阻止伪元素响应点击事件。

兼容性：[Can I Use ](https://caniuse.com/#search=pointer-events) IE11+ 移动端基本无兼容问题。

### fixed定位的参照物问题

在父元素设置了`transform`属性的情况下，`position: fixed;`定位的元素不再以浏览器视口为参照，即使`transform`并未对元素的位置产生影响。如:

``` css
.foo {
  tranform: translate(0);
}

.bar {
  transform: scale(0);
}
```
[参考资料](https://segmentfault.com/a/1190000017939779)

[示例Demo](https://ntnyq.github.io/demos/html/fixed-test.html)

## PC端坑点


## 移动端坑点

☠️☠️☠️

### br标签行高问题

#### 描述
`<br />`标签在部分机器上会占据一行的行高，导致原来的行高更高，不同机型之间的文字间隔高度差异过大。
#### 场景
`UeEditor`(百度富文本编辑器)编辑后，得到如下内容：

``` html
<p>文字文字文字文字文字</p>
<p><br></p>
<p>文字文字文字文字文字</p>
```
在部分环境下，如`魅蓝手机`，`QQ浏览器`下文字之间间隔过高。

而在`iPhone 8plus`和电脑端模拟器等显示行高符合预期。

且`p`标签不存在`margin-top, margin-bottom, padding-top, padding-bottom`等样式。
#### 解决
在`Debug`的过程中，我观察到`br`标签的样式继承了`line-height`属性和`font-size`属性，觉得可能是因为`br`标签占据了一行行高导致的。于是把`br`标签的`font-size`设置为`0`，问题完美解决❤️。

