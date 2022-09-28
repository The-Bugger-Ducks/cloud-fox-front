import { forwardRef, useImperativeHandle, useState } from "react";
import { Container, Body, Main, Footer, Title } from "./styles";
import Button from "../../components/Button";
import { StationRegistrationModalRef } from "../../interfaces/StationRegistrationModalRef";

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
