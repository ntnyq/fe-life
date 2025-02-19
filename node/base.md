# 基础

## 配置镜像源

配置镜像源解决某些常用依赖二进制包下载失败问题。

使用方法：

1. 在项目根目录下新建 `.npmrc` 或者 `.yarnrc` 文件
2. 写入对应的配置
3. 安装依赖

### .yarnrc

```
registry "https://registry.npmmirror.com"
sass_binary_site "https://npmmirror.com/mirrors/node-sass"
phantomjs_cdnurl "https://npmmirror.com/mirrors/phantomjs"
chromedriver_cdnurl "http://npmmirror.com/mirrors/chromedriver"
```

### 参考文档

[关于 npm || yarn 安装依赖失败小记](https://juejin.im/post/5b515853e51d4519503b3367)

## nvm

使用 **nvm** 来进行 node 版本的管理。

### 创建 .nvmrc

```bash
# list local available versions
$ nvm ls

# change current node
$ nvm use v10.13.0

# create a .nvmrc
$ node -v > .nvmrc
```

### 参考资料

- [.nvmrc example](https://github.com/nvm-sh/nvm/issues/995#issuecomment-349670827)

## Lint

自动化构建时，做代码风格检测 [__lint__] 时不要对代码进行 **fix**。否则检测的是 fix 后的代码，自然不会有报错。
可以用如下的形式：

```json
{
  "scripts": {
    "lint": "eslint --ext .js .",
    "lint:fix": "eslint --fix --ext .js ."
  }
}
```
