import { useEffect, useRef, useState } from "react";

import Map from "../../components/Map";
import CardStation from "../../components/CardStation";
import Button from "../../components/Button";
import StationRegistrationModal from "../../components/StationRegistrationModal";
import { Container, Title, CardContainer, ButtonContainer, LoadingContainer } from "./styles";

import StationRequests from "../../utils/Requests/station.request";
import { ActiveStationInterface } from "../../interfaces/station";
import { StationRegistrationModalRef } from "../../interfaces/StationRegistrationModalRef";
import Loading from "../../components/Loading";

export default function Home() {
	const stationRegistrationModalRef = useRef<StationRegistrationModalRef>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [stations, setStations] = useState<ActiveStationInterface[] | undefined>([]);

	useEffect(() => {
		getStations();
	}, []);

	const getStations = async () => {
		const response = await StationRequests.getStations();
		setIsLoading(false);
		setStations(response);
	};

	const showModalStationRegistration = () => {
		stationRegistrationModalRef.current?.showModal();
	};

	return (
		<>
			<StationRegistrationModal ref={stationRegistrationModalRef} />
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

				<ButtonContainer>
					<Button title="Criar estação" onClick={() => showModalStationRegistration()} />
				</ButtonContainer>
			</Container>
		</>
	);
}
