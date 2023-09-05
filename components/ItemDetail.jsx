
export default function ItemDetail ({products}) {
    return (
        <div>
            <img src= {products.image} alt="" />
            <h2> {products.tittle}</h2>
            <p>{products.description}</p>
            <span>{products.price}</span>
        </div>
    )
}