//Primero tratar de encontrar la funcion que se va a exportar que va a ser nuestro componente.
// ItemList se va a encargar de hacer la llamada al mook, para que nos devuelva los productos.
//Para poder conseguir la informacion que necesitamos, tenemos que llamar a servicios externos (APIS, PROMESAS, REQUEST...), se hace mediante efectos.
// Si usamos PROMESAS tenemos que usar el metodo .then (si queremos acceder a la informacion resultante) o metodo .catch ()
import { useEffect, useState } from "react";
import Item from "./Item";


function obtenerProductos () {
    return new Promise ((respuesta) => {
        setTimeout (() => {respuesta (productos);
        }, 2000)
    })
}

export default function ItemList () {
    const [productos, setProductos] = useState ([]);
    const [loading, setLoading] = useState (true)

    if (loading === true) return <p>Cargando...</p>
// mandamos un array vacio para que solo se renderice una vez.
    useEffect (() =>{
        obtenerProductos().then ((data) => {
            setProductos(data);
            setLoading (false)
        })
    }, []);
//cuando la promesa resuelve y recibimos nuestro array de productos, se la mandamos como parametro a la variable data,
//a data la vamos a guardar en un estado (setProductos) para que perdure en el tiempo y no se borre cuando rendericemos.
// si hay que generar una renderizacion, cuando nuestros datos cambian (que podemos editar), la unica manera de lograr
//mostrar lo actualizado, es con estados.

// el map nos sirve para recorrer arrays y mostrar el componente
//productos es un array, el map recibe una funcion, que como parametro recibe productos, dependiendo de la cantidad
// de productos, va a ser la cantidad de "vueltas" que haga.
// se va a renderizar el componente Item, si hacemos map, tenemos que mandarle el prop "key" para el id y como otro prop le mandamos
// el producto entero "productos"
    return (
        <div className="item-list">
            {productos.map ((productos) => (
                <Item key= {productos.id} productos = {productos} />
            ))}
        </div>
    ) 

}