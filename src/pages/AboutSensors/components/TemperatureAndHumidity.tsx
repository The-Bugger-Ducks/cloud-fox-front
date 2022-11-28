import { BoldText, ImageSensor, SensorContainer, SensorName, SensorSection, Text } from "../styles";

import SensorIMG from "../../../assets/sensors/temperaturaeumidade.png"

export default function TemperatureAndHumidity() {
	return (
		<SensorContainer>
			<SensorSection>
				<SensorName>Temperatura e umidade do ar</SensorName>
				<Text>
					A Temperatura é uma grandeza física escalar que pode ser definida como a medida do grau de agitação
					das moléculas que compõem um corpo. Quanto maior a agitação molecular, maior será a temperatura do
					corpo e mais quente ele estará e vice-versa.
				</Text>
				<Text>
					A umidade do ar é um indicador da presença de vapor de água na atmosfera. Ela é um elemento climático
					importante, pois interfere na caracterização climática de uma localidade, especialmente na definição
					de climas úmidos e secos. A umidade do ar também é chamada de umidade atmosférica.
				</Text>

			</SensorSection>
			<ImageSensor src={SensorIMG} alt="Sensor - temperatura e umidade do ar" />

		</SensorContainer>
	)
}
