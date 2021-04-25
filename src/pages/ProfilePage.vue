<template>
  <div v-if="state.profile && state.posts">
    <div class="row justify-content-center">
      <div class="col-10 col-md-6 about text-center d-flex flex-column align-items-center">
        <h1>{{ state.profile.name }}</h1>
        <img class="rounded" :src="state.profile.picture" alt="" />
        <p>{{ state.profile.email }}</p>
      </div>
    </div>

    <Post v-for="post in state.posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import { computed, reactive, onMounted } from 'vue'
import { AppState } from '../AppState'
import { profilesService } from '../services/ProfilesService'
import { useRoute } from 'vue-router'
import { logger } from '../utils/Logger'

export default {
  name: 'ProfilePage',
  setup() {
    const route = useRoute()
    const state = reactive({
      profile: computed(() => AppState.activeProfile),
      posts: computed(() => AppState.profilePosts)
    })
    onMounted(async() => {
      try {
        await profilesService.getProfile(route.params.id)
        await profilesService.getProfilePosts(route.params.id)
      } catch (error) {
        logger.error(error)
      }
    })
    return {
      state
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
