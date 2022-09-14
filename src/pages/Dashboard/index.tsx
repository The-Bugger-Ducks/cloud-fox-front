import Sidebar from "../../components/Sidebar";
import Card from "../../components/Card";
import editIcon from "../../assets/edit.svg";
import filterIcon from "../../assets/filter.svg";
import divider from "../../assets/divider.svg";
import {
  Container,
  Header,
  PageTitle,
  Title,
  Subtitle,
  StationName,
  EditButton,
  Divider,
  Filter,
  CardContainer,
} from "./styles";

export default function Dashboard() {
  return (
    <>
      <Sidebar />
      <Container>
        <Header>
          <PageTitle>
            <Title>Dashboard</Title>

            <Divider src={divider} alt="Divisor" />

            <StationName>
              <Subtitle>Escola Professor Francisco de Azevedo</Subtitle>
              <EditButton src={editIcon} alt="Editar estação" />
            </StationName>
          </PageTitle>

          <Filter src={filterIcon} alt="Filtrar gráficos" />
        </Header>

        <CardContainer>
          <Card />
        </CardContainer>
      </Container>
    </>
  );
}
