import React from 'react'

import { Link } from 'react-router-dom'

import 'leaflet/dist/leaflet.css'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from 'react-leaflet'

import { ActiveStationInterface } from '../../interfaces/station'
import mapIcon from '../../utils/Leaflet/mapIcon'

import { Container } from './styles'

export default function Map ({ stations = [] }: { stations: ActiveStationInterface[] }) {
  const StationMarkerList = () => {
    return (
      <>
        {stations.map(station => (
          <Marker
            key={station.id}
            position={[station.lat, station.lon]}
            icon={mapIcon}
          >
            <Popup minWidth={90}>
              <Link to={`/dashboard/${station.id}`}>
                {station.name}
              </Link>
            </Popup>
          </Marker>
        ))}
      </>
    )
  }

  return (
    <Container>
      <MapContainer center={[-23.1895062, -45.8630127]} zoom={13} >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <StationMarkerList />
      </MapContainer>
    </Container>
  )
}
