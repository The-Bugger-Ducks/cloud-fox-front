import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import Button from "../Button";
import { ParameterTypeRegistrationModalRef } from "../../interfaces/ParameterTypeRegistrationModalRef";
import ParamRequests from "../../utils/Requests/param.request";
import Param from "../Param";
import { ParamInterface } from "../../interfaces/param";
import {
	Container,
	Body,
	Main,
	Footer,
	Title,
	Questions,
	Label,
	Input,
	ParamsTable,
	Checkbox,
	Item,
	ItemLabel,
	ItemTitle,
	ItemTitleInit,
	CustomAccordion,
	CustomAccordionSummary,
	CustomAccordionDetails,
	ButtonContainer,
	RegisteredSensors,
	ParamsContainer,
	LabelAlert,
	NoItem,
	Values,
	ValuesItem,
} from "./styles";

const AlertRegistrationModal = forwardRef<ParameterTypeRegistrationModalRef, { idStation?: string }>((props, ref) => {
	const [isDisabled, setIsDisabled] = useState<boolean>(true);
	const [idStation, setIdStation] = useState<string>("");
	const [paramsSelected, setParamsSelected] = useState<ParamInterface[]>([]);
	const [paramsToCreated, setParamsToCreated] = useState<ParamInterface[]>([]);
	const [allParams, setAllParams] = useState<ParamInterface[]>([]);
	const [alertsInfo, setAlertsInfo] = useState<JSX.Element[]>([]);

	useEffect(() => {
		getParameters();
	}, []);

	const closeModal: () => void = () => {
		setIsDisabled(true);
	};

	const getParameters = async () => {
		const response = await ParamRequests.getParams();
		if (response === "error") {
			alert("Não foi possível buscar por parâmetros cadastrados");
		} else {
			setAllParams(response);
		}
	};

	const createAlerts = async () => {
		console.log("Adicionar alertas");
	};

	const handleTableParams = async (event: React.ChangeEvent<HTMLInputElement>, param: ParamInterface) => {
		const clearParam = {
			name: param.name,
			unit: param.unit,
			factor: param.factor,
			type: param.type,
			stationId: idStation,
		};

		if (event.target.checked) {
			const actualParams = paramsSelected;
			actualParams.push(clearParam);
			const updatedParams = actualParams;
			setParamsSelected(updatedParams);
		} else {
			const updatedParams = paramsSelected.filter((parameterInCheck: any) => {
				let params: any = clearParam;

				// Validei item por item pq de outro jeito nao funcionava
				for (let key in parameterInCheck) {
					if (parameterInCheck[key].toString() != params[key].toString()) {
						return true;
					}
				}
				return false;
			});
			setParamsSelected(updatedParams);
		}
	};

	const addToQueue = async () => {
		setParamsToCreated(paramsSelected);
		updateAlertsElement();
	};

	const updateAlertsElement = () => {
		const updatedElements: JSX.Element[] = [];
		paramsToCreated.map((param, index) => {
			updatedElements.push(
				<div key={index}>
					<ParamsContainer>
						<Param name={param.name} onClick={() => removeAlert(index)} />
					</ParamsContainer>
					<Values>
						<ValuesItem>
							<Label>Mínimo</Label>
							<Input type="number" defaultValue={30} />
						</ValuesItem>

						<ValuesItem>
							<Label>Máximo</Label>
							<Input type="number" defaultValue={75} />
						</ValuesItem>
					</Values>
				</div>
			);
		});
		setAlertsInfo(updatedElements);
	};

	const removeAlert = (index: number) => {
		let updatedParams = paramsToCreated;
		updatedParams.splice(index, 1);
		setParamsToCreated(updatedParams);

		updateAlertsElement();
	};

	useImperativeHandle(ref, () => ({
		showModal: () => {
			setIdStation(props.idStation ? props.idStation : "");
			setIsDisabled(false);
		},
	}));

	return (
		<Container disabled={isDisabled}>
			<Body>
				<Title>Adicionar alerta</Title>
				<Main>
					<Questions>
						<Label>Selecione na tabela a seguir o parâmetro que deseja incluir no alerta</Label>
						<ParamsTable>
							<Item>
								<ItemTitleInit>Nome</ItemTitleInit>
							</Item>
							<Item>
								<ItemTitle>Unidade</ItemTitle>
							</Item>
							<Item>
								<ItemTitle>Fator</ItemTitle>
							</Item>
							<Item>
								<ItemTitle>Tipo</ItemTitle>
							</Item>

							{allParams.length === 0 ? (
								<NoItem>
									<LabelAlert>Nenhum parâmetro encontrado</LabelAlert>
									<LabelAlert>
										Selecione o botão "Adicionar parâmetros" na Dashboard para inserir novos parâmetros
									</LabelAlert>
								</NoItem>
							) : (
								allParams.map((paramItem, index) => (
									<>
										<Item key={paramItem.name + index}>
											<Checkbox
												type="checkbox"
												name={paramItem.name}
												onChange={(event) => handleTableParams(event, paramItem)}
											/>
											<ItemLabel title={paramItem.name}>{paramItem.name}</ItemLabel>
										</Item>
										<Item key={paramItem.unit + index}>
											<ItemLabel title={paramItem.unit}>{paramItem.unit}</ItemLabel>
										</Item>
										<Item key={paramItem.factor + index}>
											<ItemLabel title={paramItem.factor.toString()}>{paramItem.factor}</ItemLabel>
										</Item>
										<Item key={paramItem.type + index}>
											<ItemLabel title={paramItem.type}>{paramItem.type}</ItemLabel>
										</Item>
									</>
								))
							)}
						</ParamsTable>
						<ButtonContainer>
							<Button
								width="100%"
								onClick={() => addToQueue()}
								title="Adicionar na fila de cadastro"
								backgroundColor="#7711BB"
							/>
						</ButtonContainer>
					</Questions>

					<Questions>
						<Label>
							Estabeleça um limite mínimo e máximo que servirá de base para a emissão de alertas para cada parâmetro
							selecionado
						</Label>
						{alertsInfo.length === 0 ? <LabelAlert>Nenhum parâmetro a ser cadastrado</LabelAlert> : alertsInfo}
					</Questions>
				</Main>
				<Footer>
					<Button width="50%" title="Cancelar" backgroundColor="#A0938C" onClick={() => closeModal()} />
					<Button width="50%" title="Adicionar alertars" onClick={() => createAlerts()} />
				</Footer>
			</Body>
		</Container>
	);
});

export default AlertRegistrationModal;
