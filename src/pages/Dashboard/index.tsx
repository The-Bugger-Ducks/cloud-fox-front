import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Sidebar from "../../components/Sidebar";
import CardChart from "../../components/CardChart";
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

import DashboardRequests from "../../utils/Requests/dashboard.request";

import { ActiveStationInterface } from "../../interfaces/station";
import handlerDashboardData from "../../utils/Handlers/handlerDashboardData";

export default function Dashboard() {
  const { id } = useParams();

  const [station, setStation] = useState<ActiveStationInterface | undefined>();
  const [charts, setCharts] = useState<any[]>();

  useEffect(() => {
    getDashboardData();
  }, []);

  const getDashboardData = async () => {
    if (id) {
      const response = await DashboardRequests.getDashboardData(id);

      if (response == null) {
        alert("Não foram encontrados dados para a estação selecionada");
        return;
      }

      const stationData: ActiveStationInterface = response.station;
      const collectsData: any = handlerDashboardData(response.collects);

      setCharts(collectsData);
      setStation(stationData);
    } else {
      alert("Estação não encontrada");
    }
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
              <Subtitle>{station?.name}</Subtitle>
              <EditButton src={EditIcon} alt="Editar estação" />
            </StationName>
          </PageTitle>

          <Filter src={FilterIcon} alt="Filtrar gráficos" />
        </Header>

        <CardContainer>
          {charts != null &&
            charts?.map((chart, index) => (
              <CardChart
                options={chart.options}
                title={chart.title}
                key={index}
              />
            ))}
        </CardContainer>
      </Container>
    </>
  );
}
