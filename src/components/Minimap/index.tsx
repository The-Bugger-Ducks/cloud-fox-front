import 'leaflet/dist/leaflet.css'
import {
  MapContainer,
  TileLayer,
} from 'react-leaflet'

import { Container } from './styles'

export default function Minimap () {

  return (
    <Container>
      <MapContainer center={[-23.1895062, -45.8630127]} zoom={13} >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </Container>
  )
}
