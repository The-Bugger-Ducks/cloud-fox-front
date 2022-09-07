import Button from '../Button';
import { Container, Title, Buttons } from './styles';

import theme from '../../global/theme';

export default function LoginModal() {
  return (
    <Container>
      <Title>Login</Title>

      <Buttons>
        <Button
          title="Login com Facebook"
          fontColor={theme.colors.white}
          backgroundColor={'#1877F2'}
          marginBottom={'1rem'}
        />
        <Button
          title="Login com Google"
          fontColor={theme.colors.gray}
          backgroundColor={theme.colors.white}
          marginBottom={'1rem'}
        />
        <Button
          title="Login com Apple"
          fontColor={theme.colors.white}
          backgroundColor={theme.colors.black}
        />
      </Buttons>
    </Container>
  );
}
