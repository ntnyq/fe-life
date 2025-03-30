<script lang="ts" setup>
import { computed, ref } from 'vue'
import Editor from './components/Editor.vue'
import Header from './components/Header.vue'
import Preview from './components/Preview.vue'

const props = withDefaults(
  defineProps<{
    tsCode: string
    // if using ts, tsCode will transform the to js
    jsCode: string
    jsHtml: string
    tsHtml: string
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

const isUsingTs = ref(!!props.tsCode)
const showHighlighted = ref(props.expanded)

const tsCode = computed(() => decodeURIComponent(props.tsCode))
const jsCode = computed(() => decodeURIComponent(props.jsCode))

const highlightedHtml = computed(() =>
  decodeURIComponent(isUsingTs.value ? props.tsHtml : props.jsHtml),
)
</script>

<template>
  <div class="demo-container mt-24px of-hidden rounded-lg bg-#2e3138">
    <Header
      v-model:is-using-ts="isUsingTs"
      v-model:show-highlighted="showHighlighted"
      :codesandbox="codesandbox"
      :ts-code="tsCode"
      :js-code="jsCode"
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
