import NavBar from "../components/NavBar"
import ItemListContainer from "../components/ItemListContainer"
import CartWidget from "../components/CartWidget"

function App() {
  return ( 
    <>
    <NavBar />
    <ItemListContainer greeting= "Nuestro productos" />
    <CartWidget/>
    </>
  )
}


export default App

