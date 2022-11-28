import { useContext, useState } from "react";
import { AiOutlineGooglePlus } from "react-icons/ai";

import { useNavigate } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import Button from "../Button";
import { Container, Title, Buttons, LoadingContainer } from "./styles";
import theme from "../../global/theme";

import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";

import UserRequests from "../../utils/Requests/user.request";
import { AuthContext } from "../../context/AuthContext";
import Loading from "../Loading";
import ToastService from "../../utils/Toast/ToastService";

export default function LoginModal() {
	const { saveUserDataInStorage } = useContext(AuthContext);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const navigate = useNavigate();

	const CLIENT_ID = "826612899243-r80v2i58suusduq8p3iht9sbaip815db.apps.googleusercontent.com";

	const onSuccess = (res: any) => {
		UserRequests.createUser(
			res.profileObj.givenName,
			res.profileObj.email,
			res.profileObj.imageUrl.length === 0
				? res.profileObj.imageUrl
				: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
		)
			.then((response) => {
				saveUserDataInStorage({ user: response!.userExists, token: response!.token });
				setIsLoading(false);
				navigate("/myProfile");
			})
			.catch((err) => {
				onFailure(err);
				setIsLoading(false);
			});
	};

	const onFailure = (err: any) => {
		console.error(err);
		ToastService.warning({
			title: "Atenção",
			message: "Algo deu errado com seu login. Tente novamente mais tarde!"
		})
	};

	return (
		<>
			<ToastContainer />
			<Container>
				<Title>Login</Title>

				{isLoading ? (
					<LoadingContainer>
						<Loading width={100} height={100} />
					</LoadingContainer>
				) : (
					<Buttons>
						<GoogleLogin
							clientId={CLIENT_ID}
							buttonText="Login com  Google"
							onSuccess={onSuccess}
							onFailure={onFailure}
							cookiePolicy={"single_host_origin"}
							isSignedIn={false}
							render={(renderProps) => (
								<Button
									title="Login com Google"
									fontColor={theme.colors.gray}
									backgroundColor={theme.colors.white}
									marginBottom={"1rem"}
									onClick={() => {
										setIsLoading(true);
										const initClient = () => {
											gapi.auth2.init({
												client_id: CLIENT_ID,
												scope: "",
											});
										};
										gapi.load("client:auth2", initClient);
										renderProps.onClick();
									}}
									icon={<AiOutlineGooglePlus size={24} />}
								/>
							)}
						/>
					</Buttons>
				)}
			</Container>
		</>
	);
}
