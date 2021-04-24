import { AppState } from '../AppState'
// import router from '../router'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class AdsService {
  async getAll() {
    const res = await api.get('api/ads')
    logger.log(res.data)
    AppState.ads = res.data.ads
  }
}

export const adsService = new AdsService()
