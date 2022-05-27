import Spiner from "../icons/Spiner"
import Item from './Item'

const ItemList = ({items}) =>{
    return(
        <div className="flex justify-center flex-wrap h-[50rem] overflow-y-scroll">
            { items.length > 0
                ? items.map(item => 
                    <Item
                        key={item.id} 
                        items={item}
                    />                  
                ) 
                :
                <div className="text-center"><Spiner /></div>
            }
        </div>
    )
}

export default ItemList