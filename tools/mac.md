# macOS

## 关闭未显示的软件

部分软件不会在 Dock 和 Menubar 内显示。

打开控制台，输入以下命令，keyword 为软件名称关键词

```shell
ps aux | grep 'keyword'
```

获取到软件的 pid，再输入以下命令

```shell
kill -9 PID
```
