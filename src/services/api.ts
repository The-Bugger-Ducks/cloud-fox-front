import axios from "axios";
import SessionController from "../utils/handler/SessionController";

export const api = axios.create({
	baseURL: "https://cloud-fox.onrender.com/",
});

api.interceptors.request.use(async (config: any) => {
	// const token = SessionController.getToken();

	const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3Y2QxYjQ3LWZjMDAtNDU4Mi04YTk5LWM5NDY1NDQzMTU0YSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY3MDgwMjI1NCwiZXhwIjoxNjcwODg4NjU0fQ.sAuelQD9Z0j2fwb1CJpswX_tBYZwH64K3l9nv2JTmeU';

	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});
