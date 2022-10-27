import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import UserRequests from "../../utils/Requests/user.request";
import SolicitationRequests from "../../utils/Requests/solicitation.request";

import Button from "../../components/Button";

import theme from "../../global/theme";
import {
	Container,
	Title,
	ProfileContainer,
	ProfileContent,
	ProfileInformations,
	Avatar,
	UserName,
	UserEmail,
	Topic,
	LevelCards,
	LevelCard,
	ImageCard,
	TitleCard,
	SubtitleCard,
	DeleteIcon,
} from "./styles";
import { OneIcon, ThreeIcon, Trash, TwoIcon } from "../../assets/icons";
import { AuthContext } from "../../context/AuthContext";

interface LevelCardProps {
	icon: string;
	title: string;
	value: "simple" | "advanced" | "admin";
	subtitle: string;
}

export default function MyProfile() {
	const navigate = useNavigate();
	const { userInfo } = useContext(AuthContext);

	const levelCards: LevelCardProps[] = [
		{
			icon: OneIcon,
			title: "Simples",
			value: "simple",
			subtitle: "Vizualizar estações e seus respectivos dashboards",
		},
		{
			icon: TwoIcon,
			title: "Avançado",
			value: "advanced",
			subtitle: "Gerenciar estações e sensores e vizualizar dashboards de cada estação",
		},
		{
			icon: ThreeIcon,
			title: "Administrador",
			value: "admin",
			subtitle: "Gerenciar nível de acesso dos usuários cadastrados, estações e sensores",
		},
	];

	function levelAccessTitle(level: number) {
		if (
			(level === 1 && userInfo?.role === "simple") ||
			(level === 2 && userInfo?.role === "advanced") ||
			(level === 3 && userInfo?.role === "admin")
		) {
			return "Nível de acesso atual";
		}

		return "Solicitar nível de acesso";
	}

	function handleLevelAccess(role: "simple" | "advanced" | "admin") {
		SolicitationRequests.createSolicitation(userInfo!.id, role);
	}

	function handleDeleteAccount() {
		const confirmation = window.confirm("Tem certeza que quer deletar a conta?");
		confirmation &&
			UserRequests.deleteUser(userInfo!.id).then(() => {
				navigate("/home");
				localStorage.clear();
			});
	}

	useEffect(() => {
		if (!userInfo?.id) navigate("/login");
	}, []);

	return (
		<Container>
			{userInfo == null ? (
				<>Carregando informações...</>
			) : (
				<>
					<Title>MEU PERFIL</Title>
					<ProfileContainer>
						<ProfileContent>
							<DeleteIcon>
								<img alt="ìcone de lixeira para deletar conta" src={Trash} onClick={handleDeleteAccount} />
							</DeleteIcon>
							<ProfileInformations>
								<Avatar src={userInfo!.imgSrc} />
								<UserName>{userInfo!.username}</UserName>
								<UserEmail>{userInfo!.email}</UserEmail>
							</ProfileInformations>
						</ProfileContent>
					</ProfileContainer>
					<Topic>Nível de permissão</Topic>
					<LevelCards>
						{levelCards.map((card, index) => (
							<LevelCard key={index}>
								<ImageCard src={card.icon} />
								<TitleCard>{card.title}</TitleCard>
								<SubtitleCard>{card.subtitle}</SubtitleCard>
								<Button
									title={levelAccessTitle(index + 1)}
									backgroundColor={
										levelAccessTitle(index + 1) === "Nível de acesso atual"
											? theme.colors.secondary
											: theme.colors.primary
									}
									onClick={() => handleLevelAccess(card.value)}
								/>
							</LevelCard>
						))}
					</LevelCards>
				</>
			)}
		</Container>
	);
}
