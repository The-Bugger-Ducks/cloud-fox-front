import styled from "styled-components";

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.subtitle};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.primary_dark};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.subtitle};
  margin-left: 44%;
`;

export const CardContainer = styled.div`
  width: 70%;
  height: 16rem;
  display: flex;
  flex-direction: row-reverse;
  position: relative;
  margin-bottom: 3rem;
  cursor: pointer;
`;

export const Border = styled.div`
  width: 100%;
  height: 100%;
  padding: 1px;
  background: linear-gradient(145.3deg, #ee7733 6.85%, #7711bb 94.01%);
  border-radius: 1rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.white};
  height: 100%;
  width: 100%;
  padding: 1.5rem;
  border-radius: 1rem;
`;

export const Weather = styled.img`
  width: 12rem;
  height: 11rem;
  position: absolute;
  top: 45%;
  right: 50.5%;
`;
