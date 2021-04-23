import { AppState } from '../AppState'
// import router from '../router'
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
}

export const postsService = new PostsService()
