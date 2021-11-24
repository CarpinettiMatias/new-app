import './App.css';
import NavBar from './component/NavBar/NavBar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Contact from './Pages/Contact';

import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import CartView from './component/CartView/CartView';
import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
      <BrowserRouter>
         <header>
            <NavBar />
            <Routes>
              <Route path='/' element={ <ItemListContainer /> } />
              <Route path='/Products/:catId' element={ <ItemListContainer /> } />
              <Route path='/detail/:detailId' element={ <ItemDetailContainer /> } />
              <Route path='/Contact' element={ <Contact/> } />
              <Route path='/Cart' element={ <CartView/> } />
              <Route path='*' element={  <Navigate to='/' /> } />
            </Routes>
          </header>
      </BrowserRouter>
  );
}

export default App;
