//con las llaves envolviendo a "greeting", estamos desestructurando el prop.
export default function ItemListContainer ({greeting}) {
    return (
        <div className="item-list-container">
            <h1> {greeting} </h1>
            
        </div>
    )
}