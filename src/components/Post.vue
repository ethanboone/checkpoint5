<template>
  <div class="row flex-column align-content-center">
    <div class="col-10 col-md-6 d-flex card my-4 py-2">
      <div class="d-flex justify-content-start align-items-center">
        <img :src="post.creator.picture" height="50" width="50" class="rounded-circle" alt="user icon">
        <div class="p-3 d-flex flex-column text-left">
          <h5>{{ post.creator.name }}</h5>
          <p>{{ post.creator.createdAt }}</p>
        </div>
      </div>
      <router-link class="link" :to="{name: 'PostDetails', params: {id: post.id}}">
        <p>{{ post.body }}</p>
        <div v-if="post.imgUrl">
          <img :src="post.imgUrl" alt="post image" class="h-100 w-100">
        </div>
      </router-link>
      <button class="btn" @click="like(post.id)">
        {{ post.likes.length }} Likes
      </button>
    </div>
  </div>
</template>

<script>
import { postsService } from '../services/PostsService'
import { logger } from '../utils/Logger'

export default {
  name: 'Post',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      async like(id) {
        try {
          await postsService.like(id)
        } catch (error) {
          logger.error(error)
        }
      }
    }
  }
}
</script>

<style scoped>
.link {
    text-decoration: none!important;
    color:black;
}
</style>
