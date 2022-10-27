import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import Button from "../../components/Button";
import { MinimapRef } from "../../interfaces/Minimap";
import { StationRegistrationModalRef } from "../../interfaces/StationRegistrationModalRef";
import Minimap from "../Minimap";
import StationRequests from "../../utils/Requests/station.request";
import { ParameterTypeRegistrationModalRef } from "../../interfaces/ParameterTypeRegistrationModalRef";
import ParameterTypeRegistrationModal from "../ParameterTypeRegistrationModal";
import { LoadingContainer, Container, Body, Main, Footer, Title, Questions, Label, Input, TextArea } from "./styles";
import Loading from "../Loading";

const StationRegistrationModal = forwardRef<StationRegistrationModalRef, {}>((props, ref) => {
	const [isDisabled, setIsDisabled] = useState<boolean>(true);
	const [nameStation, setNameStation] = useState<string>("");
	const [desriptionStation, setDescriptionStation] = useState<string>("");
	const [idStation, setIdStation] = useState<string>("");
	const minimapRef = useRef<MinimapRef>(null);
	const [isLoading, setIsloading] = useState<boolean>(false);
	const parameterRegistrationModalRef = useRef<ParameterTypeRegistrationModalRef>(null);

	const closeModal = () => {
		setIsDisabled(true);
	};

	const createStation = async () => {
		setIsloading(true);
		const latLng: any = minimapRef.current?.getLatLng();

		if (latLng) {
			const payload = {
				id: idStation,
				name: nameStation,
				lat: latLng.lat,
				lon: latLng.lng,
				description: desriptionStation,
			};

			const response = await StationRequests.createStation(
				payload.id,
				payload.name,
				payload.lat,
				payload.lon,
				payload.description
			);

			setIsloading(false);

			if (response !== "error") {
				closeModal();
				parameterRegistrationModalRef.current?.showModal();
			} else {
				alert("Não foi possível cadastrar estação");
			}

			closeModal();
		} else {
			alert("Latitude e longitude inválida");
		}
	};

	useImperativeHandle(ref, () => ({
		showModal: () => setIsDisabled(false),
	}));

	return (
		<>
			<ParameterTypeRegistrationModal ref={parameterRegistrationModalRef} idStation={idStation} />

			<Container disabled={isDisabled}>
				<LoadingContainer disabled={!isLoading}>
					<Loading width={250} height={250} />
				</LoadingContainer>
				<Body>
					<Main>
						<Title>Cadastrar estação</Title>
						<Questions>
							<Label>MAC Address da estação</Label>
							<Input type="text" onChange={(event) => setIdStation(event.target.value)} />

							<Label>Nome da estação</Label>
							<Input
								type="text"
								placeholder="Escola Fulano de Tal"
								onChange={(event) => setNameStation(event.target.value)}
							/>

							<Label>Descrição da estação</Label>
							<TextArea onChange={(event) => setDescriptionStation(event.target.value)} />

							<Label>Localização da estação</Label>
							<Minimap ref={minimapRef} />
						</Questions>
					</Main>
					<Footer>
						<Button title="Cancelar" backgroundColor="#A0938C" onClick={() => closeModal()} />
						<Button title="Cadastrar" onClick={() => createStation()} />
					</Footer>
				</Body>
			</Container>
		</>
	);
});

export default StationRegistrationModal;
