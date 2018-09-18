# Vue

> 暂时先专注Vue作为JS框架。

## Vue

## VueRouter

## Vuex

## Vue-CLI

> 当前Vue-cli的版本为`v3.0.3`。

[Vue-cli官方文档](https://cli.vuejs.org/)

### Vue-cli3.0中使用环境变量

因为通常开发环境和线上环境、测试环境等都不同，我们可能要根据环境的不同来使用一些不同的数据，比如线上请求的API地址。所以我们需要使用环境变量方便再不同的环境进行切换。

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







