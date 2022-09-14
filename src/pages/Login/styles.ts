import styled from 'styled-components';

import backgroundImage from '../../assets/login-background.png';

export const Container = styled.div`
  margin-left: 16rem;
  height: 17.125rem;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;
