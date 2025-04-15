<script lang="ts" setup>
import { computed, ref } from 'vue'
import Editor from './components/Editor.vue'
import Header from './components/Header.vue'
import Preview from './components/Preview.vue'

const props = withDefaults(
  defineProps<{
    typescript: string
    // if using ts, typescript will transform the to js
    javascript: string
    javascriptHtml: string
    typescriptHtml: string
    title?: string
    expanded?: boolean
    codesandbox?: boolean
    metadata: Record<string, any>
  }>(),
  {
    // TODO: implements this
    codesandbox: false,
    expanded: true,
  },
)

const isUsingTs = ref(!!props.typescript)
const showHighlighted = ref(props.expanded)

const typescript = computed(() => decodeURIComponent(props.typescript))
const javascript = computed(() => decodeURIComponent(props.javascript))

const highlightedHtml = computed(() =>
  decodeURIComponent(
    isUsingTs.value ? props.typescriptHtml : props.javascriptHtml,
  ),
)
</script>

<template>
  <div class="demo-container mt-24px of-hidden rounded-lg bg-#2e3138">
    <Header
      v-model:is-using-ts="isUsingTs"
      v-model:show-highlighted="showHighlighted"
      :codesandbox="codesandbox"
      :typescript="typescript"
      :javascript="javascript"
      :metadata="metadata"
    />

    <div
      class="flex flex-col border border-t-0 border-$vp-c-gutter border-solid bg-$vp-c-bg"
    >
      <Preview class="min-h-300px">
        <slot />
      </Preview>
    </div>

    <Editor
      :highlighted-html="highlightedHtml"
      :show-highlighted="showHighlighted"
    />
  </div>
</template>
