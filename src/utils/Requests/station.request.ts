import { api } from '../../services/api'
import { ActiveStationInterface } from '../../interfaces/station'

class StationRequests {
  public async getStations(isActive?: boolean) {
    try {
      const response = isActive
        ? await api.get('stations/isActive=true')
        : await api.get('stations/')

      return response.data as ActiveStationInterface[]
    } catch (error) {
      console.log(error)
      alert('Não foi possível obter estações.')
    }
  }
}

export default new StationRequests()
