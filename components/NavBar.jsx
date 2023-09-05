import CartWidget from '../src/vite.svg'

export default function NavBar () {
    return (
        <nav className='navBar'>
            <ul>
                <li>Home</li>
                <li>Productos</li>
                <li>Tabla de talles</li>
                <li>Sobre Nosotros</li>
            </ul>
            <CartWidget />
        </nav>
    )
}
