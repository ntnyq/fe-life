# IE 浏览器

> 踩坑记录。

## Trailing Comma(结尾逗号)导致 IE 浏览器或浏览器兼容模式报错

经过在 Win10 系统测试，将兼容内核调至 IE7 后，代码中的结尾逗号会导致代码报错。

Prettier 禁止 Trailing Comma 配置:

```js
module.exports = {
  trailingComma: 'none',
}
```

ESLint 禁止 Trailing Comma 配置:

```js
module.exports = {
  rules: {
    'comma-dangle': ['error', 'never'],
  },
}
```

**参考文档**:

- [Prettier - Trailing Commas](https://prettier.io/docs/en/options.html#trailing-commas)
- [ESLint - comma-dangle](https://eslint.org/docs/latest/rules/comma-dangle)
