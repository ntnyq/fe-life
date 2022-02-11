# ESM

> ES module

## require.resolve

```js
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
```

## path resolve

```js
import { fileURLToPath, URL } from 'node:url'

const SRC_PATH = fileURLToPath(new URL(`./src`, import.meta.url))
```
