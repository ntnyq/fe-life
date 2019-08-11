# 基础

## 配置镜像源

配置镜像源解决某些常用依赖二进制包下载失败问题。

使用方法：

1. 在项目根目录下新建 `.npmrc` 或者 `.yarnrc` 文件
2. 写入对应的配置
3. 安装依赖

### .npmrc

```
registry=https://registry.npm.taobao.org
sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
phantomjs_cdnurl=http://cnpmjs.org/downloads
electron_mirror=https://npm.taobao.org/mirrors/electron/
sqlite3_binary_host_mirror=https://foxgis.oss-cn-shanghai.aliyuncs.com/
profiler_binary_host_mirror=https://npm.taobao.org/mirrors/node-inspector/
chromedriver_cdnurl=https://cdn.npm.taobao.org/dist/chromedriver
```

### .yarnrc

```
registry "https://registry.npm.taobao.org"
sass_binary_site "https://npm.taobao.org/mirrors/node-sass/"
phantomjs_cdnurl "http://cnpmjs.org/downloads"
electron_mirror "https://npm.taobao.org/mirrors/electron/"
sqlite3_binary_host_mirror "https://foxgis.oss-cn-shanghai.aliyuncs.com/"
profiler_binary_host_mirror "https://npm.taobao.org/mirrors/node-inspector/"
chromedriver_cdnurl "https://cdn.npm.taobao.org/dist/chromedriver"
```

### 参考文档

[关于 npm || yarn 安装依赖失败小记](https://juejin.im/post/5b515853e51d4519503b3367)


## nvm

使用 __nvm__ 来进行node版本的管理。

### 创建 .nvmrc

``` bash 
# list local available versions
$ nvm ls

# change current node 
$ nvm use v10.13.0

# create a .nvmrc
$ node -v > .nvmrc
```

### 参考资料

- [.nvmrc example?](https://github.com/nvm-sh/nvm/issues/995#issuecomment-349670827)
