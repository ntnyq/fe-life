# Vue Cli

> 当前Vue-cli的版本为`v3.0.3`。

[Vue-cli官方文档](https://cli.vuejs.org/)

## 配置

> 个人用的`vue.config.js`配置，可参考

``` js
// vue.config.js
const webpack = require('webpack')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const imageminMozjpeg = require('imagemin-mozjpeg')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  publicPath: './', // 资源等使用相对路径

  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/scss/core/style";' // 全局注入SCSS变量，Mixins等
      }
    }
  },

  devServer: {
    open: true // 开发环境自动打开浏览器
    port: 9527 // 自定义监听开发服务器监听端口
  },

  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        new ImageminPlugin({
          pngquant: { quality: '65-80' },
          plugins: [
            imageminMozjpeg({
              quality: 70,
              progressive: true
            })
          ]
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/) // no i18n
        // new webpack.ContextReplacementPugin(/moment[\/\\]locales$/, /zh-cn|en-use/) with i18n
      )
      if (!process.env.VUE_APP_TRAVIS) {
        config.plugins.push(new BundleAnalyzerPlugin())
      }
    } else {
      // doSomething
    }
  },

  chainWebpack: config => {
    config.resolve.extensions.store.add('.scss')

    // svg loader
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()
    svgRule.exclude.add(/node_modules/)
    svgRule.include.add(`${__dirname}/src/icons`)
    svgRule
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ symbolId: 'icon-[name]' })

    // images
    const imagesRule = config.module.rule('images')

    imagesRule.exclude.add(`${__dirname}/src/icons`)
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
  }
};
```

## 环境变量

通常开发环境和线上环境、测试环境等都不同，我们可能要根据环境的不同来使用一些不同的数据，比如线上请求的API地址。所以我们需要使用环境变量方便再不同的环境进行切换。

在`v2.x.x`中，在使用`Vue-cli`创建的项目根目录下有一个`config`文件夹，用于设置**环境变量**。再通过`webpack.DefinePlugin`注入到页面中。

在`v3.x.x`中，提供了使用`.env.[mode_name]`**的环境变量文件**的方式来实现。

默认情况下，执行`vue-cli-service build`会加载可能存在的`.env`，`.env.production`，`.env.production.local`文件。

我们可以通过修改[模式](https://cli.vuejs.org/zh/guide/mode-and-env.html#%E6%A8%A1%E5%BC%8F)来加载我们想要它加载的文件。模式名可以通过命令行来传入：

``` bash
$ vue-cli-service build --mode ntnyq
```

执行上面的命令，我们告诉`vue-cli`要使用名为`ntnyq`的模式。这时它会尝试加载名为`.env`，`.env.ntnyq`，`.env.ntnyq.local`。

并且，**指定模式的环境变量配置会拥有更高的优先级**。

环境变量文件例：

> 用户自定义的环境变量必须以`VUE_APP_`为前缀，才会被注入到页面。同时页面自身有2给预设的变量`NODE_ENV`和`BASE_URL`。

``` js
// .env.ntnyq
VUE_APP_NAME=ntnyq
```

在项目代码中，我们可以通过以下的方式使用定义好的环境变量：

``` js
console.log(process.env.VUE_APP_NAME); // ntnyq
```

## Vue-Cli v2.x全局样式

需要`sass-resources-loader`

``` bash
$ yarn add sasss-resources-loader -D
```

修改`build/utils.js`中的`exports.cssLoaders`如下字段

``` js
  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass').concat({
      loader: 'sass-resources-loader',
      options: {
        resources: path.resolve(__dirname, './../src/scss/core/syle.scss')
      }
    }),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
```
