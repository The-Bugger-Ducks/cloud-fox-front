import { LatLngLiteral } from 'leaflet';
import 'leaflet/dist/leaflet.css'
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import mapIcon from '../../utils/Leaflet/mapIcon'
import {
  MapContainer,
  Marker,
  TileLayer,
  useMapEvents,
} from 'react-leaflet'

import { Container } from './styles'
import { MinimapEventsRef } from '../../interfaces/MinimapEventsRef';
import { MinimapRef } from '../../interfaces/Minimap';

const MinimapEvents = forwardRef<MinimapEventsRef, {}> (
  (props, ref) => {
    const [mousePos, setMousePos] = useState<LatLngLiteral>({ lat: 0, lng: 0 });

    const useMap = useMapEvents({
      click: (event) => {
        setMousePos(event.latlng)
      },
    })

    useImperativeHandle(ref, () => ({
      getLatLng: () => { return mousePos }
    }));

    return (
      <>
          <Marker
            position={[mousePos.lat, mousePos.lng]}
            icon={mapIcon}
          />
      </>
    )
  }
) 

const Minimap = forwardRef<MinimapRef, {}> (
  (props, ref) => {
    const minimapEventsRef = useRef<MinimapEventsRef>(null);

    useImperativeHandle(ref, () => ({
      getLatLng: () => {
        const latLng = minimapEventsRef.current?.getLatLng()
        return latLng
      }
    }));
    
    return (
      <Container>
        <MapContainer center={[-23.1895062, -45.8630127]} zoom={13} >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MinimapEvents ref={minimapEventsRef} /> 
        </MapContainer>
      </Container>
    )
  }
)

export default Minimap