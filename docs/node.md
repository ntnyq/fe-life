# Node

## Node模块

### path模块

#### path.basename

`path.basename(path[, ext])`方法返回一个`path`的最后部分。

需要接收一个路径作为参数，同时还可接收文件扩展名参数。

例子：

``` js
// 返回: 'quux.html
path.basename('/foo/bar/baz/asdf/quux.html');'

// 返回: 'quux
path.basename('/foo/bar/baz/asdf/quux.html', '.html');'
```

