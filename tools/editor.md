# VS Code

> 关于 VS Code 编辑器

## Vetur

**[Vetur](https://github.com/vuejs/vetur)** 是 VueJS 官方针对 VS Code 编辑器出品的扩展。

Vetur 中可以使用 `js-beautify-html` 来格式化 Vue 代码中的 Template 部分，个人配置如下：

```json
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

`vetur.format.defaultFormatterOptions` 中的 `js-beautify-html` 插件的 `wrap_attributes` 配置的可选项分别为：

1. `auto` 不进行格式化
2. `force` 首个属性与开始标签共一行，最后的属性与开始标签结束的 `>` 符号共一行，其他属性单独一行。
3. `force-aligned` 所有属性强制对齐，若组件名较长太不美观，不建议使用。
4. `force-expand-multiline` 所有属性单独占据一行且对齐。开始标签和开始标签结束的 `>` 符号同样单独占据一行。

## Stylus 格式化

安装插件 **[Manta's Stylus Supremacy](https://github.com/ThisIsManta/vscode-stylus-supremacy)** 插件，并做如下配置:

```json
{
  "stylusSupremacy.insertColons": false,
  "stylusSupremacy.insertSemicolons": false,
  "stylusSupremacy.insertBraces": false,
  "stylusSupremacy.insertNewLineAroundImports": true,
  "stylusSupremacy.insertNewLineAroundBlocks": true
}
```

## Prettier Now

Prettier Now 有 `spaceBeforeFunctionParen` 配置，可以给函数参数的括号前加空格。

```json
{
  "prettier.semi": false,
  "prettier.useTabs": false,
  "prettier.tabWidth": 2,
  "prettier.singleQuote": true,
  "prettier.arrowParens": false,
  "prettier.trailingComma": "es5",
  "prettier.bracesSpacing": false,
  "prettier.spaceBeforeFunctionParen": true,
  "prettier.jsxSingleQuote": true,
  "prettier.jsxBracketSameLine": true,
  "prettier.alignObjectProperties": false,
  "prettier.arrayExpand": false
}
```

## 开发 Snippets 扩展

`${TM_FILENAME_BASE}` 代表当前文件名，不带文件后缀

强烈推荐 [snippet generator](https://snippet-generator.app/)，帮助生成代码片段。

[参考资料-Snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets)

## 出错解决

### 集成 Terminal，nvm 兼容错误

[VsCodeDocs-IntegratedTerminal](https://github.com/Microsoft/vscode-docs/blob/master/docs/editor/integrated-terminal.md#why-is-nvm-complaining-about-a-prefix-option-when-the-integrated-terminal-is-launched)

## 本地 TypeScript SDK

React 17 后 `tsconfig.json` 中需要配置 `jsx: 'react-jsx'`。此为 **typescript@4.1+** 特性。

```shell
$ yarn global add typescript
```

```json
{
  "typescript.tsdk": "~/.config/yarn/global/node_modules/typescript/lib"
}
```
