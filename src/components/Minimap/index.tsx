import { LatLngLiteral } from "leaflet";

import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import mapIcon from "../../utils/Leaflet/mapIcon";
import { MapContainer, Marker, TileLayer, useMapEvents, useMap } from "react-leaflet";

import { Container } from "./styles";
import { MinimapEventsRef } from "../../interfaces/MinimapEventsRef";
import { MinimapRef } from "../../interfaces/Minimap";
import "leaflet/dist/leaflet.css";

const MinimapEvents = forwardRef<MinimapEventsRef, { initialLocal?: { lat: number; lng: number } }>((props, ref) => {
	const [mousePos, setMousePos] = useState<LatLngLiteral>({
		lat: props.initialLocal?.lat ?? 0,
		lng: props.initialLocal?.lng ?? 0,
	});

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

const Minimap = forwardRef<MinimapRef, { initialLocal?: { lat: number; lng: number } }>((props, ref) => {
	const minimapEventsRef = useRef<MinimapEventsRef>(null);

	useImperativeHandle(ref, () => ({
		getLatLng: () => {
			const latLng = minimapEventsRef.current?.getLatLng();
			return latLng;
		},
	}));

	return (
		<Container>
			<MapContainer
				center={[
					props.initialLocal?.lat === 0 ? -23.1895062 : props.initialLocal?.lat ?? 0,
					props.initialLocal?.lng === 0 ? -45.8630127 : props.initialLocal?.lng ?? 0,
				]}
				zoom={13}
			>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<MinimapEvents initialLocal={props.initialLocal} ref={minimapEventsRef} />
			</MapContainer>
		</Container>
	);
});

export default Minimap;
