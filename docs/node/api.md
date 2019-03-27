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
