const ItemList = ({ products }) => {
    return (
        <ul>
            {products.map(prod => <li key={prod.id}>{prod.name}</li>)}
            {/* {products.map(prod => <Item key={prod.id} {...prod}/>)} */}

            {/* { products.map(prod => React.createElement(Item, {...prod}))} */}
        </ul> 
    )
}

export default ItemList