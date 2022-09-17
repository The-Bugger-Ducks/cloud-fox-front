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
import Highcharts from "highcharts";

export default function Dashboard() {
  const { id } = useParams();
  const stationRequests = new StationRequests();
  const dashboardRequests = new DashboardRequests();

  const [station, setStation] = useState<ActiveStationInterface | undefined>();
  const [charts, setCharts] = useState<any[]>();

  useEffect(() => {
    // getStation();
    getDashboardData();
  }, []);

  // Trecho comentado enquanto não há rota para tal
  // const getStation = async () => {
  //   if (id) {
  //     const response = await stationRequests.getStationById(id);
  //     setStation(response);
  //   } else {
  //     alert("Estação não encontrada");
  //   }
  // };

  const getDashboardData = async () => {
    if (id) {
      const defaultInitialDate = new Date(1663383600);
      const defaultFinallDate = new Date(1663642801);

      // Trecho comentado enquanto não há compatibilidade entre axios e backend
      // const response = await dashboardRequests.getStationData(id);

      const response = [
        {
          id: "d6ddd86e-d600-4805-b630-9e94980c9679",
          moment: "1663383600",
          pluvValue: 1.2,
          pluvUnit: "mm",
          heatValue: 1.5,
          heatUnit: "ºC",
          atmPresValue: 1.3,
          atmPresUnit: "atm",
          humidityValue: 1.6,
          humidityUnit: "g/Kg",
          WindDirectionValue: 270,
          WindDirectionUnit: "°",
          WindVelocityValue: 1.6,
          WindVelocityUnit: "m/s",
        },
        {
          id: "1e22402a-6f2c-4e98-b1f4-251136cf1ed0",
          moment: "1663470000",
          pluvValue: 1.5,
          pluvUnit: "mm",
          heatValue: 1.5,
          heatUnit: "ºC",
          atmPresValue: 1.3,
          atmPresUnit: "atm",
          humidityValue: 1.6,
          humidityUnit: "g/Kg",
          WindDirectionValue: 270,
          WindDirectionUnit: "°",
          WindVelocityValue: 1.6,
          WindVelocityUnit: "m/s",
        },
        {
          id: "3c31dd75-ad53-4695-8234-54438f4d7672",
          moment: "1663556400",
          pluvValue: 1.3,
          pluvUnit: "mm",
          heatValue: 1.5,
          heatUnit: "ºC",
          atmPresValue: 1.3,
          atmPresUnit: "atm",
          humidityValue: 1.6,
          humidityUnit: "g/Kg",
          WindDirectionValue: 270,
          WindDirectionUnit: "°",
          WindVelocityValue: 1.6,
          WindVelocityUnit: "m/s",
        },
      ];

      let chartsData: any = {
        pluvSerie: [],
        pluvUnit: "",
      };

      response?.forEach((data) => {
        if (data.pluvValue && data.pluvUnit) {
          chartsData.pluvSerie.push([parseInt(data.moment), data.pluvValue]);
          chartsData.pluvUnit = data.pluvUnit;
        }
      });

      let chartsOptions: any = [];

      if (chartsData.pluvSerie.length != 0) {
        chartsOptions.push({
          title: `Dados pluviométrico captados pela estação do dia ${defaultInitialDate.toLocaleDateString()} até ${defaultFinallDate.toLocaleDateString()}`,
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

        setCharts(chartsOptions);
      }
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
              <Subtitle>FATEC</Subtitle>
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
