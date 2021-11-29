import './App.css';
import NavBar from './component/NavBar/NavBar';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './component/Router/Router';

function App() {
  return (
      <BrowserRouter>
         <header>
            <NavBar />
            <Router />
          </header>
      </BrowserRouter>
  );
};

export default App;
