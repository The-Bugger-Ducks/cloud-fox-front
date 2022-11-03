import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import Button from "../../components/Button";
import { MinimapRef } from "../../interfaces/Minimap";
import { StationRegistrationModalRef } from "../../interfaces/StationRegistrationModalRef";
import Minimap from "../Minimap";
import StationRequests from "../../utils/Requests/station.request";
import { ActiveStationInterface } from "../../interfaces/station";
import { Container, Body, Main, Footer, Title, Questions, Label, Input, TextArea } from "./styles";
import { useNavigate } from "react-router-dom";

const StationRegistrationModal = forwardRef<StationRegistrationModalRef, { station?: ActiveStationInterface }>(
	(props, ref) => {
		const [isDisabled, setIsDisabled] = useState<boolean>(true);
		const [nameStation, setNameStation] = useState<string>(props.station?.name ?? "");
		const [desriptionStation, setDescriptionStation] = useState<string>(props.station?.description ?? "");
		const [idStation, setIdStation] = useState<string>(props.station?.id ?? "");
		const minimapRef = useRef<MinimapRef>(null);
		const navigate = useNavigate();

		const closeModal = () => {
			setIsDisabled(true);
		};

		const createStation = async () => {
			const latLng: any = minimapRef.current?.getLatLng();

			if (latLng) {
				let response = props.station
					? await StationRequests.editStation(idStation, nameStation, latLng.lat, latLng.lng, desriptionStation)
					: await StationRequests.createStation(idStation, nameStation, latLng.lat, latLng.lng, desriptionStation);

				if (response !== "error") {
					props.station ? alert("Estação atualizada com sucesso!") : alert("Estação cadastrada com sucesso!");
					closeModal();
					navigate("/dashboard/" + idStation);
				} else {
					props.station ? alert("Não foi possível atualizar a estação") : alert("Não foi possível cadastrar a estação");
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
						<Title>{props.station ? "Editar" : "Cadastrar"} estação</Title>
						<Main>
							<Questions>
								<Label>MAC Address da estação</Label>
								<Input
									type="text"
									defaultValue={idStation}
									placeholder="Ex.: AAHBCUTOSHFE"
									onChange={(event) => setIdStation(event.target.value)}
								/>

								<Label>Nome da estação</Label>
								<Input
									type="text"
									defaultValue={nameStation}
									placeholder="Ex.: Escola Fulano de Tal"
									onChange={(event) => setNameStation(event.target.value)}
								/>

								<Label>Descrição da estação</Label>
								<TextArea
									defaultValue={desriptionStation}
									placeholder="Ex.: Estação pluviométrica"
									onChange={(event) => setDescriptionStation(event.target.value)}
								/>

								<Label>Localização da estação</Label>
								<Minimap ref={minimapRef} />
							</Questions>
						</Main>
						<Footer>
							<Button width="45%" title="Cancelar" backgroundColor="#A0938C" onClick={() => closeModal()} />
							<Button width="45%" title={props.station ? "Editar" : "Cadastrar"} onClick={() => createStation()} />
						</Footer>
					</Body>
				</Container>
			</>
		);
	}
);

export default StationRegistrationModal;
