# ESM

> Pure ES module

## Create ESM package

1. Config below in `package.json`:

```json
{
  "type": "module"
}
```

2. use `import foobar from 'foobar'` instead of `require`.

3. NodeJS require `>=12.20 | >=14.14 | >=16.0`. Recommended `{ "engines": { "node": ">=14.16" } }`.

4. Replace `{ "main": "index.js" }` with `{ "exports": "./index.js" }`.

5. Use full relative path for imports **with file ext**.

6. Recommended use `node:` protocol for import.

7. For TypeScript project, set `"module": "node16"` and `"moduleResolution": "node16"`.

## require.resolve

```js
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

const vue = require.resolve(`vue`)
```

## \_\_dirname

```js
import path from 'node:path'
import { fileURLToPath, URL } from 'node:url'

const __dirname = fileURLToPath(new URL(`.`, import.meta.url))

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Both esm and cjs
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const _dirname =
  typeof __dirname !== 'undefined' ? __dirname : dirname(fileURLToPath(import.meta.url))
```

## \_\_filename

## Refs

- [Pure ESM package](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)
- [unjs - mlly](https://github.com/unjs/mlly)
