import { LatLngLiteral } from "leaflet";

import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import mapIcon from "../../utils/Leaflet/mapIcon";
import { MapContainer, Marker, TileLayer, useMapEvents, useMap } from "react-leaflet";

import { Container } from "./styles";
import { MinimapEventsRef } from "../../interfaces/MinimapEventsRef";
import { MinimapRef } from "../../interfaces/Minimap";
import "leaflet/dist/leaflet.css";

const MinimapEvents = forwardRef<MinimapEventsRef, {}>((props, ref) => {
	const [mousePos, setMousePos] = useState<LatLngLiteral>({ lat: 0, lng: 0 });

	const useMapEvent = useMapEvents({
		click: (event) => {
			setMousePos(event.latlng);
		},
	});

	const map = useMap();

	useEffect(() => {
		if (map) {
			setInterval(function () {
				map.invalidateSize();
			}, 100);
		}
	}, [map]);

	useImperativeHandle(ref, () => ({
		getLatLng: () => {
			return mousePos;
		},
	}));

	return (
		<>
			<Marker position={[mousePos.lat, mousePos.lng]} icon={mapIcon} />
		</>
	);
});

const Minimap = forwardRef<MinimapRef, {}>((props, ref) => {
	const minimapEventsRef = useRef<MinimapEventsRef>(null);

	useImperativeHandle(ref, () => ({
		getLatLng: () => {
			const latLng = minimapEventsRef.current?.getLatLng();
			return latLng;
		},
	}));

	return (
		<Container>
			<MapContainer center={[-23.1895062, -45.8630127]} zoom={13}>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<MinimapEvents ref={minimapEventsRef} />
			</MapContainer>
		</Container>
	);
});

export default Minimap;
