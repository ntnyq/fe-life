<script lang="ts" setup>
import { computed, ref } from 'vue'
import Editor from './components/Editor.vue'
import Header from './components/Header.vue'
import Preview from './components/Preview.vue'

const props = withDefaults(
  defineProps<{
    sfcTsCode: string
    // if using ts, sfcJsCode will transform the to js
    sfcJsCode: string
    sfcTsHtml: string
    sfcJsHtml: string
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

const isUsingTs = ref(!!props.sfcTsCode)
const showHighlighted = ref(props.expanded)

const sfcTsCode = computed(() => decodeURIComponent(props.sfcTsCode))
const sfcJsCode = computed(() => decodeURIComponent(props.sfcJsCode))

const highlightedHtml = computed(() =>
  decodeURIComponent(isUsingTs.value ? props.sfcTsHtml : props.sfcJsHtml),
)
</script>

<template>
  <div class="demo-container mt-[24px] of-hidden rounded-lg bg-[#2e3138]">
    <Header
      v-model:is-using-ts="isUsingTs"
      v-model:show-highlighted="showHighlighted"
      :codesandbox="codesandbox"
      :sfc-ts-code="sfcTsCode"
      :sfc-js-code="sfcJsCode"
      :metadata="metadata"
    />

    <div class="flex flex-col bg-$vp-c-bg">
      <Preview class="min-h-[300px]">
        <slot />
      </Preview>
    </div>

    <Editor
      :highlighted-html="highlightedHtml"
      :show-highlighted="showHighlighted"
    />
  </div>
</template>
