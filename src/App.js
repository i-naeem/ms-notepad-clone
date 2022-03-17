import { StatusBar } from './components/Statusbar/Statusbar';
import { Navbar } from './components/Navbar/Navbar';
import { StyledApp } from './styles/App.styled';
import { Editor } from './components/Editor';

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
