import EditrContextProvider from './context/EditorContext';
import ReactDOM from 'react-dom';
import './styles/index.css';
import React from 'react';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <EditrContextProvider>
      <App />
    </EditrContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
