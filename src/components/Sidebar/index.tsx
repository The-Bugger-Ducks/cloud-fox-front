
import { User } from '../../interfaces/user'
import UserRequests from '../../utils/Requests/user.request'

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
import { useEffect, useState } from 'react'
import SessionController from '../../utils/handlers/SessionController'

const routesDefault = [
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


export default function Sidebar () {
  const [routes, setRoutes] = useState<{name: string, path: string}[]>(routesDefault);

  useEffect(() => {
    setRoutes(prevRoute => {
      const filterRoutes = prevRoute.filter(route => {
        return SessionController.getUserInfo()?.role !== 'admin' ? 
          route.path !== '/login' && route.path !== '/privileged-users' :
          route.path !== '/login'
      })
      return filterRoutes
    })
  }, [])

  

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
