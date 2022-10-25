import axios from "axios";
import SessionController from "../utils/Handlers/SessionController";

export const api = axios.create({
	baseURL: "https://cloud-fox.onrender.com/",
});

api.interceptors.request.use(async (config: any) => {
	const token = SessionController.getToken();

	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});
