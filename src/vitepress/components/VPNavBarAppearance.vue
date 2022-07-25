<script lang="ts" setup>
import { VTSwitchAppearance } from '../../core'
import { useConfig } from '../composables/config'

const { config } = useConfig()
console.log('config')
console.log(config)
console.log(useConfig())
</script>

<template>
  <div v-if="config.appearance" class="VPNavBarAppearance">
    <VTSwitchAppearance />
  </div>
</template>

<style scoped>
.VPNavBarAppearance {
  display: none;
}

@media (min-width: 1280px) {
  .VPNavBarAppearance {
    display: block;
  }
}
</style>
