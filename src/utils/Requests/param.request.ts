import { api } from "../../services/api";

class ParamRequests {
  public async createParam(
    name: string,
    unit: string,
    factor: number,
    type: string,
    stationId: string
  ) {
    try {
      const payload = {
        parameterTypes: [
          {
            name: name,
            unit: unit,
            factor: factor,
            type: type,
            stationId: stationId,
          },
        ],
      };

      const response = await api.post("/parametersType", payload);
      return response;
    } catch (error) {
      console.log(error);
      return "error";
    }
  }
}

export default new ParamRequests();
