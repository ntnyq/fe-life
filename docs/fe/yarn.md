# Yarn

> 你们搞的这个包管理器，excited!

真的比**npm**好用，了解一下。


## 全局依赖查看

``` bash
$ yarn global list
```


## 升级依赖

::: warning

推荐使用 `yarn upgradeInteractive --latest` 来进行项目依赖版本升级工作。

但需注意在 Git 检出新分支后再进行依赖升级工作，通过测试后再合入 master 分支。

:::

``` bash
# 查看可版本升级依赖
$ yarn outdated

# 在 package.json 允许的范围内升级版本
$ yarn upgrade pkg_name

# 升级依赖至最新版本 无视 package.json 配置
$ yarn upgrade pkg_name --latest

# 以命令行交互的形式升级项目依赖版本
$ yarn upgradeInteractive
```

## 坑点记录

### 下载node-sass包出错

首先说明，这个问题不仅仅存在于使用`Yarn`的时候，使用`NPM`下载也会出现同样的问题。

> Yarn: 这个锅，我不背。

在失败提示的时候，会给出`NPM`的解决方法：

``` bash
$ npm rebuild node-sass --force # 强制重新打包
```

而我们使用`Yarn`，为了把这个包的信息写入`yarn.lock`中，自然不好直接使用`NPM`，可以通过如下命令来解决：

> 此方法针对NPM同样适用，修改命令名为npm即可。

``` bash
$ yarn config set sass-binary-site http://npm.taobao.org/mirrors/node-sass
```
