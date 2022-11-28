import { BoldText, ImageSensor, Row, SensorContainer, SensorName, SensorSection, Text, VarText } from "../styles";

import SensorIMG from "../../../assets/sensors/velocidadedovento.png"

export default function WindSpeed() {
	return (
		<SensorContainer>
			<SensorSection>
				<SensorName>Velocidade do vento</SensorName>
				<Text>
					O anemômetro é a ferramenta  utilizada para medir a velocidade do vento.
					Por meio das voltas que as conchas causam em seu eixo.
				</Text>
				<Text>
					Quanto mais voltas o anemômetro der em seu próprio eixo, maior é a velocidade do vento.
				</Text>
				<Text>
					A velocidade do vento é calculada com base na média em um período curto.
				</Text>
				<Text>
					<BoldText>Matérias envolvidas: </BoldText>
					Matemática e Física
				</Text>
				<BoldText>Cálculo: </BoldText>
				<Row>
					<VarText>
						ƒ = RPS = (voltas . 60) / tempo
					</VarText>
					<VarText>
						R = raio
					</VarText>
					<VarText>
						V = (2&#960; . ƒ . R) / 60
					</VarText>
					<VarText>
						V (KM/h) = V . 3,6
					</VarText>
				</Row>

			</SensorSection>
			<ImageSensor src={SensorIMG} alt="Sensor - Velocidade do vento" />

		</SensorContainer>
	)
}
