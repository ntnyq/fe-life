# ESLint

## ESLint 默认不处理 dotfiles

解决方案:

```bash
# .eslintignore

!/.*
node_modules/.*
```

参考资料:

- [ESLint does not handle folders started from dot (e.g. /.tests)](https://github.com/eslint/eslint/issues/8429)
- [`!.*` in `eslintIgnore` lints dotfiles in node_modules](https://github.com/eslint/eslint/issues/9942#issuecomment-379347370)
