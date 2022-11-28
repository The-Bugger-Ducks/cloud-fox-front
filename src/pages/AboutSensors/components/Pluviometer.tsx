import { BoldText, ImageSensor, Row, SensorContainer, SensorName, SensorSection, Text, VarText } from "../styles";

import SensorIMG from "../../../assets/sensors/pluv.png"

export default function Pluviometer() {
	return (
		<SensorContainer>
			<SensorSection>
				<SensorName>Pluviômetro</SensorName>
				<Text>
					O pluviômetro é a ferramenta utilizada para coletar e medir as chuvas.
					A quantidade de água captada é mostrada em milímetros (mm).
				</Text>
				<Text>
					Caso o pulso do pluviômetro estiver calibrado para 0,25mm, em 4 pulsos terá preciptado a quantidade de 1mm.
				</Text>
				<Text>
					Uma preciptação de 1 mm, é equivalente a 1 litro de água em uma área de 1 metro quadrado(m2).
				</Text>
				<Text>
					<BoldText>Matérias envolvidas: </BoldText>
					Matemática
				</Text>
				<BoldText>Cálculo: </BoldText>
				<Row>
					<VarText>
						1mm = 4 . 0.25mm
					</VarText>
					<VarText>
						1mm = 1L/m²
					</VarText>
				</Row>

			</SensorSection>
			<ImageSensor src={SensorIMG} alt="Sensor - Pluviômetro" />

		</SensorContainer>
	)
}
