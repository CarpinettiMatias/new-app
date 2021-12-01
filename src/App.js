import './App.css';
import NavBar from './component/NavBar/NavBar';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './component/Router/Router';
import { CartProvider } from './component/CartContext/CartContext';
import { Modal } from 'react-bootstrap';



function App() {
  
  return (

        <CartProvider>
          <BrowserRouter>
                <header>
                    <NavBar />
                    <Router />
                  </header>
              </BrowserRouter>
        </CartProvider>
  );
};

export default App;
