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

import { DashboardRequests } from "../../utils/Requests/dashboard.request";

import { ActiveStationInterface } from "../../interfaces/station";
import { DashboardInterface } from "../../interfaces/dashboard";

export default function Dashboard() {
  const { id } = useParams();
  const dashboardRequests = new DashboardRequests();

  const [station, setStation] = useState<ActiveStationInterface | undefined>();
  const [charts, setCharts] = useState<any[]>();

  useEffect(() => {
    // getStation();
    getDashboardData();
  }, []);

  const getDashboardData = async () => {
    if (id) {
      const response = await dashboardRequests.getDashboardData(id);

      if (!response) {
        alert("Não foram encontrados dados para a estação selecionada");
        return;
      }
      const collectsData: DashboardInterface[] = response.collects;
      const stationData: ActiveStationInterface = response.station;

      let chartsData: any = {
        pluvSerie: [],
        pluvUnit: "",
      };

      collectsData?.forEach((data) => {
        if (data.pluvValue && data.pluvUnit) {
          chartsData.pluvSerie.push([parseInt(data.moment), data.pluvValue]);
          chartsData.pluvUnit = data.pluvUnit;
        }
      });

      let chartsOptions: any = [];

      if (chartsData.pluvSerie.length != 0) {
        chartsOptions.push({
          title: `Dados pluviométrico captados pela estação`,
          options: {
            chart: {
              type: "spline",
            },
            title: {
              text: "",
            },
            yAxis: {
              title: {
                text: `Total de ${chartsData.pluvUnit.toUpperCase()} captados`,
              },
              labels: {
                format: "{value} " + chartsData.pluvUnit.toUpperCase(),
              },
              tickInterval: 1,
            },
            xAxis: {
              type: "datetime",
              dateTimeLabelFormats: {
                weekly: "%e. %b %y",
                twicemonthly: "%e. %b %y",
                monthly: "%b %y",
                twomonths: "%b %y",
                threemonths: "%b %y",
                fourmonths: "%b %y",
                sixmonths: "%b %y",
                yearly: "%Y",
              },
              labels: {
                format: "{value:%b}",
                align: "left",
                x: 3,
              },
            },
            series: [
              {
                name: `${chartsData.pluvUnit.toUpperCase()} de chuva captados pela estação`,
                color: "#AA55DD",
                data: chartsData.pluvSerie,
              },
            ],
          },
        });

        console.log(chartsOptions);
      }

      setCharts(chartsOptions);
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
          {charts &&
            charts.map((chart, index) => (
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
