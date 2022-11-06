import { useContext, useEffect, useRef, useState } from "react";

import Map from "../../components/Map";
import CardStation from "../../components/CardStation";
import Button from "../../components/Button";
import StationModal from "../../components/StationModal";
import { Container, Title, CardContainer, ButtonContainer, LoadingContainer } from "./styles";

import StationRequests from "../../utils/Requests/station.request";
import { ActiveStationInterface } from "../../interfaces/station";
import { StationModalRef } from "../../interfaces/StationModalRef";
import Loading from "../../components/Loading";
import { AuthContext } from "../../context/AuthContext";

export default function Home() {
	const stationModalRef = useRef<StationModalRef>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [stations, setStations] = useState<ActiveStationInterface[] | undefined>([]);
	const { userInfo } = useContext(AuthContext);
	const isSimpleUser = !userInfo?.role || userInfo?.role === "simple";

	useEffect(() => {
		getStations();
	}, []);

	const getStations = async () => {
		const response = await StationRequests.getStations(isSimpleUser);
		setIsLoading(false);
		setStations(response);
	};

	const showModalStationRegistration = () => {
		stationModalRef.current?.showModal();
	};

	return (
		<>
			<StationModal ref={stationModalRef} />
			<Container>
				<Title>Homepage</Title>
				<Map stations={stations ?? []} />
				<CardContainer>
					{!isLoading ? (
						stations != null &&
						stations.map((station, index) => (
							<CardStation key={index} id={station.id} title={station.name} description={station.description} />
						))
					) : (
						<LoadingContainer>
							<Loading />
						</LoadingContainer>
					)}
				</CardContainer>

				{!isSimpleUser && (
					<ButtonContainer>
						<Button title="Criar estação" onClick={() => showModalStationRegistration()} />
					</ButtonContainer>
				)}
			</Container>
		</>
	);
}
