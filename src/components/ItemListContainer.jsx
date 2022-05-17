
import ItemCount from "./ItemCount"

const ItemListContainer = (props) =>{

    return(
        <div className="itemList">
            <h1>{props.title}</h1>

            <ItemCount />
        </div>
    )
}

export default ItemListContainer