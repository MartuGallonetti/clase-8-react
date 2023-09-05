import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer () {
    const [products, setProducts] = useState ();
}

useEffect (() => {
    fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then((data)=>setProducts(data))
}, []);

if (!products) return null;


return (
    <div className="item-list-container">
        <ItemDetail productos= {products} />
    </div>
)