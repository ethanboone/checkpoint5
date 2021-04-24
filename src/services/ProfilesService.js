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
    logger.log(res.data)
    AppState.activeProfile = res.data
  }

  async searchProfiles(query) {
    const res = await api.get(`api/profiles?query=${query}`)
    AppState.searchprofiles = res.data
  }
}

export const profilesService = new ProfilesService()
