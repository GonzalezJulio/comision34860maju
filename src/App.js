import logo from './logo.svg';
import './App.css';

import Button from './components/Button/Button';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className='App'>
      <header className="App-header">
        <CartWidget />
        <ItemListContainer greeting='Hola Comision 34860'/>
        <img src={logo} className="App-logo" alt="logo" />
        <Button backgroundColor='orange' handleClick={() => console.log('primero')} bootstrap=' mt-3 btn-success '>
          Primero
        </Button>
        <Button backgroundColor='red' handleClick={() => console.log('segundo')} bootstrap=' mt-2 btn-danger '>
          Segundo
        </Button>
        <Button handleClick={() => console.log('tercero')}>
           Tercero 
        </Button>
      </header>
    </div>
  );
}

export default App;
