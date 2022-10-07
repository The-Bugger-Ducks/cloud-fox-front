import { api } from "../../services/api";
import { ActiveStationInterface } from "../../interfaces/station";
import { LatLngLiteral } from "leaflet";

class StationRequests {
  public async getStations(isActive?: boolean) {
    try {
      const response = isActive
        ? await api.get("stations/isActive=true")
        : await api.get("stations/");

      return response.data as ActiveStationInterface[];
    } catch (error) {
      console.log(error);
      alert("Não foi possível obter estações.");
    }
  }

  public async createStation(
    id: string,
    name: string,
    lat: LatLngLiteral,
    lon: LatLngLiteral,
    description: string,
    parameterTypes?: []
  ) {
    try {
      const payload = {
        id: id,
        name: name,
        lat: lat,
        lon: lon,
        description: description,
        parameterTypes: parameterTypes,
      };

      const response = await api.post("/stations", payload);

      alert("Estação cadastrada com sucesso!");

      return response;
    } catch (error) {
      console.log(error);

      alert("Não foi possível cadastrar estação.");
    }
  }
}

export default new StationRequests();
