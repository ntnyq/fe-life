# Nginx

> 简单学习 **nginx** 的使用。

## https 替换证书与升级 TLS 协议

我的个人网站使用了阿里云的 ECS 服务器，使用了 Symantec DV SSL 的免费证书来提供 HTTPS 服务。最近得到提醒说一年期的证书要过期了，所以就想着重新申请一个证书替换一下，没想到又踩坑了。

替换后才发现原来可以直接对原证书进行 **续费** 操作的。😪

### 基本操作

申请签发证书 → 下载新证书 nginx 版文件 → 上传文件至服务器原证书保存位置 → 修改 nginx 配置 → 重启 nginx。

当我以 `nginx -s reload` 重启服务时报如下错误

```bash
[alert] could not open error log file: open() "/var/log/nginx/error.log" failed (13: Permission denied)
```

解决方案：

```bash
$ sudo nginx -t # Test if nginx config works well

$ sudo nginx -s reload
```

再次报错：

```
nginx: [error] invalid PID number "" in "/var/run/nginx.pid"
```

解决方案：

```bash
$ lsof -i:80 # list all port being used

$ sudo fuser -k 80/tcp # kill service

$ nginx -c /etc/nginx/nginx.conf
```

### 参考资料

- [nginx on Ubuntu: Permission denied](https://stackoverflow.com/questions/18714902/nginx-on-ubuntu-permission-denied?answertab=votes#tab-top)

- [ginx: [error] invalid PID number "" in "/var/run/nginx.pid"](https://www.jianshu.com/p/376038b76221)

## 隐藏版本号

```

```
