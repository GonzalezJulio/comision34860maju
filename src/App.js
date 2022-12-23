import './App.css';
import { useState } from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  const [show, setShow] = useState(false)
  return (
    <div className='App'>
        {/* <Navbar /> */}
        <button onClick={() => setShow(!show)}>show/hide</button>
        { show && <ItemListContainer greeting='Hola Comision 34860'/> }
        <ItemCount onAdd={(count) => console.log('se agregaron '+ count)} stock={10}/>
    </div>
  );
}

export default App;
