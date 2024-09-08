# 浏览器

## Safari

### ForeignObject 渲染出错

使用 Antv/x6 和自定义 vue 节点时遇到此问题，修改为原生 SVG 节点解决。

Safari 不支持渲染以下样式:

- position (_`position:fixed` is supported but will introduce an overflow issue_)
- -webkit-transform-style
- -webkit-backface-visibility
- transform
- transition
- opacity
- calc function

#### Links

- [SVG foreignObject not working properly on Safari](https://stackoverflow.com/questions/51313873/svg-foreignobject-not-working-properly-on-safari)
- [Layer content inside HTML in SVG foreignObject renders in the wrong place](https://bugs.webkit.org/show_bug.cgi?id=23113)
