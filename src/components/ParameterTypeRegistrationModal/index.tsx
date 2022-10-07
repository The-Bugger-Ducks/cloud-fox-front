import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import Button from "../Button";
import { ParameterTypeRegistrationModalRef } from "../../interfaces/ParameterTypeRegistrationModalRef";
import {
  Container,
  Body,
  Main,
  Footer,
  Title,
  Questions,
  Label,
  Input,
} from "./styles";

const ParameterRegistrationModal = forwardRef<
  ParameterTypeRegistrationModalRef,
  { idStation?: string }
>((props, ref) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [nameParameter, setPameParameter] = useState<string>("");
  const [unitParameter, setUnitParameter] = useState<string>("");
  const [factorParameter, setFactorParameter] = useState<number>(0);
  const [typeParameter, setTypeParameter] = useState<string>("");
  const [idStation, setIdStation] = useState<string>("");

  const closeModal = () => {
    setIsDisabled(true);
  };

  useEffect(() => {
    setIdStation(props.idStation ? props.idStation : "");
  }, []);

  const createParameter = () => {
    const payload = {
      name: nameParameter,
      unit: unitParameter,
      factor: factorParameter,
      type: typeParameter,
      stationId: idStation,
    };
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
            <Label>Nome do parâmetro</Label>
            <Input
              type="text"
              onChange={(event) => setPameParameter(event.target.value)}
            />

            <Label>Nome da estação</Label>
            <Input
              type="text"
              placeholder="Unidade de medida"
              onChange={(event) => setUnitParameter(event.target.value)}
            />

            <Label>Fator</Label>
            <Input
              type="number"
              onChange={(event) =>
                setFactorParameter(parseInt(event.target.value))
              }
            />

            <Label>Tipo de parâmetro</Label>
            <Input
              type="text"
              onChange={(event) => setTypeParameter(event.target.value)}
            />
          </Questions>
        </Main>
        <Footer>
          <Button
            title="Cancelar"
            backgroundColor="#A0938C"
            onClick={() => closeModal()}
          />
          <Button title="Cadastrar" onClick={() => createParameter()} />
        </Footer>
      </Body>
    </Container>
  );
});

export default ParameterRegistrationModal;
