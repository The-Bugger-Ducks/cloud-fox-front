import Button from '../../components/Button';
import Sidebar from '../../components/Sidebar';

import theme from '../../global/theme';
import {
  Container,
  Title,
  ProfileContainer,
  Avatar,
  UserName,
  UserEmail,
  Topic,
  LevelCards,
  LevelCard,
  ImageCard,
  TitleCard,
  SubtitleCard,
} from './styles';
import { oneIcon, threeIcon, twoIcon } from '../../assets/icons';

export default function MyProfile() {
  return (
    <>
      <Sidebar />
      <Container>
        <Title>MEU PERFIL</Title>
        <ProfileContainer>
          <Avatar
            src={'https://avatars.githubusercontent.com/u/78885451?v=4'}
          />
          <UserName>Lucinda Pereira</UserName>
          <UserEmail>lucinda.pereira@gmail.com</UserEmail>
        </ProfileContainer>

        <Topic>Nível de permissão</Topic>
        <LevelCards>
          <LevelCard>
            <ImageCard src={oneIcon} />
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
            <ImageCard src={twoIcon} />
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
            <ImageCard src={threeIcon} />
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
