import styled from 'styled-components';
import { StatusbarItem } from './StatusbarItem';

const StyledStatusbar = styled('div')`
  border-top: 1px solid rgb(215, 215, 215);
  background-color: rgba(240, 240, 240);
  justify-content: end;
  display: flex;
`;

export const StatusBar = (props) => {
  return (
    <StyledStatusbar>
      <StatusbarItem>Ln 1, Col 0</StatusbarItem>
      <StatusbarItem width="auto">100%</StatusbarItem>
      <StatusbarItem>Windows (CRLF)</StatusbarItem>
      <StatusbarItem>UTF-8</StatusbarItem>
    </StyledStatusbar>
  );
};
