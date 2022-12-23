import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
            <h1>Ecommerce</h1>
            <div style={{ display: 'flex', justifyContent: 'space-around', width: '75%'}}>
                <button>Ver todo</button>
                <button>Celulares</button>
                <button>Tablets</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar