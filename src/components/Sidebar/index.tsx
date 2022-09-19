
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

  useEffect(() => {
    UserRequests.getUser(userId).then(user => {
      if (user?.role === 'admin') {
        routes.push(
          {
            name: 'Usuários privilegiados',
            path: '/privileged-users'
          }
        )
      }
    })
  }, [userId])

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
