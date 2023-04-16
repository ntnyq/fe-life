# pnpm

## shell-emulator 替代 cross-env

pnpm 内置配置功能，启用后会使用一个 JS 实现的类 bash 环境执行脚本。

```json
{
  "scripts": {
    "dev": "NODE_ENV=development node scripts/dev.js"
  }
}
```

开启方法:

```yaml
# .npmrc
shell-emulator=true
```

- [pnpm - hell-emulator](https://pnpm.io/cli/run#shell-emulator)

## Patch a package

```bash
pnpm patch package_name

pnpm patch-commit temp_path
```
