# Webpack

# 文件导入

导入文件时候以 `~` 为前缀，会从 `node_modules` 文件夹中的对应模块导入。

## DevServer

::: warning

**webpack-dev-server** 指定配置文件需要使用 `--config` 参数。

:::

## 常用插件

### 内置插件

* hot-module-replacement
* bannerPlugin

### 官方插件

* [@babel/plugin-syntax-dynamic-import](https://babeljs.io/docs/en/next/babel-plugin-syntax-dynamic-import.html) 动态按需加载模块
