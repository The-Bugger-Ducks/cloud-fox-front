import styled from "styled-components";
import { Link } from "react-router-dom";

type NavbarLinkProps = {
  isActive?: boolean;
};

export const Container = styled.aside`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  width: 16rem;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  z-index: 1000 !important;
`;

export const Header = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  margin-bottom: 3rem;

  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.semi_bold};
  font-size: ${({ theme }) => theme.fontSizes.title};
`;

export const Navbar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NavbarLink = styled(Link) <NavbarLinkProps>`
  margin-bottom: 1.5rem;

  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.subtitle};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary_dark : theme.colors.black};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Footer = styled.footer`
  margin-bottom: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 4.0625rem;
  height: 4.0625rem;
`;

export const LogoTitle = styled.span`
  margin-top: 1rem;

  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.subtitle};
`;
