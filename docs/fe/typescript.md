# TypeScript

## 报错处理

常见的一些报错问题处理。

### regeneratorRuntime is not defined

在使用 `Parcel + TypeScript` 项目中使用 `asyncFunction` 时出现。

解决方案：

编辑 `tsconfig.json` 文件，添加如下配置：

```json
{
  "compilerOptions": {
    "target": "es5"
  }
}
```

参考资料：[regeneratorRuntime is not defined in TypeScript run in web](https://stackoverflow.com/questions/51262244/regeneratorruntime-is-not-defined-in-typescript-run-in-web)
