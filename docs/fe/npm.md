# NPM

> 选择包管理器，而不是每次都去找源码。

## npx 命令

> 我在玩儿`gatsby`的时候，下载了[gatsby-starter-personal-blog](https://github.com/greglobinski/gatsby-starter-personal-blog)，查看它的源码的时候发现了这条命令。

**npx**命令是 npm 为了提升开发者**使用包内提供的命令行**工具的体验 在`v5.2.0`引入的一条命令。[Github-npm](https://github.com/npm/npm/releases/tag/v5.2.0)

使用**npx**执行命令就无需再为要执行的命令指定`node_modules`，同时也不需要在`package.json`的`scripts`字段去添加该命令。

同时，**npx**还允许我们临时安装某个依赖来执行命令，命令结束后该依赖便会被删除。

例子:

```bash
$ npx create-react-app my-app
```

### 参考资料

[npx 命令介绍](https://segmentfault.com/a/1190000012974903)

## weixin-js-sdk 报错

项目需要做微信分享，使用了 **weixin-js-sdk**，构建后页面报错 `Cannot read property 'title' of undefined`，查询资料后发现是 **weixin-js-sdk** 的源码问题。

解决办法：修改源码，将 **weixin-js-sdk** 中第一个 `this` 改为 `window`。

[参考资料-jsweixin 引入时报错 Cannot read property 'title' of undefined](https://segmentfault.com/q/1010000009724851)

## npm 发表带@前缀的依赖

1. 首先需要创建一个组织，可以选择创建免费组织。(免费组织发表的包只能是公共访问的)

2. 创建一个 npm 包，带 `package.json` 文件，包的名字格式为 `@组织名/包名`，注意需要设置其中的 `publishConfig` 字段，如下：

   ```json
   {
     "publishConfig": {
       "access": "public"
     }
   }
   ```

3. `npm publish`发布这个依赖。

## 安装依赖后只有 .staging 文件夹

此坑出现的情况下，当执行 `npm install` 后，整个 `node_modules` 目录下只有 `.staging` 这一个文件夹。无其他依赖，所以项目无法正常构建。

可能原因:

- 网络情况不好
- 电脑内存不足

可以试用 `Yarn` 或者 淘宝镜像。

### 参考文档

- [你的 node 依赖们炸了没？](https://github.com/NoName4Me/yo-FE/issues/17)
- [".staging" folder inside of node_modules](https://github.com/npm/npm/issues/12540)
