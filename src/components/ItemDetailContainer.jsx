import { useEffect, useState } from "react"
import imprimir from "../utils/Imprimir"
import products from "../utils/products"
import ItemDitail from "./ItemDetail"

const ItemDetailContainer = () =>{

    const [datosProducts, setDatosProducts] = useState([])

        useEffect(() => {         
            imprimir(2000, products[2])
            .then(dates => setDatosProducts(dates))
            .catch(err => console.log(err))
    })

    return(
        <div>
            <ItemDitail items={datosProducts}/>
        </div>
    )
        
}

export default ItemDetailContainer