import { useContext } from "react";

import Button from "../Button";
import { AiFillApple } from "react-icons/ai";
import { Container, Title, Buttons } from "./styles";

import theme from "../../global/theme";

import GoogleButton from "./GoogleButton";
import FacebookButton from "./FacebookButton";

export default function LoginModal() {
	return (
		<Container>
			<Title>Login</Title>

			<Buttons>
				{/* <Button
					title="Login com Facebook"
					fontColor={theme.colors.white}
					backgroundColor={"#1877F2"}
					marginBottom={"1rem"}
					icon={<AiFillFacebook size={24} />}
				/> */}

				<FacebookButton />
				<GoogleButton />
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
