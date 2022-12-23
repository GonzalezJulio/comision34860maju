import './ItemListContainer.css'
import { useEffect, useState } from 'react'

const ItemListContainer = () => {
    const [title, setTitle] = useState('Titulo')
    const [search, setSearch] = useState('celular')

    
    useEffect(() => {
        console.log('llamada a api ' + search)

        return () => console.log('limpieza')
    }, [search])
    
    console.log('render')
    return(
        <div className='ItemListContainer'>
            <h1>{title}</h1>
            <button onClick={() => setTitle('Otro Titulo')}>Cambiar Titulo</button>
            <button onClick={() => setSearch('autos')}>Cambiar Search</button>
        </div>
    )
}

export default ItemListContainer