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
  const routes = [
    {
      name: "Home",
      path: "/home",
      onClick: () => {}
    },
    {
      name: "Meu Perfil",
      path: "/home",
      onClick: () => {}
    },
    {
      name: "Login",
      path: "/login",
      onClick: () => {}
    },
    {
      name: "Usuários privilegiados",
      path: "/privileged-users",
      onClick: () => {}
    },
  ]


  return (
    <Container>
      <Header>
        <Title>MENU</Title>

        <Navbar>
          {routes.map(route => (
            <NavbarLink to={route.path}>{route.name}</NavbarLink>
          ))}
        </Navbar>
      </Header>

      <Footer>
        <Logo src={logo} alt="logo" />
        <LogoTitle>Cloud Fox</LogoTitle>
      </Footer>
    </Container>
  );
}
