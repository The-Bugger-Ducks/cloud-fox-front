import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.white};
  width: 19.625rem;
  border-radius: 10px;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  margin-bottom: 2rem;

  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.semi_bold};
  font-size: ${({ theme }) => theme.fontSizes.subtitle};
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
