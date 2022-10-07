import { useContext, MouseEvent } from "react";

import {
  Container,
  Header,
  Title,
  Navbar,
  NavbarLink,
  Footer,
  Logo,
  LogoTitle,
  NavbarSpan,
} from "./styles";

import logo from "../../assets/logo.png";

import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import SidebarAdmin from "./SidebarAdmin";
import SidebarAdvanced from "./SidebarAdvanced";

export interface CustomTreeItemLike {
  icon?: string;
  text?: string;
  path?: string;
  onClick?: (e: MouseEvent) => void;
  invisible?: boolean;
}

interface Props {
  children: JSX.Element | JSX.Element[];
}

export default function Sidebar() {
  const { userInfo, handleClearUserInfo } = useContext(AuthContext);

  const navigate = useNavigate();

  function handleLogoutUser() {
    handleClearUserInfo();
    navigate("/home");
  }

  const SidebarContent: React.FC<Props> = ({ children }) => {
    return <Navbar>{children}</Navbar>;
  };

  return (
    <Container>
      <Header>
        <Title>MENU</Title>

        <SidebarContent>
          <NavbarLink to="/home">Página Inicial</NavbarLink>
          {userInfo ? (
            <>
              {userInfo.role === "admin" ? (
                <SidebarAdmin />
              ) : (
                <SidebarAdvanced />
              )}
              <NavbarLink to="/myProfile">Meu Perfil</NavbarLink>
              <NavbarSpan onClick={handleLogoutUser}>Sair</NavbarSpan>
            </>
          ) : (
            <NavbarLink to="/login">Entrar</NavbarLink>
          )}
        </SidebarContent>
      </Header>

      <Footer>
        <Logo src={logo} alt="logo" />
        <LogoTitle>Cloud Fox</LogoTitle>
      </Footer>
    </Container>
  );
}
