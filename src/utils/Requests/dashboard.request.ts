import { api } from '../../services/api'
import { DashboardInterface } from '../../interfaces/dashboard'
import { ActiveStationInterface } from '../../interfaces/station'

export class DashboardRequests {
  public async getDashboardData(stationID: string, parameter?: number) {
    try {
      const payload: any = {
        station: stationID,
        parameter: null
      }

      if (parameter) {
        payload.parameter = parameter
      }

      const response = await api.get(
        `dashboard?stationId=${payload.station}&parameter=${payload.parameter}`
      )
      const data: {
        collects: DashboardInterface[]
        station: ActiveStationInterface
      } = response.data
      return data
    } catch (error) {
      console.log(error)
      alert('Não foi possível obter dados do dashboard.')
    }
  }
}
