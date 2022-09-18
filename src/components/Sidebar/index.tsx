import {
  Container,
  Header,
  Title,
  Navbar,
  NavbarLink,
  Footer,
  Logo,
  LogoTitle
} from './styles'

import logo from '../../assets/logo.png'

export default function Sidebar () {
  const routes = [
    {
      name: 'Home',
      path: '/home'
    },
    {
      name: 'Meu Perfil',
      path: '/myProfile'
    },
    {
      name: 'Login',
      path: '/login'
    },
    {
      name: 'Usuários privilegiados',
      path: '/privileged-users'
    }
  ]

  return (
    <Container>
      <Header>
        <Title>MENU</Title>

        <Navbar>
          {routes.map((route, index) => (
            <NavbarLink key={index} to={route.path}>{route.name}</NavbarLink>
          ))}
        </Navbar>
      </Header>

      <Footer>
        <Logo src={logo} alt="logo" />
        <LogoTitle>Cloud Fox</LogoTitle>
      </Footer>
    </Container>
  )
}
