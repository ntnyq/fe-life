# Zsh

[Oh My Zsh](https://github.com/robbyrussell/oh-my-zsh)

## 查看 alias

Zsh 中，用户自定义的 alias 会覆盖掉 libs, themes, plugins 提供的 alias。

而 `alias` 命令可以帮助我们快速查看当前所有可用的 aliases。

```bash
$ alias
```

## 查看高频使用命令

查看使用频率前 20 的命令

```bash
$ zsh_stats
```

## take 命令

```bash
$ mkdir -p foo/bar
$ cd foo/bar

# with zsh
$ take foo/bar
```

## 查看启动速度

```bash
# 整个启动过程
$ \time zsh -i -c exit

# 无脚本加载启动过程
$ \time zsh --no-rcs -i -c exit
```
