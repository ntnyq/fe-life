# Path 模块

## dirname 从文件 url 获取目录路径

`path.dirname(path)` 方法返回一个 `path` 的目录名，最后不带 `\`。

例子：

```js
// 返回: '/foo/bar/baz/asdf'
path.dirname('/foo/bar/baz/asdf/not-found')
```

## basename 从文件 url 获取文件名

`path.basename(path[, ext])` 方法返回一个 `path` 的最后部分。

需要接收一个路径作为参数，同时还可接收文件扩展名参数。

例子：

```js
// 返回: 'not-found.html
path.basename('/foo/bar/baz/asdf/not-found.html')

// 返回: 'not-found'
path.basename('/foo/bar/baz/asdf/not-found.html', '.html')
```

## 路径正则兼容 Windows

例如: `/[\\/]node_modules[\\/]_?vant(.*)/`
