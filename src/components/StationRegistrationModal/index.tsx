import { forwardRef, useImperativeHandle, useState } from "react";
import Button from "../../components/Button";
import { StationRegistrationModalRef } from "../../interfaces/StationRegistrationModalRef";
import Minimap from "../Minimap"
import { Container, Body, Main, Footer, Title, Questions, Label, TextInput, TextArea } from "./styles";

const StationRegistrationModal = forwardRef<StationRegistrationModalRef, {}>(
  (props, ref) => {
    const [isDisabled, setIsDisabled] = useState<boolean>(true);

    const closeModal = () => {
      setIsDisabled(true);
    };

    useImperativeHandle(ref, () => ({
      showModal: () => setIsDisabled(false),
    }));

    return (
      <Container disabled={isDisabled}>
        <Body>
          <Main>
            <Title>Cadastrar estação</Title>
            <Questions>
              <Label>Nome da estação</Label>
              <TextInput type="text" placeholder="Escola Fulano de Tal" />
              
              <Label>Descrição da estação</Label>
              <TextArea />

              <Label>Localização da estação</Label>
              <Minimap />
            </Questions>
          </Main>
          <Footer>
            <Button
              title="Cancelar"
              backgroundColor="#A0938C"
              onClick={() => closeModal()}
            />
            <Button title="Cadastrar" />
          </Footer>
        </Body>
      </Container>
    );
  }
);

export default StationRegistrationModal;
