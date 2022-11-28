import { BoldText, ImageSensor, ImageTableSensor, SensorContainer, SensorName, SensorSection, Text } from "../styles";

import SensorIMG from "../../../assets/sensors/direcaodovento.png"
import SensorTableIMG from "../../../assets/sensors/tabeladirecaodovento.png"

export default function WindDirection() {
	return (
		<SensorContainer>
			<SensorSection>
				<SensorName>Direção do vento</SensorName>
				<Text>
					A direção do vento vai das áreas de maior pressão para as de menor pressão para que tudo fique equilibrado,
					assim formando um movimento de ar “vento”.
				</Text>
				<Text>
					De acordo com o deslocamento da pá,
					varia-se o valor da tensão de saída e consequentemente esta tensão é associada a uma direção
				</Text>
				<Text>
					<BoldText>Matérias envolvidas: </BoldText>
					Matemática e Física
				</Text>
				<BoldText>Dados: </BoldText>
				<div>
					<ImageTableSensor src={SensorTableIMG} alt="Sensor - Direção do vento" />
				</div>
				<Text>
					Com base na tensão emitida pelo sensor, obtemos a posição do indicador da direção do vento
				</Text>

			</SensorSection>
			<ImageSensor src={SensorIMG} alt="Sensor - Direção do vento" />

		</SensorContainer>
	)
}
