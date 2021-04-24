import { AppState } from '../AppState'
import router from '../router'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class PostsService {
  async getAll() {
    const res = await api.get('api/posts')
    logger.log(res.data)
    AppState.posts = res.data.posts
  }

  async getActive(id) {
    const res = await api.get(`api/posts/${id}`)
    logger.log(res.data)
    AppState.activePost = res.data
  }

  async getPagePosts(query) {
    const res = await api.get(`api/posts/page=${query}`)
    AppState.searchPagePosts = res.data
  }

  async searchPosts(query) {
    const res = await api.get(`api/posts?query=${query}`)
    AppState.searchPosts = res.data
  }

  async createPost(post) {
    const res = await api.post('api/posts', post)
    router.push({ name: 'PostDetails', params: { id: res.data.id } })
  }

  async updatePost(post) {
    await api.put(`api/posts/${post.id}`, post)
    this.getAll()
  }

  async deletePost(id) {
    //   const res = await api.delete('api/posts/' + id)
    await api.delete('api/posts/' + id)
    this.getAll()
  }
}

export const postsService = new PostsService()
