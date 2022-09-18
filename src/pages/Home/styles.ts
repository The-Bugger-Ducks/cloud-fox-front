import styled from 'styled-components'

export const Title = styled.h1`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.semi_bold};
  font-size: ${({ theme }) => theme.fontSizes.title};
`

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  margin-left: 16rem;
  padding: 3rem;
  height: 100vh;
  overflow-y: scroll;
`

export const CardContainer = styled.div`
  width: 100%;
  height: 20rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  overflow-y: scroll;
`

export const ButtonContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: row-reverse;
`
