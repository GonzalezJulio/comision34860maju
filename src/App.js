import { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [products, setProducts] = useState([])
  const [input, setInput] = useState('')
  console.log(input)
  useEffect(() => {
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=macbook')
      .then(response => {
        return response.json()
      })
      .then(json => { 
        setProducts(json.results)
      })
  }, [])

  const handleOnSubmit = (event) => {
    event.preventDefault()
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
    .then(response => {
      return response.json()
    })
    .then(json => { 
      setProducts(json.results)
    })
  }

  return (
    <div className="App">
        <h1>Mercado Libre</h1>

        <form onSubmit={handleOnSubmit}>
          <input value={input} onChange={(event) => setInput(event.target.value)}/>
          <button type="submit">Search</button>
        </form>

        <div>
          {products.map(prod => {
            return (
              <div key={prod.id}>
                <h2>{prod.title}</h2>
                <img src={prod.thumbnail} alt={prod.title}/>
                <h3>${prod.price}</h3>
              </div>
            )
          })}
        </div>
    </div>
  );
}

export default App;
