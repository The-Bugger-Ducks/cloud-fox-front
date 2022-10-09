import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

import StationRequests from "../../utils/Requests/station.request";
import { ActiveStationInterface } from "../../interfaces/station";
import { ParamInterface } from "../../interfaces/param";
import handlerDashboardData from "../../utils/handlers/handlerDashboardData";

export default function Dashboard() {
  const { id } = useParams();

  const [station, setStation] = useState<{
    station: ActiveStationInterface;
    parameterTypes: ParamInterface[];
  }>();

  const [charts, setCharts] = useState<any[]>([]);

  useEffect(() => {
    getDashboardData();
  }, []);

  const getDashboardData = async () => {
    debugger;
    if (id) {
      const stationInfo = await StationRequests.getStation(id);

      if (stationInfo) {
        setStation(stationInfo);
        const options = await handlerDashboardData(stationInfo);

        setCharts(options);
      }
    } else {
      alert("Estação não encontrada");
    }
  };

  return (
    <>
      <Container>
        <Header>
          <PageTitle>
            <Title>Dashboard</Title>

            <Divider src={DividerIcon} alt="Divisor" />

            <StationName>
              <Subtitle>{station?.station.name}</Subtitle>
              <EditButton src={EditIcon} alt="Editar estação" />
            </StationName>
          </PageTitle>

          <Filter src={FilterIcon} alt="Filtrar gráficos" />
        </Header>

        <CardContainer>
          {charts.map((chart, index) => (
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
