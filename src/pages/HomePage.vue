<template>
  <div class="home d-flex flex-column my-2">
    <div class="row d-flex flex-row justify-content-center ">
      <Ad1 />
      <div class="col-12 my-2">
        <button class="btn btn-success" @click="openForm" v-if="state.user">
          New Post
        </button>
      </div>
    </div>
    <div class="row justify-content-center" v-if="state.form">
      <NewPost />
    </div>
    <div class="flex-row justify-content-around d-flex">
      <button class="btn btn-primary btn-sm my-2" @click="changePage('newer')">
        Next
      </button>
      <button class="btn btn-primary btn-sm my-2" @click="changePage('older')">
        Previous
      </button>
    </div>
    <Post v-for="post in state.posts" :key="post.id" :post="post" />
    <div class="flex-row justify-content-around d-flex">
      <button class="btn btn-primary btn-sm my-2" @click="changePage('newer')">
        Next
      </button>
      <button class="btn btn-primary btn-sm my-2" @click="changePage('older')">
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

export default {
  name: 'Home',
  setup() {
    const state = reactive({
      posts: computed(() => AppState.posts),
      form: false,
      user: computed(() => AppState.user.isAuthenticated)
    })
    onMounted(async() => {
      try {
        await postsService.getAll()
      } catch (error) {
        logger.error(error)
      }
    })
    return {
      state,
      async changePage(query) {
        try {
          await postsService.changePage(query)
        } catch (error) {
          logger.error(error)
        }
      },
      openForm() {
        state.form = !state.form
      }
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
