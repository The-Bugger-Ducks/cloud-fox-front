import CustomHighchart from "../../components/CustomHighchart";
import { Title, CardContainer, Border, Content } from "./styles";

type CardProps = {
  options: Object;
  title: string;
};

export default function Card({ options, title }: CardProps) {
  return (
    <CardContainer>
      <Title>{title}</Title>
      <Border>
        <Content>
          <CustomHighchart options={options} />
        </Content>
      </Border>
    </CardContainer>
  );
}
