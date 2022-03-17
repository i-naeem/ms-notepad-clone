import styled from 'styled-components';
import { useEditor } from '../../context/EditorContext';
import { useZoom } from '../../hooks/useZoom';
import { StatusbarItem } from './StatusbarItem';

const StyledStatusbar = styled('div')`
  border-top: 1px solid rgb(215, 215, 215);
  background-color: rgba(240, 240, 240);
  justify-content: end;
  display: flex;
`;

export const StatusBar = (props) => {
  const { rows, cols } = useEditor();
  const zoom = useZoom();
  return (
    <StyledStatusbar>
      <StatusbarItem>
        Ln {rows}, Col {cols}
      </StatusbarItem>
      <StatusbarItem width="auto">{zoom}%</StatusbarItem>
      <StatusbarItem>Windows (CRLF)</StatusbarItem>
      <StatusbarItem>UTF-8</StatusbarItem>
    </StyledStatusbar>
  );
};
