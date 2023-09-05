export default function Item ({productos}) {
    return (
        <div>
            <img src= {productos.imagen} alt="" />
            <h2>{productos.titulo}</h2>
            <p>{productos.precio}</p>
        </div>
    )
}