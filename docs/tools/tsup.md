# tsup

## 暂不支持 tsconfig 配置 `composite: true`

报错信息如下

```bash
Error: error occured in dts build
    at Worker.<anonymous> (/Users/ntnyq/Desktop/github/ntnyq/eslint-plugin/node_modules/.pnpm/tsup@6.7.0_typescript@5.0.2/node_modules/tsup/dist/index.js:2281:26)
    at Worker.emit (node:events:513:28)
    at MessagePort.<anonymous> (node:internal/worker:236:53)
    at MessagePort.[nodejs.internal.kHybridDispatch] (node:internal/event_target:736:20)
    at MessagePort.exports.emitMessage (node:internal/per_context/messageport:23:28)
DTS Build error
RollupError: Failed to compile. Check the logs above.
    at error (/Users/ntnyq/Desktop/github/ntnyq/eslint-plugin/node_modules/.pnpm/rollup@3.20.2/node_modules/rollup/dist/shared/rollup.js:274:30)
    at Object.error (/Users/ntnyq/Desktop/github/ntnyq/eslint-plugin/node_modules/.pnpm/rollup@3.20.2/node_modules/rollup/dist/shared/rollup.js:24694:20)
    at Object.error (/Users/ntnyq/Desktop/github/ntnyq/eslint-plugin/node_modules/.pnpm/rollup@3.20.2/node_modules/rollup/dist/shared/rollup.js:23888:42)
    at generateDtsFromTs (/Users/ntnyq/Desktop/github/ntnyq/eslint-plugin/node_modules/.pnpm/tsup@6.7.0_typescript@5.0.2/node_modules/tsup/dist/rollup.js:7498:22)
    at /Users/ntnyq/Desktop/github/ntnyq/eslint-plugin/node_modules/.pnpm/tsup@6.7.0_typescript@5.0.2/node_modules/tsup/dist/rollup.js:7505:59
    at _nullishCoalesce (/Users/ntnyq/Desktop/github/ntnyq/eslint-plugin/node_modules/.pnpm/tsup@6.7.0_typescript@5.0.2/node_modules/tsup/dist/rollup.js:1:198)
    at Object.transform (/Users/ntnyq/Desktop/github/ntnyq/eslint-plugin/node_modules/.pnpm/tsup@6.7.0_typescript@5.0.2/node_modules/tsup/dist/rollup.js:7505:18)
    at /Users/ntnyq/Desktop/github/ntnyq/eslint-plugin/node_modules/.pnpm/rollup@3.20.2/node_modules/rollup/dist/shared/rollup.js:24893:40
```

GitHub Issues:

- [dts build order issue](https://github.com/egoist/tsup/issues/688)
- [Support for TypeScript project references](https://github.com/egoist/tsup/issues/647)

解决方案:

使用 TypeScript 的 `tsc` 命令来做类型生成。
