import { createContext, useContext, useState, useEffect } from 'react';

const EditorContext = createContext(null);

const EditrContextProvider = (props) => {
  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const rows = input.split('\n').length;
  const cols = input.length;

  const value = {
    rows,
    cols,
    input,
    handleInputChange,
  };

  return (
    <EditorContext.Provider value={value}>
      {props.children}
    </EditorContext.Provider>
  );
};

export default EditrContextProvider;
export const useEditor = () => useContext(EditorContext);
