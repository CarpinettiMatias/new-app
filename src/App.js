import './App.css';
import NavBar from './component/NavBar/NavBar';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import ItemCount from './component/ItemCount/ItemCount';


function App() {
  return (
    <div className="App">
      <header>
          <NavBar />
      </header>
      <section>
        <ItemListContainer  greeting='Hola Mundo'/>

        <ItemCount/>
      </section>
    </div>
  );
}

export default App;
