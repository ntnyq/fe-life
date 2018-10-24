# Bash命令行的使用技巧

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



