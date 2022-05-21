
import ItemCount from "./ItemCount"

const ItemListContainer = (props) =>{

    return(
        <div className="itemList">
            <h1>{props.title}</h1>

            <ItemCount stock="5" initial="0"/>
        </div>
    )
}

export default ItemListContainer