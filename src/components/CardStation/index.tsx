import { useNavigate } from 'react-router-dom'
import weather from '../../assets/weather.svg'
import {
  Title,
  CardContainer,
  Border,
  Content,
  Weather,
  Description
} from './styles'

interface CardProps {
  id: string
  title: string
  description: string
}

export default function CardChart ({ id, title, description }: CardProps) {
  const navigate = useNavigate()

  return (
    <CardContainer onClick={() => navigate('/dashboard/' + id)}>
      <Border>
        <Content>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Content>
      </Border>
      <Weather src={weather} alt="Tempo" />
    </CardContainer>
  )
}
