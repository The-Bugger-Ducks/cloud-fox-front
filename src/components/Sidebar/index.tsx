
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

export default function Sidebar () {
  const userId = localStorage.getItem('userId') ?? ''

  const [routes, setRoutes] = useState([
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
    }
  ])

  useEffect(() => {
    UserRequests.getUser(userId).then(user => {
      console.log(user)

      if (user?.role === 'admin') {
        setRoutes([
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
        ])
      }
    })
  }, [userId])

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
