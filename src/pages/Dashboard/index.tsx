import Sidebar from "../../components/Sidebar";
import Card from "../../components/Card";
// import editIcon from "../../assets/edit.svg";
// import filterIcon from "../../assets/filter.svg";
// import divider from "../../assets/divider.svg";
import { EditIcon, FilterIcon, DividerIcon } from "../../assets/icons";
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
  const options = {
    chart: {
      type: "spline",
    },
    title: {
      text: "",
    },
    yAxis: {
      title: {
        text: "yaxis nome",
      },
      tickInterval: 1,
    },
    series: [
      {
        name: "Minha série",

        color: "#AA55DD",
        data: [1, 2, 1, 4, 3, 6],
      },
    ],
  };

  return (
    <>
      <Sidebar />
      <Container>
        <Header>
          <PageTitle>
            <Title>Dashboard</Title>

            <Divider src={DividerIcon} alt="Divisor" />

            <StationName>
              <Subtitle>Escola Professor Francisco de Azevedo</Subtitle>
              <EditButton src={EditIcon} alt="Editar estação" />
            </StationName>
          </PageTitle>

          <Filter src={FilterIcon} alt="Filtrar gráficos" />
        </Header>

        <CardContainer>
          <Card options={options} title={"Gráfico do sensor pluviométrico"} />
        </CardContainer>
      </Container>
    </>
  );
}
