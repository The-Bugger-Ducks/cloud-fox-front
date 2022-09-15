import styled from 'styled-components';

type ButtonProps = {
  fontColor?: string;
  backgroundColor?: string;
  marginBottom?: string;
};

export const CustomButton = styled.button<ButtonProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background: ${({ theme, backgroundColor }) =>
    backgroundColor ?? theme.colors.primary};
  border-radius: 5px;
  border-width: 0px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.168), 0px 0px 3px rgba(0, 0, 0, 0.084);
  color: ${({ theme, fontColor }) => fontColor ?? theme.colors.white};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  width: 15.625rem;
  height: 2.25rem;
  text-align: center;

  &:hover {
    color: ${({ theme, backgroundColor }) =>
      backgroundColor ?? theme.colors.primary};
    background: ${({ theme, fontColor }) => fontColor ?? theme.colors.white};
  }
`;

export const Icon = styled.div`
  margin-right: 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
