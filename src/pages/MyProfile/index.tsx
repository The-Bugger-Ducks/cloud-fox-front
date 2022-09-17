import { useState, useEffect } from 'react';

import { User } from '../../interfaces/user';
import UserRequests from '../../utils/Requests/user.request';

import Button from '../../components/Button';
import Sidebar from '../../components/Sidebar';

import theme from '../../global/theme';
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
  DeleteIcon,
} from './styles';
import { OneIcon, ThreeIcon, Trash, TwoIcon } from '../../assets/icons';

export default function MyProfile() {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);

  const userId = localStorage.getItem('userId') ?? '';

  const levelCards = [
    {
      icon: OneIcon,
      title: 'Simples',
      subtitle: 'Vizualizar estações e seus respectivos dashboards',
    },
    {
      icon: TwoIcon,
      title: 'Avançado',
      subtitle:
        'Gerenciar estações e sensores e vizualizar dashboards de cada estação',
    },
    {
      icon: ThreeIcon,
      title: 'Administrador',
      subtitle:
        'Gerenciar nível de acesso dos usuários cadastrados, estações e sensores',
    },
  ];

  function levelAccessTitle(level: number) {
    if (
      (level == 1 && user?.role === 'simple') ||
      (level == 2 && user?.role === 'advanced') ||
      (level == 3 && user?.role === 'admin')
    )
      return 'Nível de acesso atual';

    return 'Solicitar nível de acesso';
  }

  function handleLevelAccess() {
    alert(
      'Recurso não disponível no momento, por favor aguarde novas versões do sistema!'
    );
  }

  function handleDeleteAccount() {
    UserRequests.deleteUser(userId);
  }

  useEffect(() => {
    UserRequests.getUser(userId).then(user => {
      setUser(user);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Sidebar />
      <Container>
        {loading ? (
          <>Carregando informações...</>
        ) : (
          <>
            <Title>MEU PERFIL</Title>
            <ProfileContainer>
              <ProfileContent>
                <DeleteIcon>
                  <img src={Trash} onClick={handleDeleteAccount} />
                </DeleteIcon>
                <ProfileInformations>
                  <Avatar src={user?.imgSrc} />
                  <UserName>{user?.username}</UserName>
                  <UserEmail>{user?.email}</UserEmail>
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
                    onClick={handleLevelAccess}
                  />
                </LevelCard>
              ))}
            </LevelCards>
          </>
        )}
      </Container>
    </>
  );
}
