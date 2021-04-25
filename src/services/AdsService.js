import { AppState } from '../AppState'
// import router from '../router'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class AdsService {
  async getFirst() {
    const res = await api.get('api/ads')
    logger.log(res.data[0])
    AppState.ad1 = res.data[0].banner
  }

  async getSecond() {
    const res = await api.get('api/ads')
    AppState.ad2 = res.data[1].banner
  }
}

export const adsService = new AdsService()
