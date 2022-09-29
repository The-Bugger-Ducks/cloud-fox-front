import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { User } from '../../interfaces/user'
import UserRequests from '../../utils/Requests/user.request'
import SolicitationRequests from '../../utils/Requests/solicitation.request'

import Button from '../../components/Button'

import theme from '../../global/theme'
import {
  Container,
  Title,
  ProfileContainer,
  ProfileContent,
  ProfileInformations,
  Avatar,
  UserName,
  UserEmail,
  Topic,
  LevelCards,
  LevelCard,
  ImageCard,
  TitleCard,
  SubtitleCard,
  DeleteIcon
} from './styles'
import { OneIcon, ThreeIcon, Trash, TwoIcon } from '../../assets/icons'

interface LevelCardProps {
  icon: string
  title: string
  value: 'simple' | 'advanced' | 'admin'
  subtitle: string
}

export default function MyProfile () {
  const navigate = useNavigate()
  const [user, setUser] = useState<User>()

  const userId = localStorage.getItem('userId') ?? ''

  const levelCards: LevelCardProps[] = [
    {
      icon: OneIcon,
      title: 'Simples',
      value: 'simple',
      subtitle: 'Vizualizar estações e seus respectivos dashboards'
    },
    {
      icon: TwoIcon,
      title: 'Avançado',
      value: 'advanced',
      subtitle:
        'Gerenciar estações e sensores e vizualizar dashboards de cada estação'
    },
    {
      icon: ThreeIcon,
      title: 'Administrador',
      value: 'admin',
      subtitle:
        'Gerenciar nível de acesso dos usuários cadastrados, estações e sensores'
    }
  ]

  function levelAccessTitle (level: number) {
    if (
      (level === 1 && user?.role === 'simple') ||
      (level === 2 && user?.role === 'advanced') ||
      (level === 3 && user?.role === 'admin')
    ) { return 'Nível de acesso atual' }

    return 'Solicitar nível de acesso'
  }

  function handleLevelAccess (role: 'simple' | 'advanced' | 'admin') {
    SolicitationRequests.createSolicitation(userId, role)
  }

  function handleDeleteAccount () {
    const confirmation = window.confirm(
      'Tem certeza que quer deletar a conta?'
    )
    confirmation &&
      UserRequests.deleteUser(userId).then(() => {
        navigate('/home')
        localStorage.clear()
      })
  }

  useEffect(() => {
    if (userId.length === 0) navigate('/login')

    UserRequests.getUser(userId).then(user => setUser(user))
  }, [userId])

  return (
    <>
      <Container>
        {(user == null)
          ? (
          <>Carregando informações...</>
            )
          : (
          <>
            <Title>MEU PERFIL</Title>
            <ProfileContainer>
              <ProfileContent>
                <DeleteIcon>
                  <img
                    alt="ìcone de lixeira para deletar conta"
                    src={Trash}
                    onClick={handleDeleteAccount}
                  />
                </DeleteIcon>
                <ProfileInformations>
                  <Avatar src={user.imgSrc} />
                  <UserName>{user.username}</UserName>
                  <UserEmail>{user.email}</UserEmail>
                </ProfileInformations>
              </ProfileContent>
            </ProfileContainer>
            <Topic>Nível de permissão</Topic>
            <LevelCards>
              {levelCards.map((card, index) => (
                <LevelCard key={index}>
                  <ImageCard src={card.icon} />
                  <TitleCard>{card.title}</TitleCard>
                  <SubtitleCard>{card.subtitle}</SubtitleCard>
                  <Button
                    title={levelAccessTitle(index + 1)}
                    backgroundColor={
                      levelAccessTitle(index + 1) === 'Nível de acesso atual'
                        ? theme.colors.secondary
                        : theme.colors.primary
                    }
                    onClick={() => handleLevelAccess(card.value)}
                  />
                </LevelCard>
              ))}
            </LevelCards>
          </>
            )}
      </Container>
    </>
  )
}
