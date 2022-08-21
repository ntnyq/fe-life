# Tmux

终端复用软件。

## 介绍

主要有以下几个特性：

-   丝滑分屏
-   保护现场
-   会话共享

重要概念：

-   Session
-   Window
-   Pane

## 常用功能

```bash
$ tmux # 进入tmux会话

$ tmux ls # 列出当前所有会话 ls=list-session

$ tmux new -s session_name # 创建命名会话

$ tmux a # 默认进入第一个会话

$ tmux a -t session_name # 进入对应命名会话

$ tmux detach # 断开当前会话，会话仍会后台运行

$ tmux kill-session -t session_name # 关闭对应会话

$ tmux kill-server # 关闭服务器，所有会话都会关闭
```

## 常用快捷键

使用快捷键需要先进入 tmux 命令模式，默认进入命令模式快捷键为 `Ctrl + b`

### Session 快捷键

-   d 断开当前会话
-   s 查看当前所有会话 并切换，展开
-   r 强制重载当前会话
-   [ 进入复制模式，按 q 退出
-   ] 粘贴复制模式中复制的文本

### Window 快捷键

-   c 创建新 Window
-   & 关闭当前 Window 需确认
-   n 切换至下一个 Window
-   p 切换至上一个 Window
-   0~9 切换至指定 Window
-   f 快速定位至窗口，输入关键字匹配窗口名称
-   w 打开 Window 列表，且切换
-   , 重命名当前窗口
-   . 修改当前窗口编号

### Pane 快捷键

-   % 竖向分割 Window，创建 Pane
-   " 横向分割 Window, 创建 Pane
-   x 关闭当前 Pane
-   z 切换当前 Pane 最大化
-   方向键 移动光标切换面板
-   t 显示时钟

## 参考资料

-   [vim + tmux，天作之合](https://www.bilibili.com/video/av24203368)
-   [Tmux 使用手册](http://louiszhai.github.io/2017/09/30/tmux/)
