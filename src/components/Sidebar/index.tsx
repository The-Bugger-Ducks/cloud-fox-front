import {
  Container,
  Header,
  Title,
  Navbar,
  NavbarLink,
  Footer,
  Logo,
  LogoTitle,
} from './styles';

import logo from '../../assets/logo.png';

export default function Sidebar() {
  return (
    <Container>
      <Header>
        <Title>MENU</Title>

        <Navbar>
          <NavbarLink to="/home">Home</NavbarLink>
          <NavbarLink to="/home">Meu Perfil</NavbarLink>
          <NavbarLink to="/login">Login / Logout</NavbarLink>
        </Navbar>
      </Header>

      <Footer>
        <Logo src={logo} alt="logo" />
        <LogoTitle>Cloud Fox</LogoTitle>
      </Footer>
    </Container>
  );
}
