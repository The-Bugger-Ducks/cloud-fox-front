import styled from "styled-components";
import backgroundImage from "../../assets/mapa.png";

export const Container = styled.div`
  width: 100%;
  height: 15rem;
  border-radius: 10px;
  margin: 3rem 0;
  background-image: url(${backgroundImage});
  background-size: cover;
`;
