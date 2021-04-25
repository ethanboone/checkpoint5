import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},

  account: {},

  posts: [],

  profiles: [],

  activeProfile: null,

  profilePosts: null,

  activePost: null,

  searchPosts: [],

  searchProfiles: [],

  searchPagePosts: [],

  ad1: null,

  ad2: null,

  yourPosts: [],

  yourProfile: null
})
