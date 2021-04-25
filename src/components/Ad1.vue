<template>
  <div>
    <img :src="state.ad1" alt="advertisement">
  </div>
</template>

<script>
import { onMounted, reactive, computed } from 'vue'
import { logger } from '../utils/Logger'
import { adsService } from '../services/AdsService'
import { AppState } from '../AppState'

export default {
  setup() {
    const state = reactive({
      ad1: computed(() => AppState.ad1)
    })
    onMounted(async() => {
      try {
        await adsService.getFirst()
      } catch (error) {
        logger.error(error)
      }
    })
    return { state }
  }
}
</script>
