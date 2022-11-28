import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import Button from "../Button";
import { ParameterTypeRegistrationModalRef } from "../../interfaces/ParameterTypeRegistrationModalRef";
import ParamRequests from "../../utils/Requests/param.request";
import Param from "../Param";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
	Select,
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
} from "./styles";
import ToastService from "../../utils/Toast/ToastService";
import { ToastContainer } from "react-toastify";

const ParameterRegistrationModal = forwardRef<ParameterTypeRegistrationModalRef, { idStation?: string }>(
	(props, ref) => {
		const [isDisabled, setIsDisabled] = useState<boolean>(true);
		const [nameParameter, setPameParameter] = useState<string>("");
		const [unitParameter, setUnitParameter] = useState<string>("");
		const [factorParameter, setFactorParameter] = useState<number>(0);
		const [typeParameter, setTypeParameter] = useState<string>("");
		const [idStation, setIdStation] = useState<string>("");
		const [newParams, setNewParams] = useState<ParamInterface[]>([]);
		const [newParamsElement, setNewParamsElement] = useState<JSX.Element[]>([]);
		const [oldParams, setOldParams] = useState<ParamInterface[]>([]);
		const [allParams, setAllParams] = useState<ParamInterface[]>([]);
		const [hasError, setHasError] = useState<boolean>(false);

		useEffect(() => {
			getParameters();
		}, []);

		const closeModal = () => {
			setNewParams([]);
			setOldParams([]);
			setNewParamsElement([]);
			setIsDisabled(true);
		};

		const getParameters = async () => {
			const response = await ParamRequests.getParams();
			if (response === "error") {
				setHasError(true);
			} else {
				setAllParams(response);
			}
		};

		const createParameter = async () => {
			const params: ParamInterface[] = oldParams.concat(newParams);
			const response = await ParamRequests.createParam(params);
			if (response !== "error") {
				closeModal();
				ToastService.success({
					title: "Sucesso",
					message: "Parâmetro cadastrado com sucesso!"
				})
				window.location.reload();
			} else {
				ToastService.warning({
					title: "Atenção",
					message: "Não foi possível cadastrar o parâmetro"
				})
			}
		};

		const updateNewParamsElement = () => {
			const updatedElements: JSX.Element[] = [];
			newParams.map((newParamElement, index) => {
				updatedElements.push(<Param key={index} name={newParamElement.name} onClick={() => removeNewParam(index)} />);
			});
			setNewParamsElement(updatedElements);
		};

		const addNewParam = () => {
			const newParam: ParamInterface = {
				name: nameParameter,
				unit: unitParameter,
				factor: factorParameter,
				type: typeParameter,
				stationId: idStation,
			};

			let updatedParams = newParams;
			updatedParams.push(newParam);
			setNewParams(updatedParams);
			updateNewParamsElement();
		};

		const removeNewParam = (index: number) => {
			let updatedParams = newParams;
			updatedParams.splice(index, 1);
			setNewParams(updatedParams);
			updateNewParamsElement();
		};

		const handleTableParams = async (event: React.ChangeEvent<HTMLInputElement>, param: ParamInterface) => {
			const clearParam = {
				name: param.name,
				unit: param.unit,
				factor: param.factor,
				type: param.type,
				stationId: param.stationId,
			};

			if (event.target.checked) {
				const actualParams = oldParams;
				actualParams.push(clearParam);
				const updatedParams = actualParams;
				setOldParams(updatedParams);
			} else {
				const updatedParams = oldParams.filter((parameterInCheck) => {
					return parameterInCheck !== clearParam;
				});
				setOldParams(updatedParams);
			}
		};

		useImperativeHandle(ref, () => ({
			showModal: () => {
				setIdStation(props.idStation ? props.idStation : "");
				setIsDisabled(false);
			},
		}));

		return (
			<>
				<ToastContainer />
				<Container disabled={isDisabled}>
					<Body>
						<Title>Adicionar parâmetros</Title>
						<Main>
							<Questions>
								<Label>Selecione na tabela a seguir o(s) parâmetro(s) que deseja adicionar a estação</Label>
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
											{hasError ? (
												<>
													<LabelAlert>Não foi possível buscar por parâmetros</LabelAlert>{" "}
													<LabelAlert>Recarregue a página e tente novamente</LabelAlert>
												</>
											) : (
												<LabelAlert>Nenhum parâmetro encontrado</LabelAlert>
											)}
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
								<CustomAccordion>
									<CustomAccordionSummary
										expandIcon={<ExpandMoreIcon />}
										aria-controls="panel1a-content"
										id="panel1a-header"
									>
										<Label>Faltou algum parâmetro? Clique aqui para cadastrar!</Label>
									</CustomAccordionSummary>
									<CustomAccordionDetails>
										<Questions>
											<Label>Nome do parâmetro</Label>
											<Input
												type="text"
												placeholder="Ex.: Pluviometro"
												onChange={(event) => setPameParameter(event.target.value)}
											/>

											<Label>Unidade de medida</Label>
											<Select onChange={(event) => setUnitParameter(event.target.value)}>
												<option>mm</option>
												<option>cm</option>
												<option>m</option>
												<option>km</option>
												<option>hm</option>
												<option>dam</option>
												<option>mm²</option>
												<option>cm²</option>
												<option>m²</option>
												<option>km²</option>
												<option>hm²</option>
												<option>dam²</option>
												<option>segundos</option>
												<option>minutos</option>
												<option>horas</option>
												<option>g</option>
												<option>kg</option>
												<option>hg</option>
												<option>dag</option>
												<option>dg</option>
												<option>cg</option>
												<option>mg</option>
												<option>K</option>
												<option>m/s</option>
												<option>km/s</option>
												<option>m/s</option>
												<option>km/h</option>
												<option>°C</option>
												<option>°F</option>
											</Select>

											<Label>Fator</Label>
											<Input
												type="number"
												placeholder="Ex.: 1.5"
												onChange={(event) => setFactorParameter(parseInt(event.target.value))}
											/>

											<Label>Tipo de parâmetro</Label>
											<Input
												type="text"
												placeholder="Ex.: pluv"
												onChange={(event) => setTypeParameter(event.target.value)}
											/>
											<ButtonContainer>
												<Button
													width="100%"
													onClick={() => addNewParam()}
													title="Adicionar na fila de cadastro"
													backgroundColor="#7711BB"
												/>
											</ButtonContainer>
											<RegisteredSensors>
												<Label>Parâmetros a serem cadastrados</Label>
												<ParamsContainer>
													{newParamsElement.length === 0 ? (
														<LabelAlert>Nenhum parâmetro a ser cadastrado</LabelAlert>
													) : (
														newParamsElement
													)}
												</ParamsContainer>
											</RegisteredSensors>
										</Questions>
									</CustomAccordionDetails>
								</CustomAccordion>
							</Questions>
						</Main>
						<Footer>
							<Button width="50%" title="Cancelar" backgroundColor="#A0938C" onClick={() => closeModal()} />
							<Button width="50%" title="Adicionar parâmetros" onClick={() => createParameter()} />
						</Footer>
					</Body>
				</Container>
			</>

		);
	}
);

export default ParameterRegistrationModal;
