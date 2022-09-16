import styled from 'styled-components';
import theme from '../../global/theme';

export const Container = styled.div`
  display: flex;
`;

export const Main = styled.main`
  padding: 3rem;

  flex: 1
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: ${theme.colors.primary};
`;

export const Table = styled.table`
  margin-top: 1rem;

  width: 100%;
  min-width: 550px;
  height: auto;
`;

export const TableHead = styled.th`
  padding-bottom: 0.5rem;
  
  text-align: left;
  font-weight: 400;
  font-size: 1rem;
  
  color: ${theme.colors.secondary}
`;

export const TableData = styled.td`
  padding: 0.5rem 0.5rem 0.5rem 0;

  text-align: left;
  font-size: 1rem;
  font-weight: 400;
`;

