import { User } from "../../interfaces/user";
import { api } from "../../services/api";

interface UserAuthenticatedLike {
	userExists: User;
	token: string;
}

class UserRequests {
	public async getUsers() {
		try {
			const response = await api.get(`users/`);
			return response.data as User[];
		} catch (error) {
			console.error(error);
		}
	}

	public async getUser(id: string) {
		try {
			const response = await api.get(`users/${id}`);
			return response.data as User;
		} catch (error) {
			console.error(error);
		}
	}

	public async getAdvancedUsers() {
		try {
			const response = await api.get(`users/advanced`);
			return response.data as User[];
		} catch (error) {
			console.error(error);
		}
	}

	public async createUser(username: string, email: string, imgSrc: string) {
		try {
			const response = await api.post(`users/`, {
				username,
				email,
				role: "simple",
				imgSrc,
			});
			return response.data as UserAuthenticatedLike;
		} catch (error) {
			console.error(error);
		}
	}

	public async deleteUser(id: string) {
		try {
			await api.delete(`users/${id}`);
		} catch (error) {
			console.error(error);
		}
	}

	public async setUserRole(id: User["id"], role: User["role"]) {
		try {
			await api.put("/users/updateRole", { id, role }, { timeout: 5000 });
		} catch (error) {
			console.error(error);
			throw new Error("Ocorreu um erro ao alterar o privilégio desse usuário. Tente novamente mais tarde!");
		}
	}
}

export default new UserRequests();
