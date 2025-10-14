# Git

常用 Git 命令。

## Blame

```shell
# 显示文件每行上次由谁修改
git blame file_path_name
```

## Clone

```shell
# 拉取指定分支
git clone repo_url -b branch_name
```

## Commit

```shell
# 修改上次提交信息, 进入编辑消息模式
git commit --amend
```

### Clean

```shell
# 删除本地所有修改
git clean -f
```

## Checkout

```shell
# 创建空白分支 无提交，无父节点
git checkout --orphan branch_name
git rm -rf .
```

## Push

```shell
# 强制推送
git push -f
git push --force
```

## Rebase

```shell
# 放弃
git rebase --abort
```

## Remote

```shell
# 清理本地的远程无效分支
git remote prune origin
```

## Stash

```shell
# 暂存工作区
git stash

# 以工作区内容新建分支
git stash -branch branch_name

# 应用工作区
git stash pop
```

## Show

```shell
# 显示某次修改文件变更内容
git show commit_hash
```

## 合并多次 Commit

在开发过程中，我们常会因为各种原因进行了许多临时的**commit**，而这多个**commit**连接起来才是完整的任务。为了避免将这类 commit 提交入版本库，我们需要将他们**合并**起来。

假设我们要将最近的 5 次提交合并为一次。可以通过下面的过程：

```shell
git rebase -i HEAD~5 # 选取要进行操作的范围

# 进入vi编辑提交界面
# 将需要合并的commit前面的commit修改为squash
# 退出vi编辑提交界面 :wq(保存并退出) 自动进入编辑提交信息界面
# 根据需要修改 提交信息 :wq退出

git log # 查看是否多个commit已经合并
```

> 编辑完可以使用`git push -f`强制推送至远程版本库 并使其也更新
>
> 若操作中有失误，可以使用`git rebase --abort`进行**变基**撤销，会回到没有开始操作前的状态。

## Push 需要输入密码

可以通过配置 **ssh-key** 的方式，

也可以通过以下代码来实现：

```shell
git config --global credential.helper store
```

上面的操作会在**用户根目录**生成 `.git-credentials` 文件，里面保存着各个 git 服务器端的账号和密码。格式为`https://git_username:git_password@git_server_name`

## 给分支打标签

打标签通常用于建立一个项目的 **里程碑**。表示这是一次与普通 `commit` 不同的一次提交。方便后续查找和更改。

> 表示项目版本的标签通常格式为`v1.1.1`，详细见[ 语义化版本 ](https://semver.org/lang/zh-CN/)

```shell
# 查看当前分支已有的标签
git tag

# 给当前分支打标签 通常使用v表示版本
git tag tag_name

# 给当前标签备注信息
git tag -a tag_name -m "tag message"

# 补打标签 先前的commit
git tag -a tag_name commit_hash

# 删除标签
git tag -d tag_name

# 将标签推送至远程仓库
git push origin tag_name

git push origin -tags
```

## 删除远程 tag

```shell
# 删除本地 tag
git tag -d v1.0.0

# 推送至远程
git push origin :refs/tags/v1.0.10

# 重新打 tag
git tag v1.0.0 <commit_hash>
```

## 回退到上个版本

> 当前工作区的内容会丢失。

使用下面的命令即可使仓库回到上个版本：

```shell
git reset HEAD~1
```

## 回退 head 指向

```shell
git reset --hard commit_hash
```

## 回退加入缓冲区的文件

假设执行了 `git add .`，又发现添加错了文件，可以使用如下命令来进行回退：

```shell
git reset HEAD
```

若只需要回退指令文件，则执行：

```shell
git reset file_name
```

## 版本回滚

可以先通过 `git log` 查看日志，决定要回归到的版本，并复制它的 id 值。

```shell
git reset --hard commit_id
```

## 删除上次 commit

`reset` 的本质不是删除了 `commit`，而是重新设置了 `head` 和它指向的 branch.

```shell
git reset --hard HEAD^
```

## 快速 Rebase

以下脚本需要在 VIM 命令模式下运行

```shell
:2,$s/^pick/f/
```

- `:2,$` 表示范围地址，从第二行开始到文件最后一行。
- `/s/old/new/` 表示替换命令，把行首的 `pick` 替换为 `f`。

## FAQ

常见问题。

### 存取出错

错误信息:

```shell
remote: HTTP Basic: Access denied
fatal: Authentication failed for 'https://foo.bar.com'
```

错误原因:

1. 重置了密码
2. 切换了用户

解决方法:

```shell
git config --system --unset credential.helper
```

之后进行 Git 操作，重新输入密码即可正常。

### 贡献开源项目

1. **fork** 想要贡献的项目仓库。
2. 克隆你 **fork** 后的仓库到本地。
3. 进入目录，新建分支 `git checkout -b feat/add-feature`
4. 修改后 **commit** 添加提交信息
5. 追踪远程仓库 **upstream**
6. push 自己的修改到自己的远程仓库
7. 发起 **pull request**

::: tip
因为 **父仓库** 的修改不会反应到子仓库，如果你的进度落后于父仓库，那么即使发起 **pull request** 仍然会存在文件冲突。

而父仓库与子仓库的不同之处在于 **origin** 不同，我们可以添加一个 **upstream** (上游) 来同步父仓库的更新。

默认情况下，当你克隆一个仓库的同时 Git 已经将 **origin** 和你的自仓库关联在了一起。可以通过命令 `git remote -vv` 查看远程仓库。

然后你可以通过 `git remote add upstream father_repo_url` 来添加远程仓库上游。再通过以下命令同步上游更新。
:::

```shell
git checkout master # 切换至默认的 master分支

git pull --rebase upstream master:master # 使用rebase模式拉取upstream/master上的更新

git checkout pr_branch # 切换至你的分支

git rebase master # 使用rebase模式合并master分支的修改
```

或

```shell
git checkout master

git fetch upstream master

git checkout pr_branch

git rebase upstream/master
```

总的来说，就是将本地的 **master** 分支做为一个同步远程仓库变化的分支，所有的本地改动都不会在 `master` 分支上进行。

而是将上游的 master 分支合并至本地，保证本地的 master 分支为最新版本。

## 参考资料

[如何使用 GitHub Flow 给开源项目贡献代码](https://juejin.im/post/5b4611f4f265da0f970d1a0c)

### Git 语言中文切换至英文

通过配置 shell 环境变量，可以将 Git 语言中文切换至英文。

例如 `.zshrc`:

```shell
export LANG="en_US.UTF-8"
```
