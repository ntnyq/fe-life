# Vite

## 全局 SCSS 变量

```ts
// vite.config.{js|ts}
import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "path_to_your/variables" as *;',
      },
    },
  },
})
```

## 使用 Web worker

worker 文件:

```ts
// @/workers/prettier.worker.ts
import prettier from 'prettier/standalone'
import type { Options, Plugin } from 'prettier'

function format(source: string, options: Options = {}) {
  return prettier.format(source, options)
}

self.addEventListener('message', async event => {
  const { type, payload = {} } = event.data || {}
  if (type === 'format') {
    const { source, options = {} } = payload
    const result = await format(source, options)
    self.postMessage({ type: 'format', payload: { result } })
  }
})
```

使用 worker

```vue
<script lang="ts" setup>
import PrettierWorker from '@/workers/prettier.worker?worker'

const prettierWorker = new PrettierWorker()

const code = ref(`console.log('hello world')`)

// Receive result
worker.addEventListener('message', event => {
  const { type, payload = {} } = evt.data || {}
  if (type === 'format') {
    const { result } = payload
    console.log({ result })
  }
})

// Use worker
const handleFormat = () => {
  worker.postMessage({
    type: 'format',
    payload: {
      source: code.value,
      options: {},
    },
  })
}
</script>

<template>
  <main>
    <button
      @click="handleFormat"
      type="button"
    >
      Format
    </button>
  </main>
</template>
```
