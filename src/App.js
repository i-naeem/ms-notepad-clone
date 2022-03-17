import { Editor } from './components/Editor';
import { Navbar } from './components/Navbar';
import { StatusBar } from './components/Statusbar';
import { StyledApp } from './styles/App.styled';

function App() {
  return (
    <StyledApp>
      <header>
        <Navbar />
      </header>
      <main>
        <Editor />
      </main>
      <footer>
        <StatusBar />
      </footer>
    </StyledApp>
  );
}

export default App;
