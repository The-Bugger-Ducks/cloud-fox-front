import CustomHighchart from '../CustomHighchart'
import { Title, CardContainer, Border, Content } from './styles'

interface CardProps {
  options: Object
  title: string
}

export default function CardChart ({ options, title }: CardProps) {
  return (
    <CardContainer>
      <Title title={title}>{title}</Title>
      <Border>
        <Content>
          <CustomHighchart options={options} />
        </Content>
      </Border>
    </CardContainer>
  )
}
