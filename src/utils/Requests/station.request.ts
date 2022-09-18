import { api } from '../../services/api'
import { ActiveStationInterface } from '../../interfaces/station'

export class StationRequests {
  public async getStations(isActive?: boolean) {
    try {
      let response = null

      if (isActive) {
        response = await api.get('stations/isActive=true')
      } else {
        response = await api.get('stations/')
      }

      const stations: ActiveStationInterface[] = response.data
      return stations
    } catch (error) {
      console.log(error)
      alert('Não foi possível obter estações.')
    }
  }
}
