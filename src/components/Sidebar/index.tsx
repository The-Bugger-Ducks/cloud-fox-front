import { useEffect, useState, useContext, MouseEvent } from 'react'

import {
  Container,
  Header,
  Title,
  Navbar,
  NavbarLink,
  Footer,
  Logo,
  LogoTitle,
  NavbarSpan
} from './styles'

import logo from '../../assets/logo.png'

import { AuthContext } from '../../context/AuthContext'

interface CustomTreeItemLike {
  icon?: string;
  text?: string;
  path?: string;
  onClick?: (e: MouseEvent) => void;
  invisible?: boolean;
}

export default function Sidebar () {
  const [routes, setRoutes] = useState<CustomTreeItemLike[]>();

  const { userInfo, handleClearUserInfo } = useContext(AuthContext);

  useEffect(() => {
    const newRoutes = filterRoutesByUserRole()
    setRoutes(newRoutes)
  }, [userInfo])


  function filterRoutesByUserRole() {
    let routesFiltered: CustomTreeItemLike[] = [
      {
        text: 'Página Inicial',
        path: '/home'
      },
    ]

    if (userInfo?.role === "admin") {
      routesFiltered.push({
        text: 'Usuários privilegiados',
        path: '/privileged-users'
      })
    } else if (userInfo?.role === "advanced") {   
    } else if (userInfo?.role === "simple") {
    }    

    if (userInfo?.role !== undefined) {
      routesFiltered.push(        
        {
          text: 'Meu Perfil',
          path: '/myProfile'
        },
        {
          text: 'Sair',
          onClick: () => handleClearUserInfo()
        }
      )
    } else {
      routesFiltered.push(
        {
          text: 'Entrar',
          path: '/login'
        },
      )  
    } 

    return routesFiltered as CustomTreeItemLike[]
  }

  return (     
    <Container>
      <Header>
        <Title>MENU</Title>

        <Navbar>
          {routes?.map((route, index) => (
            <div key={index}>
              {route.path ? (
                <NavbarLink  to={route.path}>{route.text}</NavbarLink>
              ):(
                <NavbarSpan onClick={route?.onClick}>{route.text}</NavbarSpan>
              )}
            </div>
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
