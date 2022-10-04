import { LatLngLiteral } from 'leaflet';
import 'leaflet/dist/leaflet.css'
import { useState } from 'react';
import mapIcon from '../../utils/Leaflet/mapIcon'
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from 'react-leaflet'

import { Container } from './styles'

function MinimapEvents () {
  const [mousePos, setMousePos] = useState<LatLngLiteral>({ lat: 0, lng: 0 });

  const useMap = useMapEvents({
    click: (event) => {
      setMousePos(event.latlng)
    },
  })

  return (
    <>
        <Marker
          position={[mousePos.lat, mousePos.lng]}
          icon={mapIcon}
        >
          <Popup minWidth={90}>
            Latitude: {mousePos.lat}, Longitude: {mousePos.lng}
          </Popup>
        </Marker>
    </>
  )
}

export default function Minimap () {
  
  return (
    <Container>
      <MapContainer center={[-23.1895062, -45.8630127]} zoom={13} >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MinimapEvents /> 
      </MapContainer>
    </Container>
  )
}
