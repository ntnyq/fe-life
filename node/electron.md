# Electron

## Electron 编译不成功

原因：国内需要设置镜像。

添加 `.npmrc` 文件，内容为

```
electron_mirror="https://npm.taobao.org/mirrors/electron/"
```
