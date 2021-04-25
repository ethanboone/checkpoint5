import { AppState } from '../AppState'
// import router from '../router'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class ProfilesService {
  async getAll() {
    const res = await api.get('api/profiles')
    logger.log(res.data)
    AppState.profiles = res.data.profiles
  }

  async getProfile(id) {
    const res = await api.get(`api/profiles/${id}`)
    AppState.activeProfile = res.data
  }

  async getProfilePosts(id) {
    const res = await api.get(`api/profiles/${id}/posts`)
    logger.log(res.data)
    AppState.profilePosts = res.data.posts
  }

  async searchProfiles(query) {
    const res = await api.get(`api/profiles?query=${query}`)
    AppState.searchprofiles = res.data
  }

  async accountPosts(id) {
    const res = await api.get(`api/profiles/${id}/posts`)
    AppState.yourPosts = res.data
  }

  async account() {
    const res = await api.get('/account')
    AppState.yourProfile = res.data
  }
}

export const profilesService = new ProfilesService()
