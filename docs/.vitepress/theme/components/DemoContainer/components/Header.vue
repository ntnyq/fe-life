<script lang="ts" setup>
import { useClipboard } from '@vueuse/core'

const props = defineProps<{
  sfcTsCode: string
  sfcJsCode: string
  codesandbox?: boolean
  metadata: Record<string, any>
}>()

const isUsingTs = defineModel<boolean>('isUsingTs', { default: false })
const showHighlighted = defineModel<boolean>('showHighlighted', { default: true })

const githubBlobURL = 'https://github.com/ntnyq/fe-life/blob/main/'

const { copy } = useClipboard({ legacy: true })

function onOpenInGitHub() {
  window.open(githubBlobURL + props.metadata.relativePath, '_blank')
}

function onOpenInCodeSandbox() {}

function onCopyCode() {
  copy(isUsingTs.value ? props.sfcTsCode : props.sfcJsCode)
}

function onShowHighlightCode() {
  showHighlighted.value = !showHighlighted.value
}
</script>

<template>
  <div class="flex items-center justify-between px-4 py-2 text-white">
    <div class="flex items-center gap-2">
      <div
        @click="isUsingTs = true"
        v-if="sfcTsCode.length"
        :class="{
          'outline outline-white': isUsingTs,
        }"
        class="i-vscode-icons:file-type-typescript-official cursor-pointer text-xl"
      />
      <div
        @click="isUsingTs = false"
        v-if="sfcJsCode.length"
        :class="{
          'outline outline-white': !isUsingTs,
        }"
        class="i-vscode-icons:file-type-js-official cursor-pointer text-xl"
      />
    </div>

    <div class="flex items-center gap-2">
      <button
        @click="onOpenInCodeSandbox"
        v-tooltip="`Open In CodeSandbox`"
        v-if="codesandbox"
        type="button"
        role="button"
        class="cursor-pointer rounded-md bg-zinc-50/20 p-2"
      >
        <div class="i-ph:codesandbox-logo" />
      </button>
      <button
        @click="onOpenInGitHub"
        v-tooltip="`Open In GitHub`"
        type="button"
        role="button"
        class="cursor-pointer rounded-md bg-zinc-50/20 p-2"
      >
        <div class="i-ri:github-fill" />
      </button>
      <button
        @click="onCopyCode"
        v-tooltip="`Copy code`"
        type="button"
        role="button"
        class="cursor-pointer rounded-md bg-zinc-50/20 p-2"
      >
        <div class="i-radix-icons:clipboard-copy" />
      </button>
      <button
        @click="onShowHighlightCode"
        v-tooltip="{
          content: showHighlighted ? 'Hide code' : 'Show code',
          triggers: ['hover'],
        }"
        type="button"
        role="button"
        class="cursor-pointer rounded-md bg-zinc-50/20 p-2"
      >
        <div
          :class="showHighlighted ? 'i-ri:collapse-diagonal-fill' : 'i-ri:expand-diagonal-fill'"
        />
      </button>
    </div>
  </div>
</template>
