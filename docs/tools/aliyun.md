# ECS

## 查看硬盘使用情况

``` bash
$ df -h
```

__df__ 是 disk free 的缩写。

`-h` 代表 __human-readable__ 表示人类可读的格式。

## 服务器位置设置错误

报错信息

``` 
can't set the locale; make sure $LC_* and $LANG are correct
```

解决方案：

```
sudo locale-gen "en_US.UTF-8"
sudo dpkg-reconfigure locales   //如果跳转到设置页面，可以选择默认的即可。
sudo vi /etc/default/locale 改为如下

LANG=en_US.UTF-8
LC_ALL=en_US.UTF-8
```

参考资料：

- [manpath: can't set the locale; make sure $LC_* and $LANG are correct](https://www.jianshu.com/p/7f8f41e7bca0)
