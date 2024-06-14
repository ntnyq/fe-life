<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import { VPButton } from 'vitepress/theme'

const offlineReady = ref(false)

function showDialog() {
  offlineReady.value = true
}
function hideDialog() {
  offlineReady.value = false
}

onBeforeMount(async () => {
  const { registerSW } = await import('virtual:pwa-register')
  registerSW({
    immediate: true,
    onOfflineReady() {
      showDialog()
    },
    onRegistered() {
      console.info('Service Worker registered')
    },
    onRegisterError(e) {
      console.error('Service Worker registration error!', e)
    },
  })
})
</script>

<template>
  <div
    v-if="offlineReady"
    class="absolute bottom-8 right-8 z-100 flex flex-col justify-center border border-$vp-c-divider rounded-lg bg-white p-4 shadow-2xl"
    role="alertdialog"
    aria-labelledby="pwa-message"
  >
    <div
      id="pwa-message"
      class="text-md mb-3"
    >
      App ready to work offline
    </div>
    <VPButton
      @click="hideDialog"
      text="Close"
    />
  </div>
</template>
