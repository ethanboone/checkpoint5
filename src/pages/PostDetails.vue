<template>
  <div class="row justify-content-center">
    <div class="col-10 col-md-8 card d-flex align-items-center flex-column my-4 py-2" v-if="state.post">
      <div class=" d-flex justify-content-start align-items-center">
        <img :src="state.post.creator.picture" height="50" width="50" class="rounded-circle" alt="user icon">
        <div class="p-3 d-flex flex-column text-left">
          <h5>{{ state.post.creator.name }}</h5>
          <p>{{ state.post.creator.createdAt }}</p>
        </div>
      </div>
      <p>{{ state.post.body }}</p>
      <div v-if="state.post.imgUrl" class="my-3">
        <img :src="state.post.imgUrl" alt="post image" class="h-100 w-100">
      </div>
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
