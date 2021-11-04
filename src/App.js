import './App.css';
import NavBar from './component/NavBar/NavBar';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';



function App() {
  return (
    <div className="App">
      <header>
          <NavBar />
      </header>
      <section>
        <ItemListContainer  greeting='Hola Mundo'/>
      </section>
    </div>
  );
}

export default App;
