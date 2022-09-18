import styled from 'styled-components'
import theme from '../../global/theme'

interface Page {
  pageActive: boolean
}

export const Main = styled.main`
  padding: 3rem;
  margin-left: 16rem;
  height: 100vh;
  overflow-y: scroll;
`

export const PageTitle = styled.div`
  height: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const Divider = styled.img`
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

export const Title = styled.h1`
  font-size: 1.5rem;
  color: ${(props: Page) => props.pageActive ? theme.colors.primary : theme.colors.gray};
  font-weight: ${(props: Page) => props.pageActive ? theme.fontWeights.semi_bold : theme.fontWeights.regular};

  cursor: ${(props: Page) => { if (!props.pageActive) return 'pointer' }};

  &:hover {
    color: ${(props: Page) => { if (!props.pageActive) return theme.colors.primary }};
  }
`

export const Subtitle = styled.h2`
  color: ${({ theme }) => theme.colors.gray};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.title};
`

export const Table = styled.table`
  margin-top: 1rem;

  width: 100%;
  min-width: 550px;
  height: auto;
`

export const TableHead = styled.th`
  padding-bottom: 0.5rem;
  
  text-align: left;
  font-weight: 400;
  font-size: 1rem;
  
  color: ${theme.colors.secondary}
`

export const TableData = styled.td`
  padding: 0.5rem 0.5rem 0.5rem 0;

  text-align: left;
  font-size: 1rem;
  font-weight: 400;
`

export const ActionButtonContainer = styled.div`
  display: flex;
  gap: 1rem;

  max-width: 12rem;
`

export const Select = styled.select`
  color: ${({ theme }) => theme.colors.black};
  border-radius: 5px;
  box-shadow: 3px 3px 5px rgba(33, 37, 41, 0.08);

  width: 13rem;
  height: 2rem;
`
