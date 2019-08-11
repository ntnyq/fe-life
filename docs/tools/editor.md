# Editor

::: tip Exicted
:rocket::rocket::rocket::rocket::rocket::rocket:
:::

## Vscode

> 关于 VsCode 编辑器

### Vetur

__[Vetur](https://github.com/vuejs/vetur)__ 是 VueJS 官方出品针对 VsCode 编辑器推出的扩展。

Vetur 中可以使用 `js-beautify-html` 来格式化 Vue 代码中的 Template 部分，个人配置如下：

``` json
{
  "vetur.completion.autoImport": true,
  "vetur.completion.tagCasing": "kebab",
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "vetur.format.defaultFormatter.scss": "prettier",
  "vetur.format.defaultFormatter.stylus": "stylus-supremacy",
  "vetur.experimental.templateInterpolationService": false,
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_attributes": "force-expand-multiline"
    }
  }
}
```

`vetur.format.defaultFormatterOptions`中的`js-beautify-html`插件的`wrap_attributes`配置的可选项分别为：

1. `auto` 不进行格式化
2. `force` 首个属性与开始标签共一行，最后的属性与开始标签结束的 `>` 符号共一行，其他属性单独一行。
3. `force-aligned` 所有属性强制对齐，若组件名较长太不美观，不建议使用。
4. `force-expand-multiline` 所有属性单独占据一行且对齐。开始标签和开始标签结束的 `>` 符号同样单独占据一行。

### 格式化stylus

安装插件 __[Manta's Stylus Supremacy](https://github.com/ThisIsManta/vscode-stylus-supremacy)__，并做如下配置:

``` json
{
  "stylusSupremacy.insertColons": false,
  "stylusSupremacy.insertSemicolons": false,
  "stylusSupremacy.insertBraces": false,
  "stylusSupremacy.insertNewLineAroundImports": true,
  "stylusSupremacy.insertNewLineAroundBlocks": true
}
```

### 开发 Snippets 扩展

`${TM_FILENAME_BASE}` 代表当前文件名，不带文件后缀

强烈推荐 [snippet generator](https://snippet-generator.app/)，帮助生成代码片段。

## 出错解决

### VsCode 集成 Terminal 打开时，nvm 报兼容错误。

[解决方案](https://github.com/Microsoft/vscode-docs/blob/master/docs/editor/integrated-terminal.md#why-is-nvm-complaining-about-a-prefix-option-when-the-integrated-terminal-is-launched)。

