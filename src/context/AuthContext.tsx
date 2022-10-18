import React, { createContext, useEffect, useState } from "react";
import { User } from "../interfaces/user";
import SessionController from "../utils/handler/SessionController";

interface UserAuthenticatedLike {
	token: string;
	user: User;
}

interface AuthContextLike {
	userInfo: User | null;
	saveUserDataInStorage: (data: UserAuthenticatedLike) => void;
	handleClearUserInfo: () => void;
}

interface Props {
	children: JSX.Element;
}

const AuthContext = createContext<AuthContextLike>({
	userInfo: null,
	saveUserDataInStorage: (data: UserAuthenticatedLike) => {},
	handleClearUserInfo: () => {},
});

const AuthProvider: React.FC<Props> = ({ children }) => {
	const [userInfo, setUserInfo] = useState<User | null>(null);

	useEffect(() => {
		const userData = SessionController.getUserInfo();

		if (userData) setUserInfo(userData);
	}, []);

	function saveUserDataInStorage(data: UserAuthenticatedLike) {
		SessionController.setUserInfo(data.user);
		SessionController.setToken(data.token);
		setUserInfo(data.user);
	}

	function handleClearUserInfo() {
		SessionController.clearUserInfo();
		setUserInfo(null);
	}

	return (
		<AuthContext.Provider value={{ userInfo, saveUserDataInStorage, handleClearUserInfo }}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthProvider, AuthContext };
