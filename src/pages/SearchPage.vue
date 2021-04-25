<template>
  <div v-if="state.posts">
    <div class="flex-row justify-content-around d-flex">
      <button class="btn btn-primary btn-sm" @click="changePage('newer')">
        Next
      </button>
      <button class="btn btn-primary btn-sm" @click="changePage('older')">
        Previous
      </button>
    </div>
    <Post v-for="post in state.posts" :key="post.id" :post="post" />
    <div class="flex-row justify-content-around d-flex">
      <button class="btn btn-primary btn-sm" @click="changePage('newer')">
        Next
      </button>
      <button class="btn btn-primary btn-sm" @click="changePage('older')">
        Previous
      </button>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, computed } from 'vue'
import { AppState } from '../AppState'
import { postsService } from '../services/PostsService'
import { logger } from '../utils/Logger'
import { useRoute } from 'vue-router'

export default {
  name: 'SearchResults',
  setup() {
    const route = useRoute()
    const state = reactive({
      posts: computed(() => AppState.searchPosts)
    })
    onMounted(async() => {
      try {
        postsService.searchPosts(route.params.input)
      } catch (error) {
        logger.error(error)
      }
    })
    return {
      state,
      route,
      async changePage(query) {
        try {
          await postsService.changePage(query)
        } catch (error) {
          logger.error(error)
        }
      }
    }
  }
}
</script>
