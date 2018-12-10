# NPM



## npx命令

> 我在玩儿`gatsby`的时候，下载了[gatsby-starter-personal-blog](https://github.com/greglobinski/gatsby-starter-personal-blog)，查看它的源码的时候发现了这条命令。

**npx**命令是npm为了提升开发者**使用包内提供的命令行**工具的体验 在`v5.2.0`引入的一条命令。[Github-npm](https://github.com/npm/npm/releases/tag/v5.2.0)

使用**npx**执行命令就无需再为要执行的命令指定`node_modules`，同时也不需要在`package.json`的`scripts`字段去添加该命令。

同时，**npx**还允许我们临时安装某个依赖来执行命令，命令结束后该依赖便会被删除。

例子:

``` bash
$ npx create-react-app my-app
```

### 参考资料

[npx命令介绍](https://segmentfault.com/a/1190000012974903)



## weixin-js-sdk报错

项目需要做微信分享，使用了 **weixin-js-sdk**，构建后页面报错 `Cannot read property 'title' of undefined`，查询资料后发现是 **weixin-js-sdk** 的源码问题。

解决办法：修改源码，将 **weixin-js-sdk** 中第一个 `this` 改为 `window`。

[参考资料-jsweixin引入时报错Cannot read property 'title' of undefined](https://segmentfault.com/q/1010000009724851)

