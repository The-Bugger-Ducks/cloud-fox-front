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
  function handleDeleteAccount() {
    console.log('delete account');
  }

  return (
    <>
      <Sidebar />
      <Container>
        <Title>MEU PERFIL</Title>
        <ProfileContainer>
          <ProfileContent>
            <DeleteIcon>
              <img src={Trash} onClick={handleDeleteAccount} />
            </DeleteIcon>
            <ProfileInformations>
              <Avatar
                src={'https://avatars.githubusercontent.com/u/78885451?v=4'}
              />
              <UserName>Lucinda Pereira</UserName>
              <UserEmail>lucinda.pereira@gmail.com</UserEmail>
            </ProfileInformations>
          </ProfileContent>
        </ProfileContainer>

        <Topic>Nível de permissão</Topic>
        <LevelCards>
          <LevelCard>
            <ImageCard src={OneIcon} />
            <TitleCard>Simples</TitleCard>
            <SubtitleCard>
              Vizualizar estações e seus respectivos dashboards
            </SubtitleCard>
            <Button
              title={'Nível de acesso atual'}
              backgroundColor={theme.colors.secondary}
            />
          </LevelCard>

          <LevelCard>
            <ImageCard src={TwoIcon} />
            <TitleCard>Avançado</TitleCard>
            <SubtitleCard>
              Gerenciar estações e sensores e vizualizar dashboards de cada
              estação
            </SubtitleCard>
            <Button
              title={'Cancelar solicitação'}
              backgroundColor={theme.colors.gray}
            />
          </LevelCard>

          <LevelCard>
            <ImageCard src={ThreeIcon} />
            <TitleCard>Administrativo</TitleCard>
            <SubtitleCard>
              Gerenciar nível de acesso dos usuários cadastrados, estações e
              sensores
            </SubtitleCard>
            <Button title={'Solicitar nível de acesso'} />
          </LevelCard>
        </LevelCards>
      </Container>
    </>
  );
}
