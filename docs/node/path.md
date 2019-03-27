# Path模块

## dirname 从文件 url 获取目录路径

`path.dirname(path)`方法返回一个`path`的目录名，最后不带`\`。

例子：

``` js
// 返回: '/foo/bar/baz/asdf'
path.dirname('/foo/bar/baz/asdf/quux');
```

## basename 从文件 url 获取文件名

`path.basename(path[, ext])`方法返回一个`path`的最后部分。

需要接收一个路径作为参数，同时还可接收文件扩展名参数。

例子：

``` js
// 返回: 'quux.html
path.basename('/foo/bar/baz/asdf/quux.html');

// 返回: 'quux'
path.basename('/foo/bar/baz/asdf/quux.html', '.html');
```
