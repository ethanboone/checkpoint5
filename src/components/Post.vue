<template>
  <div class="col-10 col-md-10 d-flex justify-content-center card my-4 py-2">
    <p>{{ post.body }}</p>
    <div v-if="post.imgUrl">
      <img :src="post.imgUrl" alt="user">
    </div>
  </div>
</template>

<script>

export default {
  name: 'Post',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  }
}
</script>
