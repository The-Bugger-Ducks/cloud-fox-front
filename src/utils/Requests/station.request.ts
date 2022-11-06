import { api } from "../../services/api";
import { ActiveStationInterface } from "../../interfaces/station";
import { ParamInterface } from "../../interfaces/param";
import { LatLngLiteral } from "leaflet";

class StationRequests {
	public async getStations(isActive?: boolean) {
		try {
			const response = isActive ? await api.get("stations?isActive=true") : await api.get("stations/");

			return response.data as ActiveStationInterface[];
		} catch (error) {
			console.log(error);
			alert("Não foi possível obter estações.");
		}
	}

	public async getStation(id: string) {
		try {
			const response = await api.get("/stations/" + id);

			return response.data as {
				station: ActiveStationInterface;
				parameterTypes: ParamInterface[];
			};
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
			return response;
		} catch (error) {
			console.log(error);
			return "error";
		}
	}

	public async editStation(id: string, name: string, lat: LatLngLiteral, lon: LatLngLiteral, description: string) {
		try {
			const payload = {
				id: id,
				name: name,
				lat: lat,
				lon: lon,
				description: description,
			};

			const response = await api.put("/stations/activate/" + id, payload);
			return response;
		} catch (error) {
			console.log(error);
			return "error";
		}
	}
}

export default new StationRequests();
