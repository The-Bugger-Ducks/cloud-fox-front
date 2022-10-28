import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Minimap from "../Minimap";
import { MinimapRef } from "../../interfaces/Minimap";
import { StationEditModalRef } from "../../interfaces/StationEditModalRef";
import { ActiveStationInterface } from "../../interfaces/station";
import StationRequests from "../../utils/Requests/station.request";
import { Container, Body, Main, Footer, Title, Questions, Label, Input, TextArea } from "./styles";

const StationEditModal = forwardRef<StationEditModalRef, { station: ActiveStationInterface }>((props, ref) => {
	const [isDisabled, setIsDisabled] = useState<boolean>(true);
	const [nameStation, setNameStation] = useState<string>(props.station.name);
	const [desriptionStation, setDescriptionStation] = useState<string>(props.station.description);
	const minimapRef = useRef<MinimapRef>(null);
	const navigate = useNavigate();

	const closeModal = () => {
		setIsDisabled(true);
	};

	const editStation = async () => {
		const latLng: any = minimapRef.current?.getLatLng();

		// const payload = {
		// 	id: props.station?.id ?? "",
		// 	name: nameStation,
		// 	lat: latLng.lat,
		// 	lon: latLng.lng,
		// 	description: desriptionStation,
		// };
		// console.log(payload);

		if (latLng) {
			const response = await StationRequests.editStation(
				props.station?.id ?? "",
				nameStation,
				latLng.lat,
				latLng.lng,
				desriptionStation
			);

			if (response !== "error") {
				alert("Estação atualizada com sucesso!");
				closeModal();
				navigate("/dashboard/" + props.station?.id);
			} else {
				alert("Não foi possível atualizar a estação");
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
			<Container disabled={isDisabled}>
				<Body>
					<Title>Editar estação</Title>
					<Main>
						<Questions>
							<Label>Nome da estação</Label>
							<Input type="text" defaultValue={nameStation} onChange={(event) => setNameStation(event.target.value)} />

							<Label>Descrição da estação</Label>
							<TextArea
								defaultValue={desriptionStation}
								onChange={(event) => setDescriptionStation(event.target.value)}
								cols={30}
							/>

							<Label>Localização da estação</Label>
							<Minimap ref={minimapRef} />
						</Questions>
					</Main>
					<Footer>
						<Button width="45%" title="Cancelar" backgroundColor="#A0938C" onClick={() => closeModal()} />
						<Button width="45%" title="Editar" onClick={() => editStation()} />
					</Footer>
				</Body>
			</Container>
		</>
	);
});

export default StationEditModal;
