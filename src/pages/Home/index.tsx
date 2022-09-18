import { useEffect, useState } from "react";

import Sidebar from "../../components/Sidebar";
import Map from "../../components/Map";
import CardStation from "../../components/CardStation";
import Button from "../../components/Button";
import { Container, Title, CardContainer, ButtonContainer } from "./styles";

import { StationRequests } from "../../utils/Requests/station.request";
import { ActiveStationInterface } from "../../interfaces/station";

export default function Home() {
  const stationRequests = new StationRequests();

  const [stations, setStations] = useState<
    ActiveStationInterface[] | undefined
  >([]);

  useEffect(() => {
    getStations();
  }, []);

  const getStations = async () => {
    const response = await stationRequests.getStations();
    setStations(response);
  };

  return (
    <>
      <Sidebar />
      <Container>
        <Title>Homepage</Title>
        <Map stations={stations ?? []} />
        <CardContainer>
          {stations &&
            stations.map((station, index) => (
              <CardStation
                key={index}
                id={station.id}
                title={station.name}
                description={station.description}
              />
            ))}
        </CardContainer>

        <ButtonContainer>
          <Button title="Ativar estação" />
        </ButtonContainer>
      </Container>
    </>
  );
}
