import weather from "../../assets/weather.svg";
import {
  Title,
  CardContainer,
  Border,
  Content,
  Weather,
  Description,
} from "./styles";

type CardProps = {
  id: number;
  title: string;
  description: string;
};

export default function CardChart({ id, title, description }: CardProps) {
  return (
    <CardContainer>
      <Border>
        <Content>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Content>
      </Border>
      <Weather src={weather} alt="Tempo" />
    </CardContainer>
  );
}
