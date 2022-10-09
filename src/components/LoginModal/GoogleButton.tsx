import { useContext, useEffect } from "react";

import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";

import Button from "../Button";
import { AiOutlineGooglePlus } from "react-icons/ai";

import theme from "../../global/theme";
import UserRequests from "../../utils/Requests/user.request";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

export default function GoogleButton() {
	const { saveUserDataInStorage } = useContext(AuthContext);
	const navigate = useNavigate();

	const CLIENT_ID = "826612899243-r80v2i58suusduq8p3iht9sbaip815db.apps.googleusercontent.com";

	useEffect(() => {
		const initClient = () => {
			gapi.client.init({
				clientId: CLIENT_ID,
				scope: "",
			});
		};
		gapi.load("client:auth2", initClient);
	});

	const onSuccess = (res: any) => {
		UserRequests.createUser(
			res.profileObj.givenName,
			res.profileObj.email,
			res.profileObj.imageUrl.length === 0
				? res.profileObj.imageUrl
				: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
		)
			.then((user) => {
				saveUserDataInStorage(user!!);
				navigate("/myProfile");
			})
			.catch((err) => onFailure(err));
	};

	const onFailure = (err: any) => {
		console.log("failed:", err);

		alert("Que pena! Algo deu errado com seu login. Tente novamente mais tarde!");
	};

	return (
		<GoogleLogin
			clientId={CLIENT_ID}
			buttonText="Login com  Google"
			onSuccess={onSuccess}
			onFailure={onFailure}
			cookiePolicy={"single_host_origin"}
			isSignedIn={true}
			render={(renderProps) => (
				<Button
					title="Login com Google"
					fontColor={theme.colors.gray}
					backgroundColor={theme.colors.white}
					marginBottom={"1rem"}
					onClick={renderProps.onClick}
					icon={<AiOutlineGooglePlus size={24} />}
				/>
			)}
		/>
	);
}
