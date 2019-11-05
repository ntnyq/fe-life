# docker

## 常用命令

```bash
# 查看当前所有运行中的容器
$ docker ps -a

# 查看当前所有运行中容器ID
$ docker ps -a -q

# 停止所有容器
$ docker stop $(docker ps -a -q)

# 删除所有容器
$ docker rm $(docker ps -a -q)
```
