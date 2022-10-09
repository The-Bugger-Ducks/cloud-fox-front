import { forwardRef, useImperativeHandle, useState } from "react";
import Button from "../Button";
import { ParameterTypeRegistrationModalRef } from "../../interfaces/ParameterTypeRegistrationModalRef";
import ParamRequests from "../../utils/Requests/param.request";
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

  const createParameter = async () => {
    const payload = {
      name: nameParameter,
      unit: unitParameter,
      factor: factorParameter,
      type: typeParameter,
      stationId: idStation,
    };

    const response = await ParamRequests.createParam(
      payload.name,
      payload.unit,
      payload.factor,
      payload.type,
      payload.stationId
    );

    if (response != "error") {
      closeModal();
      alert("Parâmetro cadastrado com sucesso!");
      window.location.reload();
    } else {
      alert("Não foi possível cadastrar o parâmetro");
    }
  };

  useImperativeHandle(ref, () => ({
    showModal: () => {
      setIdStation(props.idStation ? props.idStation : "");
      setIsDisabled(false);
    },
  }));

  return (
    <Container disabled={isDisabled}>
      <Body>
        <Main>
          <Title>Cadastrar parâmetros</Title>
          <Questions>
            <Label>Nome do parâmetro</Label>
            <Input
              type="text"
              onChange={(event) => setPameParameter(event.target.value)}
            />

            <Label>Unidade de medida</Label>
            <Input
              type="text"
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
