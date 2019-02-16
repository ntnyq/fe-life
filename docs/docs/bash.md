# Bash

## 常用命令

返回上一级历史目录。

```bash
cd -
```

## 实用技巧

> 个人开发中常用的小技巧。

### 配置免密登录服务器

> 测试于Windows服务器下的Git bash客户端。

``` bash
# 本机执行命令
$ ssh-keygen -t rsa # 连续回车 在本地生成ssh公钥和私钥
$ ssh root@yuer_server_ip # 需要输入密码

# 主机执行命令
$ mkdir .ssh # 若已经存在 则无需创建
$ chmod 0700 .ssh # 必须给.ssh目录700权限

# 本机执行命令
$ scp ~/.ssh/id_rsa.pub root@yuer_server_ip:.ssh/id_rsa.pub # 需要输入密码

# 主机执行命令
$ touch /root/.ssh/authorized_keys # 若已存在，无需创建
$ chmod 600 ~/.ssh/authorized_keys # 必须修改加权限
$ cat /root/.ssh/id_rsa.pub >> /root/.ssh/authorized_keys # 需要使用2个>>来进行追加

# 配置已经完成
# 本机测试
$ ssh root@yuer_server_ip
```



## Tree命令

> 列出项目文件目录。

### Mac os安装 Tree 命令

```  bash
# 使用 homebrew 安装
$ brew install tree
```

### 命令语法

``` bash
tree <options>
```

### 常用参数

- -d 只列出文件夹
- -L 指定遍历层级
- -I 用于过滤不需要显示的文件或者文件夹

### 输出至文件

``` bash
# 输出至当前目录下的 DIRECTORY.md
$ tree -L 2 > DIRECTORY.md
```

### 举例

``` bash
# 遍历当前目录下层级为2的所有目录 忽略node_modules目录 将文件树输入至 directory.md 文件中。
tree -L 2 -d  -I "node_modules" > directory.md
```



