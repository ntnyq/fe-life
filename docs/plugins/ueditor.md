# UEditor

> 当前版本 v1.4.3

## 限制图片尺寸

默认情况下，编辑器插入尺寸较宽的图片后，会出现横向滚动。

解决方法：

```scss
// themes/iframe.css

img {
    max-width: 100%;
}
```

## 编辑器尺寸自适应

默认情况下，当编辑器内容增加时，会自动增加编辑器的高度。

解决方法：

```js
const ue = UE.getEditor('#ueditor', {
    autoHeightEnabled: false,
})
```

[参考资料-UEditor 文档](http://fex.baidu.com/ueditor/#start-config)
