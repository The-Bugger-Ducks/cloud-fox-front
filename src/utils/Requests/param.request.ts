import { api } from "../../services/api";
import { ParamInterface } from "../../interfaces/param";
class ParamRequests {
	public async createParam(params: ParamInterface[]) {
		try {
			const payload = {
				parameterTypes: params,
			};

			const response = await api.post("/parametersType", payload);
			return response;
		} catch (error) {
			console.log(error);
			return "error";
		}
	}

	public async getParams() {
		try {
			const response = await api.get("/parametersType");
			const data: ParamInterface[] = response.data;
			return data;
		} catch (error) {
			console.log(error);
			return "error";
		}
	}
}

export default new ParamRequests();
