import { useEffect, useState } from "react"
// import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import imprimir from "../utils/Imprimir"
import products from "../utils/products"

const ItemListContainer = () =>{
    const [datosProducts, setDatosProducts] = useState([])

        useEffect(() => {         
            imprimir(2000, products)
            .then(dates => setDatosProducts(dates))
            .catch(err => console.log(err))
        })

    return(
        <div className="itemList">
            <ItemList items={datosProducts} />
        </div>
    )
}

export default ItemListContainer