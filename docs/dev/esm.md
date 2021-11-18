# ES Module

## Polyfill require

```js
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

// use require as commonjs require
```
