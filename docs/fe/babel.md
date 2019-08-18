# Babel

::: tip 提示
关于学习 Babel，这里推荐一篇文章[一口（很长的）气了解 Babel](https://zhuanlan.zhihu.com/p/43249121)
:::

## Babel 编译中文转 Unicode

在 js 中编写了模板字符串，经过 Babel 转译后，发现将中文字符转为了 Unicode 字符，影响阅读。

解决方案，在 Babel 的配置中添加如下配置：

```json
{
  "generatorOpts": {
    "jsescOption": {
      "minimal": true
    }
  }
}
```

参考资料: [经过 babel 转换后的代码，中文乱码](https://github.com/yunxifd/babel-intl/issues/1)
