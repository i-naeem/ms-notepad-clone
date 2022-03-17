import styled from 'styled-components';
import { useEditor } from '../context/EditorContext';

const StyledTextArea = styled('textarea')`
  width: 100vw;
  height: 100%;
  padding: 5px;
  border: none;
  resize: none;
  outline: none;
  font-size: 13px;
  font-family: 'Consolas', 'Lucida Sans', 'sans-serif';
`;
export const Editor = (props) => {
  const { input, handleInputChange } = useEditor();
  return (
    <StyledTextArea {...props} value={input} onChange={handleInputChange} />
  );
};
