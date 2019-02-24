# 代码编辑器

> 配置是第一生产力。

## Vetur

> **Vetur** 是 Vuejs 官方出品的 Vscode extension，我们可以用它很方便地来格式化自己的代码，检验代码错误等。

Vetur 中可以使用 `js-beautify-html` 来格式化 Vue 代码中的 Template 部分，个人配置如下：

``` json
"vetur.format.defaultFormatter.html": "js-beautify-html",
"vetur.format.defaultFormatter.js": "vscode-typescript",
"vetur.format.defaultFormatter.scss": "prettier",
"vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
        "wrap_attributes": "force-expand-multiline"
    }
}
```

`vetur.format.defaultFormatterOptions`中的`js-beautify-html`插件的`wrap_attributes`配置的可选项分别为：

1. `auto` 不进行格式化
2. `force` 首个属性与开始标签共一行，最后的属性与开始标签结束的`>`符号共一行，其他属性单独一行。
3. `force-aligned` 所有属性强制对齐，若组件名较长太不美观，不建议使用。
4. `force-expand-multiline` 所有属性单独占据一行且对齐。开始标签和开始标签结束的`>`符号同样单独占据一行。