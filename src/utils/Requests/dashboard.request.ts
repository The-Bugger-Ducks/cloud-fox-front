import { api } from "../../services/api";
import { DashboardInterface } from "../../interfaces/dashboard";
import { validateStatus } from "../Handlers/problemResponseStatusCode";

export class DashboardRequests {
  public async getStationData(stationID: string) {
    try {
      const payload: any = {
        station: stationID,
        startDate: 1663383600,
        endDate: 1663642801,
        parameter: null,
      };

      let response = await api.get(`dashboard`, payload);
      const data: DashboardInterface[] = response.data;
      return data;
    } catch (error) {
      console.log(error);
      alert("Não foi possível obter dados do dashboard.");
    }
  }
}
