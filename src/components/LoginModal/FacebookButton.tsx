import { useContext, useState } from "react";
import FacebookLogin from "react-facebook-login";

import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

export default function FacebookButton() {
	const { saveUserDataInStorage } = useContext(AuthContext);
	const navigate = useNavigate();

	const [login, setLogin] = useState(false);
	const [data, setData] = useState({});
	const [picture, setPicture] = useState("");

	const responseFacebook = (response: any) => {
		console.log(response);
		setData(response);
		setPicture(response.picture.data.url);
		if (response.accessToken) {
			setLogin(true);
		} else {
			setLogin(false);
		}
	};

	return (
		<FacebookLogin
			appId="657468355961929"
			autoLoad={true}
			fields="name,email,picture"
			scope="public_profile,user_friends"
			callback={responseFacebook}
			icon="fa-facebook"
			textButton="Login com Facebook"
		/>
	);
}
