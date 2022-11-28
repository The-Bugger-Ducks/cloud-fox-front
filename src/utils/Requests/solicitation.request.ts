import { SolicitationUser } from "../../interfaces/solicitation";
import { api } from "../../services/api";

import { validateStatus } from "../handler/HandlerResponseStatusCodeFound";

class SolicitationRequests {
	public async getSolicitations() {
		try {
			const response = await api.get("solicitations", {
				validateStatus,
			});
			return response.data as SolicitationUser[];
		} catch (error) {
			console.log(error);
		}
	}

	public async createSolicitation(userId: string, role: "simple" | "advanced" | "admin") {
		try {
			await api.post("users/solicitation", {
				roleReq: role,
				user: userId,
			});
		} catch (error) {
			console.log(error);
		}
	}

	public async validateSolicitation(id: string, userId: string, role?: "simple" | "advanced" | "admin") {
		try {
			const response = await api.delete("solicitation", {
				data: { id, role, user: userId },
			});
			// retorna string com mensagem se atualizou ou recusou
			return response.data;
		} catch (error) {
			console.log(error);
		}
	}
}

export default new SolicitationRequests();
