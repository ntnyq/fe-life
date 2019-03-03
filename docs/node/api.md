# Node

## 常用方法

### 将文本按换行分割为数组

> 先使用`readFile`方法读取内容`text`。

```
text.split(/\r?\n/)
```

## 常用API

### process.cwd()

获取执行命令时候的位置，一般为项目的根路径。

## Node模块

### path模块

#### path.dirname

`path.dirname(path)`方法返回一个`path`的目录名，最后不带`\`。

例子：

``` js
// 返回: '/foo/bar/baz/asdf'
path.dirname('/foo/bar/baz/asdf/quux');
```

#### path.basename

`path.basename(path[, ext])`方法返回一个`path`的最后部分。

需要接收一个路径作为参数，同时还可接收文件扩展名参数。

例子：

``` js
// 返回: 'quux.html
path.basename('/foo/bar/baz/asdf/quux.html');

// 返回: 'quux'
path.basename('/foo/bar/baz/asdf/quux.html', '.html');
```

