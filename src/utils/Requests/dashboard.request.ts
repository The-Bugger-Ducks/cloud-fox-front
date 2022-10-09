import { api } from "../../services/api";
import { DashboardInterface } from "../../interfaces/dashboard";
import { ActiveStationInterface } from "../../interfaces/station";

class DashboardRequests {
  public async getDashboardData(stationID: string, parameter: string) {
    try {
      const payload = {
        station: stationID,
        paramType: parameter,
      };

      const response = await api.get(
        `dashboard?stationId=${payload.station}&paramType=${payload.paramType}`
      );

      const data: {
        collects: DashboardInterface[];
        station: ActiveStationInterface;
      } = response.data;
      return data;
    } catch (error) {
      console.log(error);
      alert("Não foi possível obter dados do dashboard.");
    }
  }
}

export default new DashboardRequests();
