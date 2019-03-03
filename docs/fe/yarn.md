# Yarn

> 你们搞的这个包管理器，excited!

真的比**npm**好用，了解一下。

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
