# webpack

## DevServer

::: warning
webpack-dev-server 指定配置文件需要使用 `--config` 参数。
:::

## 插件

### 内置插件

-   HotModuleReplacement
-   BannerPlugin

### 常用插件

-   [terser-webpack-plugin](https://github.com/webpack-contrib/terser-webpack-plugin)
-   [copy-webpack-plugin](https://github.com/webpack-contrib/copy-webpack-plugin)
-   [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin)
-   [webpack-manifest-plugin](https://github.com/danethurber/webpack-manifest-plugin)
-   [workbox-webpack-plugin](https://github.com/googlechrome/workbox)

## 配置踩坑

使用 loader 时的 **include** 和 **exclude** 参数，若使用绝对路径，则有平台差异。

比如我在 Vue 项目中使用 svg-sprite-loader 来处理图标时，会因为以下的写法，导致 Windows 下图标无法打包。

```js
// vue.config.js

module.exports = {
    chainWebpack: config => {
        config.module.rule('svg').exclude.add(`${__dirname}/src/icons`).end()

        config.module
            .rules('icons')
            .test(/\.svg$/)
            .include.add(`${__dirname}/src/icons`)
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]',
            })
            .end()
    },
}
```

输出详细配置后，发现 Windows 与 macOS 的配置不同。而 Windows 下的 **include** 路径创建正则的话无法包含图标目录。
