<template>
  <div class="col-8 card">
    <form @submit.prevent="create">
      <div class="mb-3">
        <label for="body" class="form-label">Post Body</label>
        <input type="body" class="form-control" id="body" v-model="state.new.body" required>
      </div>
      <div class="mb-3">
        <label for="img" class="form-label">Image Url</label>
        <input type="text" class="form-control" id="img-text" v-model="state.new.imgUrl">
      </div>
      <button type="submit" class="btn btn-primary">
        Create
      </button>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { postsService } from '../services/PostsService'
import { logger } from '../utils/Logger'

export default {
  name: 'NewPost',
  setup() {
    const state = reactive({
      new: {}
    })
    return {
      state,
      async create() {
        try {
          await postsService.createPost(state.new)
        } catch (error) {
          logger.error(error)
        }
      }
    }
  }
}
</script>
