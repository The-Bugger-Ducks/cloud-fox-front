import { forwardRef, useImperativeHandle, useState } from "react";
import CloseOutlined from "@mui/icons-material/CloseOutlined";
import { StatusModalRef } from "../../interfaces/StatusModalRef";
import {
	Container,
	Body,
	Main,
	Title,
	ParamsTable,
	Item,
	ItemTitleInit,
	ItemTitle,
	NoItem,
	LabelAlert,
	ItemLabel,
	Badge,
	IconClose,
} from "./styles";
import { ActiveStationInterface } from "../../interfaces/station";

type StatusProps = {
	type: "Verde" | "Amarelo" | "Vermelho";
	value: string;
	param: string;
	max: string;
	min: string;
};

const StatusModal = forwardRef<StatusModalRef, { station?: ActiveStationInterface }>((props, ref) => {
	const [isDisabled, setIsDisabled] = useState<boolean>(true);
	const [statusList, setStatusList] = useState<StatusProps[]>([
		{
			type: "Verde",
			value: "50mm",
			param: "Chuva",
			max: "200mm",
			min: "5mm",
		},
		{
			type: "Amarelo",
			value: "50km/h",
			param: "Vento",
			max: "75km/h",
			min: "10km/h",
		},
		{
			type: "Vermelho",
			value: "2",
			param: "Umidade",
			max: "40",
			min: "10",
		},
	]);

	const closeModal = () => setIsDisabled(true);

	useImperativeHandle(ref, () => ({
		showModal: () => setIsDisabled(false),
	}));

	return (
		<Container disabled={isDisabled}>
			<Body>
				<IconClose onClick={() => closeModal()}>
					<CloseOutlined />
				</IconClose>
				<Title>Status da estação</Title>
				<Main>
					<ParamsTable>
						<Item>
							<ItemTitleInit>Alerta</ItemTitleInit>
						</Item>
						<Item>
							<ItemTitle>Valor</ItemTitle>
						</Item>
						<Item>
							<ItemTitle>Parâmetro</ItemTitle>
						</Item>
						<Item>
							<ItemTitle>Máximo</ItemTitle>
						</Item>
						<Item>
							<ItemTitle>Mínimo</ItemTitle>
						</Item>

						{statusList.length === 0 ? (
							<NoItem>
								<LabelAlert>Nenhum alerta enccontrado</LabelAlert>
							</NoItem>
						) : (
							statusList.map((status, index) => (
								<>
									<Badge key={status.type + index} type={status.type}>
										{status.type}
									</Badge>
									<Item key={status.value + index}>
										<ItemLabel title={status.value}>{status.value}</ItemLabel>
									</Item>
									<Item key={status.param + index}>
										<ItemLabel title={status.param}>{status.param}</ItemLabel>
									</Item>
									<Item key={status.max + index}>
										<ItemLabel title={status.max.toString()}>{status.max}</ItemLabel>
									</Item>
									<Item key={status.min + index}>
										<ItemLabel title={status.min.toString()}>{status.min}</ItemLabel>
									</Item>
								</>
							))
						)}
					</ParamsTable>
				</Main>
			</Body>
		</Container>
	);
});

export default StatusModal;
