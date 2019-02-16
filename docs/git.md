# Git

我们都在用Git。

> 你们啊，Naive。

## Git常用操作

### Git拉取远程仓库某个分支

``` bash
$ git clone repo_url -b branch_name
```

### 创建空白分支

有时候，我们会想要在一个仓库的多个分支来放不同的代码。这时候我们就需要创建一个空白的分支。这个分支**不继承仓库其余分支的任何提交**，**没有父节点**，就像新创建的一个仓库一样干净。

新建一个空白分支的操作过程如下：

```bash
$ git checkout --orphan branch_name # 在已有的分支下检出新分支并切换至新分支

$ git rm -rf . # 删除新分支下的所有内容
```

然后，我们就得到一个**独立且干净**的空白分支，该分支没有任何的提交历史。

### 合并多次Commit

在开发过程中，我们常会因为各种原因进行了许多临时的**commit**，而这多个**commit**连接起来才是完整的任务。为了避免将这类commit提交入版本库，我们需要将他们**合并**起来。

假设我们要将最近的5次提交合并为一次。可以通过下面的过程：

``` bash
$ git rebase -i HEAD~5 # 选取要进行操作的范围

# 进入vi编辑提交界面
# 将需要合并的commit前面的commit修改为squash
# 退出vi编辑提交界面 :wq(保存并退出) 自动进入编辑提交信息界面
# 根据需要修改 提交信息 :wq退出

$ git log # 查看是否多个commit已经合并
```

> 编辑完可以使用`git push -f`强制推送至远程版本库 并使其也更新
>
> 若操作中有失误，可以使用`git rebase --abort`进行**变基**撤销，会回到没有开始操作前的状态。

### 放弃Rebase

``` bash
$ git rebase --abort
```

### 存取操作出错

报错如下：

``` bash
remote: HTTP Basic: Access denied
fatal: Authentication failed for 'http://********
```

原因：**重置了密码导致git远程操作失败 **

解决方法：

``` bash
$ git config --system --unset credential.helper
```

之后进行Git操作，重新输入账号密码即可。

### Push需要输入密码

可以通过配置**ssh-key**的方式，

也可以通过以下代码来实现：

``` bash
$ git config --global credential.helper store
```

上面的操作会在**用户根目录**生成`.git-credentials`文件，里面保存着各个git服务器端的账号和密码。格式为`https://git_username:git_password@git_server_name`

### 修改上次提交信息

有时候我们在进行**commit**的时候，提交错了信息，这时候强迫症的我们当然受不了了，可以执行下面的命令进行修改：

``` bash
$ git commit --amend
```

执行命令后，会进入编辑界面，重新编辑保存即可。

### 给分支打标签

打标签通常用于建立一个项目的**里程碑**。表示这是一次与普通`commit`不同的一次提交。方便后续查找和更改。

> 表示项目版本的标签通常格式为`v1.1.1`，详细见[ 语义化版本 ](https://semver.org/lang/zh-CN/)

``` bash
# 查看当前分支已有的标签
$ git tag

# 给当前分支打标签 通常使用v表示版本
$ git tag tag_name

# 给当前标签备注信息
$ git tag -a tag_name -m "tag message"

# 补打标签 先前的commit
$ git tag -a tag_name commit_hash

# 删除标签
$ git tag -d tag_name

# 将标签推送至远程仓库
$ git push origin tag_name

$ git push origin -tags
```

### 回退到上个版本

> 当前工作区的内容会丢失。

使用下面的命令即可使仓库回到上个版本：

``` bash
$ git reset HEAD~1
```

### 回退加入缓冲区的文件

假设执行了 `git add .`，又发现添加错了文件，可以使用如下命令来进行回退：

``` bash
git reset HEAD
```

若只需要回退指令文件，则执行：

``` bash
git reset file_name
```











