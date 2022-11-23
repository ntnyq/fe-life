# VueCli

> 当前 Vue-cli 的版本为`v3.0.3`。

[Vue-cli 官方文档](https://cli.vuejs.org/)

## 配置

[个人配置](https://github.com/ntnyq/vue-vant-template/blob/master/vue.config.js)，可参考。

## 输出项目配置

在项目根目录下执行命令:

```bash
$ vue inspect > webpack.config.js
```

即可将项目的 webpack 配置输出至文件内。

## 环境变量

通常开发环境和线上环境、测试环境等都不同，我们可能要根据环境的不同来使用一些不同的数据，比如线上请求的 API 地址。所以我们需要使用环境变量方便再不同的环境进行切换。

在`v2.x.x`中，在使用`Vue-cli`创建的项目根目录下有一个`config`文件夹，用于设置**环境变量**。再通过`webpack.DefinePlugin`注入到页面中。

在`v3.x.x`中，提供了使用 `.env.[mode_name]` **的环境变量文件** 的方式来实现。

默认情况下，执行 `vue-cli-service build` 会加载可能存在的 `.env`，`.env.production`，`.env.production.local` 文件。

我们可以通过修改 [模式](https://cli.vuejs.org/zh/guide/mode-and-env.html#%E6%A8%A1%E5%BC%8F) 来加载我们想要它加载的文件。模式名可以通过命令行来传入：

```bash
$ vue-cli-service build --mode ntnyq
```

执行上面的命令，我们告诉`vue-cli`要使用名为`ntnyq`的模式。这时它会尝试加载名为`.env`，`.env.ntnyq`，`.env.ntnyq.local`。

并且，**指定模式的环境变量配置会拥有更高的优先级**。

环境变量文件例：

> 用户自定义的环境变量必须以`VUE_APP_`为前缀，才会被注入到页面。同时页面自身有 2 给预设的变量`NODE_ENV`和`BASE_URL`。

```bash
# .env.ntnyq

VUE_APP_NAME = ntnyq
```

在项目代码中，我们可以通过以下的方式使用定义好的环境变量：

```js
console.log(process.env.VUE_APP_NAME) // ntnyq
```

## 全局 SCSS 变量, Mixin 等注入

全局注入后，就无需再需要使用这些变量，mixins 的时候去导入了。

### vue-cli v2.x

对于 2.x 版本，可通过安装 `sass-resources-loader` 来实现。

```bash
$ yarn add sass-resources-loader -D
```

修改 `build/utils.js` 中的 `exports.cssLoaders` 如下字段

```js
// https://vue-loader.vuejs.org/en/configurations/extract-css.html
return {
  scss: generateLoaders('sass').concat({
    loader: 'sass-resources-loader',
    options: {
      resources: path.resolve(__dirname, './../src/styles/core/style.scss'),
    },
  }),
}
```

### vue-cli v3.x

直接在做如下配置即可。

```js
// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/core/style.scss"`,
      },
    },
  },
}
```

若升级 sass-loader 为 v8.x, 则需将 `data` 修改为 `prependData`。

## 禁止数据响应式变化

```js
const ntnyq = Object.freeze({
  name: `ntnyq`,
  gender: `male`,
})
```

## 生产移除三方库版权声明信息注释

> 产品线上安全检测版权信息内存在邮箱，领导责令移除掉。

以下为 vue-cli 配置。可根据自身打包工具使用 `terser-webpack-plugin` 或 `uglify-webpack-plugin` 的配置。

```js
config.when(process.env.NODE_ENV === `production`, config => {
  config.optimization.minimizer(`terser`).tap(args => {
    args[0].terserOptions.compress.drop_debugger = true
    args[0].terserOptions.output = {
      comments: false,
    }
    return args
  })
  return config
})
```
