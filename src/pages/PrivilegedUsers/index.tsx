import React, { useEffect, useState, useRef } from "react";

import Button from "../../components/Button";
import theme from "../../global/theme";

import { DividerIcon } from "../../assets/icons";

import userRequest from "../../utils/Requests/user.request";
import SolicitationRequests from "../../utils/Requests/solicitation.request";

import { User } from "../../interfaces/user";
import { SolicitationUser } from "../../interfaces/solicitation";

import { ActionButtonContainer, Divider, Main, PageTitle, Select, Table, TableData, TableHead, Title } from "./styles";
import ToastService from "../../utils/Toast/ToastService";
import { ToastContainer } from "react-toastify";

export default function PrivilegedUsers() {
	const [userContentPage, setUserContentPage] = useState<boolean>(true);
	const [solicitaionContentPage, setSolicitaionContentPage] = useState<boolean>(false);

	const [solicitationUsers, setSolicitationUsers] = useState<SolicitationUser[]>([]);
	const [users, setUsers] = useState<User[]>([]);

	const selectRoleRef = useRef<HTMLSelectElement>(null);

	useEffect(() => {
		getPrivilegedUsers();
		getSolicitationUsers();
	}, []);

	const getPrivilegedUsers = async () => {
		try {
			const response = await userRequest.getAdvancedUsers();

			if (response === null) throw new Error("Solicitation not found");

			setUsers(response ?? []);
		} catch (error) {
			ToastService.warning({
				title: "Atenção",
				message: "Ocorreu um erro ao listar os usuários privilegiados. Tente novamente mais tarde!"
			})
		}
	};

	const getSolicitationUsers = async () => {
		try {
			const response = await SolicitationRequests.getSolicitations();

			if (response === null) throw new Error("Solicitation not found");

			setSolicitationUsers(response ?? []);
		} catch (error) {
			ToastService.warning({
				title: "Atenção",
				message: "Ocorreu um erro ao listar as solicitações de troca de privilégio dos usuários. Tente novamente mais tarde!"
			})
		}
	};

	const headerUserContentPage = [
		{
			title: "Nome",
		},
		{
			title: "Email",
		},
		{
			title: "Privilégio atual",
		},
		{
			title: "Atualizar privilégio",
		},
	];

	const headerSolicitaionContentPage = [
		{
			title: "Nome",
		},
		{
			title: "Email",
		},
		{
			title: "Privilégio desejado",
		},
		{
			title: "Ações",
		},
	];

	const roleSelectList = [
		{
			role: "admin",
			label: "Administrativo",
		},
		{
			role: "advanced",
			label: "Avançado",
		},
		{
			role: "simple",
			label: "Simples",
		},
	];

	const PrivilegeLabelElement = ({ role }: { role: User["role"] }) => {
		const findRole = roleSelectList.find((option) => option.role === role);

		return <TableData>{findRole?.label}</TableData>;
	};

	const SelectUserRole = ({ user }: { user: User }) => {
		return (
			<TableData>
				<Select
					id="update-role-user"
					onChange={(event) => onUserRoleChange(event, user)}
					defaultValue={user.role}
					ref={selectRoleRef}
				>
					{roleSelectList.map(({ role, label }, index) => (
						<option key={index} value={role}>
							{label}
						</option>
					))}
				</Select>
			</TableData>
		);
	};

	const ActionsUserRole = ({ solicitation }: { solicitation: SolicitationUser }) => {
		return (
			<TableData>
				<ActionButtonContainer>
					<Button title="Aprovar" onClick={() => handleUserRoleChanged(solicitation, true)} />
					<Button
						title="Recusar"
						backgroundColor={theme.colors.gray}
						onClick={() => handleUserRoleChanged(solicitation, false)}
					/>
				</ActionButtonContainer>
			</TableData>
		);
	};

	const onUserRoleChange = async (event: React.ChangeEvent<HTMLSelectElement>, user: User) => {
		const newRole = event.target.value as User["role"];

		try {
			await userRequest.setUserRole(user.id, newRole);

			if (newRole === "simple") {
				setUsers((prevUsers) => {
					return prevUsers.filter((prevUser) => prevUser.id !== user.id);
				});
			}
		} catch (errorMessage) {
			event.target.value = user.role;
			event.target.focus();
			ToastService.warning({
				title: "Atenção",
				message: "Algo de errado aconteceu, tente novamente!"
			})
		}
	};

	const handleUserRoleChanged = (solicitation: SolicitationUser, accept: boolean) => {
		try {
			if (accept) {
				SolicitationRequests.validateSolicitation(solicitation.id, solicitation.user.id, solicitation.roleReq);
			} else {
				SolicitationRequests.validateSolicitation(solicitation.id, solicitation.user.id);
			}

			const solicitationFiltered = solicitationUsers.filter(
				(solicitationUser) => solicitationUser.id !== solicitation.id
			);

			setSolicitationUsers(solicitationFiltered);
		} catch (error) {
			ToastService.warning({
				title: "Atenção",
				message: "Ocorreu um erro ao processar a solicitação do usuário. Tente novamente mais tarde!"
			})
		}
	};

	const onChangePage = (selected: boolean) => {
		if (selected) return;

		setUserContentPage(!userContentPage);
		setSolicitaionContentPage(!solicitaionContentPage);
	};

	return (
		<>
			<ToastContainer />
			<Main>
				<PageTitle>
					<Title pageActive={userContentPage} onClick={() => onChangePage(userContentPage)}>
						USUÁRIOS PRIVILEGIADOS
					</Title>
					<Divider src={DividerIcon} alt="Divisor" />
					<Title pageActive={solicitaionContentPage} onClick={() => onChangePage(solicitaionContentPage)}>
						SOLICITAÇÕES
					</Title>
				</PageTitle>

				<Table>
					<thead>
						<tr>
							{userContentPage &&
								headerUserContentPage.map((item, index) => <TableHead key={index}>{item.title}</TableHead>)}
							{solicitaionContentPage &&
								headerSolicitaionContentPage.map((item, index) => <TableHead key={index}>{item.title}</TableHead>)}
						</tr>
					</thead>
					<tbody>
						{userContentPage &&
							(users.length !== 0 ? (
								users.map((user) => (
									<tr key={user.id}>
										<TableData>{user.username}</TableData>
										<TableData>{user.email}</TableData>
										<PrivilegeLabelElement role={user.role} />
										<SelectUserRole user={user} />
									</tr>
								))
							) : (
								<tr>
									<TableData colSpan={4}>Nenhum usuário encontrado</TableData>
								</tr>
							))}
						{solicitaionContentPage &&
							(solicitationUsers.length !== 0 ? (
								solicitationUsers.map((solicitation) => (
									<tr key={solicitation.id}>
										<TableData>{solicitation.user.username}</TableData>
										<TableData>{solicitation.user.email}</TableData>
										<PrivilegeLabelElement role={solicitation.roleReq} />
										<ActionsUserRole solicitation={solicitation} />
									</tr>
								))
							) : (
								<tr>
									<TableData colSpan={4}>Nenhuma solicitação encontrada</TableData>
								</tr>
							))}
					</tbody>
				</Table>
			</Main>
		</>
	);
}
