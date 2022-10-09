import { useContext, useEffect } from "react";
import { AiFillFacebook, AiFillApple, AiOutlineGooglePlus } from "react-icons/ai";

import { useNavigate } from "react-router-dom";

import Button from "../Button";
import { Container, Title, Buttons } from "./styles";
import theme from "../../global/theme";

import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";

import UserRequests from "../../utils/Requests/user.request";
import { AuthContext } from "../../context/AuthContext";

export default function LoginModal() {
	const { saveUserDataInStorage } = useContext(AuthContext);
	const navigate = useNavigate();

	const CLIENT_ID = "826612899243-r80v2i58suusduq8p3iht9sbaip815db.apps.googleusercontent.com";

	useEffect(() => {
		const initClient = () => {
			gapi.auth2.init({
				client_id: CLIENT_ID,
				scope: "",
			});
		};
		gapi.load("client:auth2", initClient);
	}, []);

	const onSuccess = (res: any) => {
		alert("Fazendo login com Google...");

		UserRequests.createUser(
			res.profileObj.givenName,
			res.profileObj.email,
			res.profileObj.imageUrl.length === 0
				? res.profileObj.imageUrl
				: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
		)
			.then((user) => {
				saveUserDataInStorage(user!);
				navigate("/myProfile");
			})
			.catch((err) => onFailure(err));
	};

	const onFailure = (err: any) => {
		console.log("failed:", err);

		alert("Que pena! Algo deu errado com seu login. Tente novamente mais tarde!");
	};

	return (
		<Container>
			<Title>Login</Title>

			<Buttons>
				<Button
					title="Login com Facebook"
					fontColor={theme.colors.white}
					backgroundColor={"#1877F2"}
					marginBottom={"1rem"}
					icon={<AiFillFacebook size={24} />}
				/>

				{/* <FacebookButton /> */}
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
				<Button
					title="Login com Apple"
					fontColor={theme.colors.white}
					backgroundColor={theme.colors.black}
					icon={<AiFillApple size={24} />}
				/>
			</Buttons>
		</Container>
	);
}
