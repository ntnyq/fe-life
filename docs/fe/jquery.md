# jQuery

## 常用插件

-   [ScrollPath](https://github.com/JoelBesada/scrollpath) 页面滚动效果插件

## 静态方法

直接挂在 `$` 上的方法。

-   $.camelCase()
-   $.Deffered()
-   $.ajax()
-   $.isPlainObject()
-   $.isEmptyObject()
-   $.trim()
-   $.extend()

## 踩坑记录

### 无法设置 data-\*\*\*=属性

无法通过 `.data('foo', 'bar')` 方法在已经存在的 DOM 上添加 `data` 属性。

::: tip 官方文档
Using the data() method to update data does not affect attributes in the DOM. To set a data-\* attribute value, use attr.
:::

如果有这种需求，需要使用 `.attr('foo', 'bar')` 方法。

`data` 方法只能获取或者修改某个 `data` 属性。

参考资料：

-   [jQueryDocs-data](https://api.jquery.com/data/)
