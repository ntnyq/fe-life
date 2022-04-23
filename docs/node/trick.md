# 小技巧

## Require.resolve

通过使用 `require.resolve` API 可以判断是否存在此依赖。

若参数是内置的依赖，则返回依赖的名字。

```js
console.log(require.resolve('http')) // => http
```

若参数是下载的依赖，则返回 `package.json` 里 **main** 字段文件的**绝对路径**。

```js
console.log(require.resolve('vue')) // => Your_path/cwd_path/module_path/main_file_path
```

若参数表示的依赖不存在，则报错提示

```bash
internal/modules/cjs/loader.js:611
    throw err;
    ^

Error: Cannot find module 'not-exist'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:609:15)
    at Function.resolve (internal/modules/cjs/helpers.js:28:19)
    at Object.<anonymous> (/Users/ntnyq/Desktop/temp/resolve/app.js:1:83)
    at Module._compile (internal/modules/cjs/loader.js:734:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:745:10)
    at Module.load (internal/modules/cjs/loader.js:626:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:566:12)
    at Function.Module._load (internal/modules/cjs/loader.js:558:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:797:12)
    at executeUserCode (internal/bootstrap/node.js:526:15)
```
