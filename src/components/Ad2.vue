<template>
  <div>
    <img :src="state.ad2" alt="advertisement">
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
      ad2: computed(() => AppState.ad2)
    })
    onMounted(async() => {
      try {
        await adsService.getSecond()
      } catch (error) {
        logger.error(error)
      }
    })
    return { state }
  }
}
</script>
