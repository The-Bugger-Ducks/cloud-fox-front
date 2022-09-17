import { apiStations } from "../../services/api";
import { ActiveStationInterface } from "../../interfaces/station";

export class StationRequests {
  public async getStations(isActive?: boolean) {
    try {
      let response = null;

      if (isActive) {
        response = await apiStations.get(`stations/isActive=true`);
      } else {
        response = await apiStations.get(`stations/`);
      }

      const stations: ActiveStationInterface[] = response.data;
      return stations;
    } catch (error) {
      console.log(error);
      alert("Não foi possível obter estações.");
    }
  }
}
