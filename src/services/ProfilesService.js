import { AppState } from '../AppState'
import { api } from './AxiosService'

class ProfilesService {
  async getAll() {
    const res = await api.get('api/profiles')
    AppState.profiles = res.data.profiles
  }

  async getProfile(id) {
    const res = await api.get(`api/profiles/${id}`)
    AppState.activeProfile = res.data
  }

  async getProfilePosts(id) {
    const res = await api.get(`api/profiles/${id}/posts`)
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
