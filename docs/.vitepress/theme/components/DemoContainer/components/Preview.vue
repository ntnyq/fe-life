<script lang="ts" setup></script>

<template>
  <div class="flex items-center justify-center p-4">
    <ClientOnly>
      <slot />
    </ClientOnly>
  </div>
</template>
