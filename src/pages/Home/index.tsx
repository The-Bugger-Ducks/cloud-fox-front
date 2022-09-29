import { useEffect, useState } from 'react'

import Map from '../../components/Map'
import CardStation from '../../components/CardStation'
import Button from '../../components/Button'
import { Container, Title, CardContainer, ButtonContainer } from './styles'

import StationRequests from '../../utils/Requests/station.request'
import { ActiveStationInterface } from '../../interfaces/station'

export default function Home () {
  const [stations, setStations] = useState<
  ActiveStationInterface[] | undefined
  >([])

  useEffect(() => {
    getStations()
  }, [])

  const getStations = async () => {
    const response = await StationRequests.getStations()
    setStations(response)
  }

  return (
    <>
      <Container>
        <Title>Homepage</Title>
        <Map stations={stations ?? []} />
        <CardContainer>
          {(stations != null) &&
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
  )
}
