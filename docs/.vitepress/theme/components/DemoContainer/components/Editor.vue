<script lang="ts" setup>
defineProps<{
  highlightedHtml: string
  showHighlighted: boolean
}>()
</script>

<template>
  <ClientOnly v-if="showHighlighted">
    <div class="max-h-[300px] of-y-auto">
      <div
        v-html="highlightedHtml"
        class="language-vue !m-0 !rounded-0"
      />
    </div>
  </ClientOnly>
</template>
