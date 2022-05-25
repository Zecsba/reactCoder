import { useEffect, useState } from "react"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import imprimir from "../utils/Imprimir"
import Products from "../utils/Products"

const ItemListContainer = (props) =>{
    const window = (number) =>{
        alert(`La cantidad de productos a agregar son ${number}`)
    }

    const [datosProducts, setDatosProducts] = useState([])

        useEffect(() => {         
            imprimir(2000, Products)
            .then(dates => setDatosProducts(dates))
            .catch(err => console.log(err))
        })

    return(
        <div className="itemList">
            <h1>{props.title}</h1>

            <ItemList items={datosProducts} />
            <ItemCount stock="5" initial="0" onAdd={window}/>
        </div>
    )
}

export default ItemListContainer