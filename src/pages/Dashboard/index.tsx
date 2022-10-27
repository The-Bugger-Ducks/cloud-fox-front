import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import CardChart from "../../components/CardChart";
import { EditIcon, DividerIcon } from "../../assets/icons";
import Button from "../../components/Button";
import {
	Container,
	Header,
	PageTitle,
	Title,
	Subtitle,
	StationName,
	EditButton,
	Divider,
	CardContainer,
	NewParamContainer,
} from "./styles";

import StationRequests from "../../utils/Requests/station.request";
import { ActiveStationInterface } from "../../interfaces/station";
import { ParamInterface } from "../../interfaces/param";
import handlerDashboardData from "../../utils/handler/handlerDashboardData";
import ParameterTypeRegistrationModal from "../../components/ParameterTypeRegistrationModal";
import { ParameterTypeRegistrationModalRef } from "../../interfaces/ParameterTypeRegistrationModalRef";
import Loading from "../../components/Loading";

export default function Dashboard() {
	const { id } = useParams();

	const parameterRegistrationModalRef = useRef<ParameterTypeRegistrationModalRef>(null);

	const [station, setStation] = useState<{
		station: ActiveStationInterface;
		parameterTypes: ParamInterface[];
	}>();
	const [charts, setCharts] = useState<any[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		getDashboardData();
	}, []);

	const getDashboardData = async () => {
		if (id) {
			const stationInfo = await StationRequests.getStation(id);

			if (stationInfo) {
				setStation(stationInfo);
				const options = await handlerDashboardData(stationInfo);

				setCharts(options);
				setIsLoading(false);
			}
		} else {
			alert("Estação não encontrada");
		}
	};

	return (
		<>
			<ParameterTypeRegistrationModal ref={parameterRegistrationModalRef} idStation={id} />
			<Container>
				<Header>
					<PageTitle>
						<Title>Dashboard</Title>

						<Divider src={DividerIcon} alt="Divisor" />

						<StationName>
							<Subtitle>{station?.station.name}</Subtitle>
							<EditButton src={EditIcon} alt="Editar estação" />
						</StationName>
					</PageTitle>
				</Header>
				<CardContainer>
					{!isLoading ? (
						charts.length !== 0 ? (
							charts.map((chart, index) => <CardChart options={chart.options} title={chart.title} key={index} />)
						) : (
							<p>Nenhum dado encontrado para estação selecionada.</p>
						)
					) : (
						<Loading />
					)}
				</CardContainer>
				<NewParamContainer>
					<Button title="Cadastrar parâmetro" onClick={() => parameterRegistrationModalRef.current?.showModal()} />
				</NewParamContainer>
			</Container>
		</>
	);
}
