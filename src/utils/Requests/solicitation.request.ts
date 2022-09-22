import { SolicitationUser } from "../../interfaces/solicitation";
import { api } from "../../services/api";

import { validateStatus } from "../Handlers/HandlerResponseStatusCodeFound";

class SolicitationRequests {
  public async getSolicitations() {
    try {
      const response = await api.get("solicitations", {
        validateStatus,
      });
      return response.data as SolicitationUser[];
    } catch (error) {
      console.log(error);
      alert("Não foi possível obter os dados das solicitações.");
    }
  }

  public async createSolicitation(
    userId: string,
    role: "simple" | "advanced" | "admin"
  ) {
    try {
      await api.post("users/solicitation", {
        roleReq: role,
        user: userId,
      });

      alert("Solicitação enviada com sucesso");
    } catch (error) {
      console.log(error);
      alert("Não foi possível solicitar a troca de nível de perfil.");
    }
  }

  public async validateSolicitation(
    id: string,
    userId: string,
    role?: "simple" | "advanced" | "admin"
  ) {
    try {
      const response = await api.delete("solicitation", {
        data: { id, role, user: userId },
      });
      // retorna string com mensagem se atualizou ou recusou
      return response.data;
    } catch (error) {
      console.log(error);
      alert("Não foi possível alterar a solicitação.");
    }
  }
}

export default new SolicitationRequests();
