import styled from "styled-components";

interface ContainerProps {
  disabled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: rgba(30, 27, 25, 0.54);
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 5000 !important;

  display: ${({ disabled }) => (disabled ? "none" : "flex")};

  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Body = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;

  width: 40%;
  height: 80%;
  padding: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Main = styled.div``;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
`;

export const Title = styled.h1`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.semi_bold};
  font-size: ${({ theme }) => theme.fontSizes.subtitle};
`;
