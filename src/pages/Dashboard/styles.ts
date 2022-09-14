import styled from "styled-components";

export const Title = styled.h1`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.semi_bold};
  font-size: ${({ theme }) => theme.fontSizes.title};
`;

export const Subtitle = styled.h2`
  color: ${({ theme }) => theme.colors.gray};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.title};
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  margin-left: 16rem;
  padding: 3rem;
  height: 17.125rem;
  height: 100vh;
`;

export const Divider = styled.img``;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Filter = styled.img`
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
`;

export const PageTitle = styled.div`
  height: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const StationName = styled.div`
  height: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const EditButton = styled.img`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
`;
