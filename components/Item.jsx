export default function Item ({products}) {
    return (
        <div>
            < img src= {products.imagen} alt="" />
            <h2>{products.titulo}</h2>
            <p>{products.precio}</p>
        </div>
    )
}