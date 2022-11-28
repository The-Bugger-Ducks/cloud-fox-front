import { Container, Title } from "./styles";

import Pluviometer from "./components/Pluviometer";
import WindSpeed from "./components/WindSpeed";
import WindDirection from "./components/WindDirection";
import TemperatureAndHumidity from "./components/TemperatureAndHumidity";

export default function AboutSensors() {
	return (
		<>
			<Container>
				<Title>Sobre os sensores</Title>

				<WindSpeed />
				<Pluviometer />
				<WindDirection />
				<TemperatureAndHumidity />

			</Container>
		</>
	)
}
