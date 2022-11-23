# Shell

使用 Shell 脚本协助开发。

## tree 命令

**`tree`** 命令用于列出某个目录下的所有文件或文件夹。

### 安装

macOS 默认无 Tree 命令。

```bash
$ brew install tree
```

### 常用参数

- -L 指定遍历层级
- -d 只列出文件夹
- -I 过滤指定的文件或文件夹

- -i 不输出缩进行

- J 输出为 JSON 格式
- X 输出为 XML 格式
- H 输出为 HTML 文档格式
- o 输出至对应文件名文件

### 使用示例

```bash
# 输出至粘贴板
$ tree . | pbcopy

# 输出至当前目录下的 DIRECTORY.md
$ tree -L 2 > DIRECTORY.md

# 遍历当前目录下层级为2的所有目录 忽略node_modules目录 将文件树输入至 directory.md
tree -L 2 -d  -I "node_modules" > directory.md
```

## find 命令

**`find`** 命令用于查找符合条件的所有文件，条件可以试命名或者是时间。

### 常用参数

- maxdepth 指定遍历层级
- regex 正则匹配文件名
- name 正则匹配文件名
- type 匹配类型 `f` 代表 文件，`d` 代表目录。
- mtime 日期范围 后面跟 数字 代表天数，有正负区别。
- mmin 分钟范围 同上
- ! -path 排除文件或者目录
- exec 对匹配的文件目录执行操作

### 使用示例

```bash
# 删除当前目录下所有名字格式为 nodePipe*.sock的文件
$ find . -maxdepth 1 -regex "nodePipe*.sock" -exec rm -rf {} \;

# 同上
$ find . -maxdepth 1 -name "nodePipe*.sock" -exec rm -rf {} \;

# 同上 xargs 用于把前面的输出作为后面的参数
$ find . -maxdepth 1 -name "nodePipe*.sock" | xargs rm -rf

# 显示当前目录下20天前的目录
$ find . -type d -mtime +20 -exec ls -l {} \;

$ find . -type d -mtime +20 ! -path ./node_modules  -exec ls -l {} \;
```

::: tip
另外可以使用 `-ok` 来替换 `-exec` 来执行操作，它多了提示的功能，每一步都需用户确认，这样删除文件更安全。
:::

### 参考文档

- [批量删除 Linux 的文件](https://www.cnblogs.com/shengulong/p/6742027.html)

## rm 命令

**`rm`** 命令用于删除目录或者文件。

### 常用参数

- r 递归删除
- f 强制删除

### 使用示例

```bash
# 删除当前目录下所有 *.txt 命名的文件，除了test.txt
$ rm `ls *.txt|egrep -v test.txt`
```

## scp 命令

**`scp`** (secure copy) 命令用于 Linux 系统之间的文件或目录的复制。

### 常用参数

- r 递归复制目录
- q 不显示传输进度条
- C 允许 ssh 开启压缩功能
- P 指定数据传输使用的端口号

### 参考资料

- [Linux scp 命令](https://www.runoob.com/linux/linux-comm-scp.html)
- [Mac 终端中上传文件到 Linux 服务器](https://www.jianshu.com/p/1385bfb45b26)

### 使用示例

::: warning
使用 scp 命令需保证用户对远程服务器具有相应的文件权限，否则无作用。
:::

```bash
# 复制服务器文件
$ scp -P 9527 root@0.0.0.0:/home/root/tmp/foo.zip /home/root/tmp/bar.zip

# 复制服务器目录
$ scp -r root@0.0.0.0:/home/root/tmp/ /home/root/tmp/

# 复制本地文件至服务器
$ scp -P 9527 /home/root/tmp/bar.zip 0.0.0.0:/home/root/tmp/foo.zip

# 复制本地目录至服务器
$ scp -r /home/root/tmp/ 0.0.0.0:/home/root/tmp/
```

若未指定用户名，则命令执行后需要输入用户名和密码，否则只输入密码即可。

## 实用技巧

> 个人开发中常用的小技巧。

### 配置免密登录服务器

> 测试于 Windows 服务器下的 Git bash 客户端。

```bash
# 本机执行命令
$ ssh-keygen -t rsa # 连续回车 在本地生成ssh公钥和私钥
$ ssh root@your_server_ip # 需要输入密码

# 主机执行命令
$ mkdir .ssh # 若已经存在 则无需创建
$ chmod 0700 .ssh # 必须给.ssh目录700权限

# 本机执行命令
$ scp ~/.ssh/id_rsa.pub root@your_server_ip:.ssh/id_rsa.pub # 需要输入密码

# 主机执行命令
$ touch /root/.ssh/authorized_keys # 若已存在，无需创建
$ chmod 600 ~/.ssh/authorized_keys # 必须修改加权限
$ cat /root/.ssh/id_rsa.pub >> /root/.ssh/authorized_keys # 需要使用2个>>来进行追加

# 配置已经完成
# 本机测试
$ ssh root@your_server_ip
```
