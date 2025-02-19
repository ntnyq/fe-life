# polyfill

## import.meta.url

```ts
// eslint-disable-next-line camelcase
export const import_meta_url =
  typeof document === 'undefined'
    ? new (require('url'.replace('', '')).URL)(`file:${__filename}`).href
    : (document.currentScript && document.currentScript.src) ||
      new URL('main.js', document.baseURI).href
```

- [Polyfill import.meta.url when output format is cjs](https://github.com/evanw/esbuild/issues/1633)
