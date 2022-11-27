import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import CardChart from "../../components/CardChart";
import { EditIcon, DividerIcon, AlertIcon } from "../../assets/icons";
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
	LoadingContainer,
	AlertButton,
	StationInfo,
	StationInfoContent,
	CustomAlert,
} from "./styles";

import StationRequests from "../../utils/Requests/station.request";
import { ActiveStationInterface } from "../../interfaces/station";
import { ParamInterface } from "../../interfaces/param";
import handlerDashboardData from "../../utils/handler/handlerDashboardData";
import ParameterTypeRegistrationModal from "../../components/ParameterTypeRegistrationModal";
import { ParameterTypeRegistrationModalRef } from "../../interfaces/ParameterTypeRegistrationModalRef";
import Loading from "../../components/Loading";
import { AuthContext } from "../../context/AuthContext";
import { StationModalRef } from "../../interfaces/StationModalRef";
import StationModal from "../../components/StationModal";
import { StatusModalRef } from "../../interfaces/StatusModalRef";
import StatusModal from "../../components/StatusModal";

export default function Dashboard() {
	const { id } = useParams();
	const { userInfo } = useContext(AuthContext);
	const isSimpleUser = !userInfo?.role || userInfo?.role === "simple";

	const parameterRegistrationModalRef = useRef<ParameterTypeRegistrationModalRef>(null);
	const stationModalRef = useRef<StationModalRef>(null);
	const statusModalRef = useRef<StatusModalRef>(null);

	const [station, setStation] = useState<{
		station: ActiveStationInterface;
		parameterTypes: ParamInterface[];
	}>();
	const [charts, setCharts] = useState<any[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [hasError, setHasError] = useState<boolean>(false);

	useEffect(() => {
		getDashboardData();
	}, []);

	const getDashboardData = async () => {
		if (id) {
			const stationInfo = await StationRequests.getStation(id);

			if (stationInfo) {
				setStation(stationInfo);
				const options = await handlerDashboardData(stationInfo);

				if (options.error) {
					setHasError(true);
					console.log(hasError);
				} else {
					setHasError(false);
				}

				setCharts(options.options);
				setIsLoading(false);
			}
		} else {
			alert("Estação não encontrada");
		}
	};

	return (
		<>
			<ParameterTypeRegistrationModal ref={parameterRegistrationModalRef} idStation={id} />
			{!isLoading && <StationModal ref={stationModalRef} station={station!.station} />}
			{!isLoading && <StatusModal ref={statusModalRef} />}
			<Container>
				<Header>
					<PageTitle>
						<Title>Dashboard</Title>

						{!isLoading && (
							<StationInfo>
								<StationInfoContent>
									<Divider src={DividerIcon} alt="Divisor" />
									<StationName>
										<Subtitle>{station?.station.name}</Subtitle>
										{/* {!isSimpleUser && <EditButton src={EditIcon} alt="Editar estação" />} */}
										<EditButton
											src={EditIcon}
											alt="Editar estação"
											onClick={() => stationModalRef.current?.showModal()}
										/>
									</StationName>
								</StationInfoContent>
								<AlertButton
									src={AlertIcon}
									alt="Ver alertas da estação"
									onClick={() => statusModalRef.current?.showModal()}
								/>
							</StationInfo>
						)}
					</PageTitle>
				</Header>

				<CardContainer>
					{!isLoading && hasError && (
						<CustomAlert severity="warning">
							Não foi possível carregar as informações de todos os gráficos corretamente!
						</CustomAlert>
					)}
					{/* <CustomAlert severity="warning">
						Não foi possível carregar as informações de todos os gráficos corretamente!
					</CustomAlert> */}

					{!isLoading ? (
						charts.length !== 0 ? (
							charts.map((chart, index) => <CardChart options={chart.options} title={chart.title} key={index} />)
						) : (
							<p>Nenhum dado encontrado para estação selecionada.</p>
						)
					) : (
						<LoadingContainer>
							<Loading />
						</LoadingContainer>
					)}
				</CardContainer>
				{!isLoading && !isSimpleUser && (
					<NewParamContainer>
						<Button title="Adicionar parâmetros" onClick={() => parameterRegistrationModalRef.current?.showModal()} />
					</NewParamContainer>
				)}
			</Container>
		</>
	);
}
