<template>
  <div class="row">
    <div class="col-10 col-md-8" v-if="state.post">
      <div class="my-2 d-flex justify-content-start align-items-center">
        <img :src="state.post.creator.picture" height="50" width="50" class="rounded-circle" alt="user icon">
        <div class="p-3 d-flex flex-column text-left">
          <h5>{{ state.post.creator.name }}</h5>
          <p>{{ state.post.creator.createdAt }}</p>
        </div>
      </div>
      <p>{{ state.post.body }}</p>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
import { postsService } from '../services/PostsService'
import { logger } from '../utils/Logger'

export default {
  name: 'PostDetails',
  setup() {
    const route = useRoute()
    const state = reactive({
      post: computed(() => AppState.activePost)
    })
    onMounted(async() => {
      try {
        await postsService.getActive(route.params.id)
      } catch (error) {
        logger.error(error)
      }
    })
    return {
      state,
      route
    }
  }
}
</script>
