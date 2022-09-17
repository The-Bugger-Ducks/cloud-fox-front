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

import { StationRequests } from "../../utils/Requests/station.request";
import { DashboardRequests } from "../../utils/Requests/dashboard.request";

import { ActiveStationInterface } from "../../interfaces/station";
import { DashboardInterface } from "../../interfaces/dashboard";

export default function Dashboard() {
  const stationRequests = new StationRequests();
  const dashboardRequests = new DashboardRequests();
  const { id } = useParams();

  const defaultInitialDate = new Date(1663383600);
  const defaultFinallDate = new Date(1663642801);

  const [station, setStation] = useState<ActiveStationInterface | undefined>();
  const [charts, setCharts] = useState<any[]>();

  useEffect(() => {
    getStation();
    getDashboardData();
  }, []);

  const getStation = async () => {
    if (id) {
      const response = await stationRequests.getStationById(id);
      setStation(response);
    } else {
      alert("Estação não encontrada");
    }
  };

  const getDashboardData = async () => {
    if (id) {
      const response = await dashboardRequests.getStationData(id);
      console.log(response);
      let chartsOptions: any[] = [];

      response?.forEach((data) => {
        if (data.pluvValue && data.pluvUnit) {
          chartsOptions.push({
            title: "Sensor pluviométrico",
            options: {
              chart: {
                type: "spline",
              },
              title: {
                text: "Pluviômetro",
              },
              yAxis: {
                title: {
                  text: `Total de ${data.pluvUnit.toUpperCase()} chovidos`,
                },
                tickInterval: 1,
              },
              series: [
                {
                  name: `${data.pluvUnit.toUpperCase()} de chuva captados pela estação no intervalo de tempo do dia ${defaultInitialDate.toLocaleDateString()} até ${defaultFinallDate.toLocaleDateString()}}`,
                  color: "#AA55DD",
                  data: Array.isArray(data.pluvValue)
                    ? data.pluvValue
                    : [data.pluvValue],
                },
              ],
            },
          });
        }
      });

      setCharts(chartsOptions);
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
              <Subtitle>{station?.id}</Subtitle>
              <EditButton src={EditIcon} alt="Editar estação" />
            </StationName>
          </PageTitle>

          <Filter src={FilterIcon} alt="Filtrar gráficos" />
        </Header>

        <CardContainer>
          {charts &&
            charts.map((chart, index) => (
              <CardChart options={chart.options} title={chart.title} />
            ))}
        </CardContainer>
      </Container>
    </>
  );
}
