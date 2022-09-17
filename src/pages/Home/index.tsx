import Sidebar from "../../components/Sidebar";
import Map from "../../components/Map";
import CardStation from "../../components/CardStation";
import Button from "../../components/Button";
import { Container, Title, CardContainer, ButtonContainer } from "./styles";

export default function Home() {
  return (
    <>
      <Sidebar />
      <Container>
        <Title>Homepage</Title>
        <Map />
        <CardContainer>
          <CardStation
            id={1}
            title="Escola Professor Francisco de Azevedo"
            description="Monitoramento pluviométrico"
          />
        </CardContainer>

        <ButtonContainer>
          <Button title="Ativar estação" />
        </ButtonContainer>
      </Container>
    </>
  );
}
