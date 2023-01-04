import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getProducts().then(productsFromApi => {
            setProducts(productsFromApi)
        }).catch(error => {
            setError(true)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    if(error) {
        return <h1>Hubo un error, pida el libro de quejas</h1>
    }

    return(
        <div className='ItemListContainer'>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer