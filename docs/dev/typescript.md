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

## 语法错误处理

```ts
const length = 10

Array.from({ length }, (_, idx) => idx)
```

上述语法在 compilerOptions 设置了 **strict** 为 `true` 时会报错，原因是同时开启了 **strictBindCallApply**。

## 默认配置

```ts
interface TConfig {
  name: string
}

export const DEFAULT_CONFIG: Readonly<Partial<TConfig>> = Object.freeze({
  name: `ntnyq`,
})
```

## 扩展环境变量

比如使用 `dotenv`

```ts
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      __DEV__: boolean
    }
  }
}

export {}
```
