import { forwardRef, useImperativeHandle, useState } from "react";
import Button from "../Button";
import { ParameterTypeRegistrationModalRef } from "../../interfaces/ParameterTypeRegistrationModalRef";
import ParamRequests from "../../utils/Requests/param.request";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
} from "./styles";

const ParameterRegistrationModal = forwardRef<ParameterTypeRegistrationModalRef, { idStation?: string }>(
	(props, ref) => {
		const [isDisabled, setIsDisabled] = useState<boolean>(true);
		const [nameParameter, setPameParameter] = useState<string>("");
		const [unitParameter, setUnitParameter] = useState<string>("");
		const [factorParameter, setFactorParameter] = useState<number>(0);
		const [typeParameter, setTypeParameter] = useState<string>("");
		const [idStation, setIdStation] = useState<string>("");
		const [params, setParams] = useState<Object[]>([]);

		const closeModal = () => {
			setIsDisabled(true);
		};

		const createParameter = async () => {
			const payload = {
				name: nameParameter,
				unit: unitParameter,
				factor: factorParameter,
				type: typeParameter,
				stationId: idStation,
			};

			const response = await ParamRequests.createParam(
				payload.name,
				payload.unit,
				payload.factor,
				payload.type,
				payload.stationId
			);

			if (response !== "error") {
				closeModal();
				alert("Parâmetro cadastrado com sucesso!");
				window.location.reload();
			} else {
				alert("Não foi possível cadastrar o parâmetro");
			}
		};

		const handleTableParams = async (event: any, param: Object) => {
			if (event.target.checked) {
				const actualParams = params;
				actualParams.push(param);
				const updatedParams = actualParams;
				setParams(updatedParams);
			} else {
				const updatedParams = params.filter((parameterInCheck) => {
					return parameterInCheck === param;
				});
				setParams(updatedParams);
			}
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

								<Item>
									<Checkbox
										type="checkbox"
										name="teste"
										onChange={(event) =>
											handleTableParams(event, {
												name: "teste",
												unit: "mm",
												factor: "200",
												type: "aue",
												stationId: idStation,
											})
										}
									/>
									<ItemLabel>Teste</ItemLabel>
								</Item>
								<Item>
									<ItemLabel>Teste</ItemLabel>
								</Item>
								<Item>
									<ItemLabel>Teste</ItemLabel>
								</Item>
								<Item>
									<ItemLabel>Teste</ItemLabel>
								</Item>

								<Item>
									<Checkbox
										type="checkbox"
										name="teste"
										onChange={(event) =>
											handleTableParams(event, {
												name: "a",
												unit: "mm",
												factor: "200",
												type: "aue",
												stationId: idStation,
											})
										}
									/>
									<ItemLabel>Teste</ItemLabel>
								</Item>
								<Item>
									<ItemLabel>Teste</ItemLabel>
								</Item>
								<Item>
									<ItemLabel>Teste</ItemLabel>
								</Item>
								<Item>
									<ItemLabel>Teste</ItemLabel>
								</Item>
							</ParamsTable>
							<CustomAccordion>
								<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
									<Label>Faltou algum parâmetro? Clique aqui para cadastrar!</Label>
								</AccordionSummary>
								<AccordionDetails>
									<Label>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
										blandit leo lobortis eget.
									</Label>
								</AccordionDetails>
							</CustomAccordion>
						</Questions>

						{/* <Questions>
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
							<Input type="text" placeholder="Ex.: pluv" onChange={(event) => setTypeParameter(event.target.value)} />
						</Questions> */}
					</Main>
					<Footer>
						<Button width="45%" title="Cancelar" backgroundColor="#A0938C" onClick={() => closeModal()} />
						<Button width="45%" title="Adicionar parâmetros" onClick={() => createParameter()} />
					</Footer>
				</Body>
			</Container>
		);
	}
);

export default ParameterRegistrationModal;
