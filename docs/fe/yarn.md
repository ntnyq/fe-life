# Yarn

> 你们搞的这个包管理器啊，excited!

## 全局依赖查看

```bash
$ yarn global list
```

## 依赖升级

::: warning

推荐使用 `yarn upgradeInteractive --latest` 来进行项目依赖版本升级工作。

但需注意在 Git 检出新分支后再进行依赖升级工作，通过测试后再合入 master 分支。

:::

```bash
# 查看可版本升级依赖
$ yarn outdated

# 在 package.json 允许的范围内升级版本
$ yarn upgrade pkg_name

# 升级依赖至最新版本 无视 package.json 配置
$ yarn upgrade pkg_name --latest

# 以命令行交互的形式升级项目依赖版本
$ yarn upgradeInteractive
```

## 安装本地包

可用于本地开发依赖调试。

```bash
$ yarn add /path_to_your_package
```

## 全局配置

通过全局配置，修改一些默认的配置和做个性化修改。

### 全局配置查看

```bash
# 查看所有配置
$ yarn config list

# 查看某项配置
$ yarn config get registry
```

### 全局配置修改

做了以下配置后，会修改 `yarn init` 命名创建项目的对应默认值。

```bash
# 修改默认 author-name
$ yarn config set init-author-name ntnyq

# 修改默认 author-email
$ yarn config set init-author-email ntnyq13@gmail.com

# 修改默认 author-url
$ yarn config set init-author-url https://ntnyq.com

# 修改默认 version
$ yarn config set init-version 0.0.1
```

生成的 `package.json` 文件格式如下：

```json
{
  "version": "0.0.1",
  "author": "ntnyq <ntnyq13@gmail.com> (https://ntnyq.com)"
}
```

### 参考资料

- [yarn init](https://yarnpkg.com/lang/zh-hans/docs/cli/init/)
- [yarn config](https://yarnpkg.com/zh-Hans/docs/cli/config)

## 坑点记录

### 下载 node-sass 包出错

首先说明，这个问题不仅仅存在于使用`Yarn`的时候，使用`NPM`下载也会出现同样的问题。

> Yarn: 这个锅，我不背。

在失败提示的时候，会给出`NPM`的解决方法：

```bash
# 强制重新打包
$ npm rebuild node-sass --force
```

而我们使用`Yarn`，为了把这个包的信息写入`yarn.lock`中，自然不好直接使用`NPM`，可以通过如下命令来解决：

> 此方法针对 NPM 同样适用，修改命令名为 npm 即可。

```bash
$ yarn config set sass-binary-site http://npm.taobao.org/mirrors/node-sass
```
