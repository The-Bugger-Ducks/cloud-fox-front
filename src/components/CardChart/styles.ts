import styled from 'styled-components'

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.subtitle};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  margin-bottom: 1rem;
`

export const CardContainer = styled.div`
  width: 99%;
  overflow: hidden;
`

export const Border = styled.div`
  width: 100%;
  padding: 1px;
  background: linear-gradient(145.3deg, #ee7733 6.85%, #7711bb 94.01%);
  border-radius: 1rem;
`

export const Content = styled.div`
  background: ${({ theme }) => theme.colors.white};
  height: 100%;
  width: 100%;
  padding: 1.5rem;
  border-radius: 1rem;
`
