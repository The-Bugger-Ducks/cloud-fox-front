import { useContext, useEffect, useRef, useState } from "react";

import Map from "../../components/Map";
import CardStation from "../../components/CardStation";
import Button from "../../components/Button";
import StationRegistrationModal from "../../components/StationRegistrationModal";
import { Container, Title, CardContainer, ButtonContainer } from "./styles";

import StationRequests from "../../utils/Requests/station.request";
import { ActiveStationInterface } from "../../interfaces/station";
import { StationRegistrationModalRef } from "../../interfaces/StationRegistrationModalRef";
import { AuthContext } from "../../context/AuthContext";

export default function Home() {
	const stationRegistrationModalRef = useRef<StationRegistrationModalRef>(null);
	const [stations, setStations] = useState<ActiveStationInterface[] | undefined>([]);
	const { userInfo } = useContext(AuthContext);
	const isSimpleUser = !userInfo?.role || userInfo?.role === "simple";

	useEffect(() => {
		getStations();
	}, []);

	const getStations = async () => {
		const response = await StationRequests.getStations(isSimpleUser);
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
					{stations != null &&
						stations.map((station, index) => (
							<CardStation key={index} id={station.id} title={station.name} description={station.description} />
						))}
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
