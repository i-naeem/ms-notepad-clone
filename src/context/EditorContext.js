import { createContext, useContext, useState } from 'react';

const EditorContext = createContext(null);

const EditrContextProvider = (props) => {
  const [input, setInput] = useState('');
  const [rows, setRows] = useState(1);
  const [cols, setCols] = useState(1);

  const onChange = (event) => {
    setInput(event.target.value);
  };

  const onKeyUp = (event) => {
    var textLines = event.target.value
      .substr(0, event.target.selectionStart)
      .split('\n');
    setRows(() => textLines.length);
    setCols(() => textLines[textLines.length - 1].length + 1);
  };

  const onMouseUp = (event) => event.target.onkeyup();

  const reset = () => setInput('');

  const value = {
    rows,
    cols,
    input,
    reset,
    events: { onChange, onKeyUp, onMouseUp },
  };

  return (
    <EditorContext.Provider value={value}>
      {props.children}
    </EditorContext.Provider>
  );
};

export default EditrContextProvider;
export const useEditor = () => useContext(EditorContext);
