import { api } from "../../services/api";
import { DashboardInterface } from "../../interfaces/dashboard";

export class DashboardRequests {
  public async getDashboardData(
    stationID: string,
    startDate?: number,
    endDate?: number,
    parameter?: number
  ) {
    try {
      const payload: any = {
        station: stationID,
        startDate: 1663383600,
        endDate: 1663642801,
        parameter: null,
      };

      if (startDate) {
        payload.startDate = startDate;
      }

      if (endDate) {
        payload.endDate = startDate;
      }

      if (parameter) {
        payload.parameter = parameter;
      }

      let response = await api.get(`dashboard`, payload);
      const data: DashboardInterface[] = response.data;
      return data;
    } catch (error) {
      console.log(error);
      alert("Não foi possível obter dados do dashboard.");
    }
  }
}
