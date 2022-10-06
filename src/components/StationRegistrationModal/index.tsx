import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import Button from "../../components/Button";
import { MinimapRef } from "../../interfaces/Minimap";
import { StationRegistrationModalRef } from "../../interfaces/StationRegistrationModalRef";
import Minimap from "../Minimap"
import StationRequests from "../../utils/Requests/station.request"
import { Container, Body, Main, Footer, Title, Questions, Label, Input, TextArea } from "./styles";

const StationRegistrationModal = forwardRef<StationRegistrationModalRef, {}>(
  (props, ref) => {
    const [isDisabled, setIsDisabled] = useState<boolean>(true);
    const [nameStation, setNameStation] = useState<string>("");
    const [desriptionStation, setDescriptionStation] = useState<string>("");
    const [idStation, setIdStation] = useState<string>("");
    const minimapRef = useRef<MinimapRef>(null);

    const closeModal = () => {
      setIsDisabled(true);
    };

    const createStation = () => {
      const latLng: any= minimapRef.current?.getLatLng()

      if (latLng) {
        const payload = {
          id: idStation,
          name: nameStation,
          lat: latLng.lat,
          lon:latLng.lng,
          description: desriptionStation
        }

        StationRequests.createStation(payload.id, payload.name, payload.lat, payload.lon, payload.description)
      } else {
        alert("Latitude e longitude inválida")
      }
    }

    useImperativeHandle(ref, () => ({
      showModal: () => setIsDisabled(false),
    }));

    return (
      <Container disabled={isDisabled}>
        <Body>
          <Main>
            <Title>Cadastrar estação</Title>
            <Questions>
              <Label>MAC Address da estação</Label>
              <Input type="text" onChange={(event) => setIdStation(event.target.value)} />

              <Label>Nome da estação</Label>
              <Input type="text" placeholder="Escola Fulano de Tal" onChange={(event) => setNameStation(event.target.value)} />
              
              <Label>Descrição da estação</Label>
              <TextArea onChange={(event) => setDescriptionStation(event.target.value)} />

              <Label>Localização da estação</Label>
              <Minimap ref={minimapRef} />
            </Questions>
          </Main>
          <Footer>
            <Button
              title="Cancelar"
              backgroundColor="#A0938C"
              onClick={() => closeModal()}
            />
            <Button title="Cadastrar" onClick={() => createStation()} />
          </Footer>
        </Body>
      </Container>
    );
  }
);

export default StationRegistrationModal;
