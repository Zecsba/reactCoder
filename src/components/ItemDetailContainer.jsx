import { useEffect, useState } from "react"
import { useParams } from "react-router"
import imprimir from "../utils/Imprimir"
import products from "../utils/products"
import ItemDitail from "./ItemDetail"


const ItemDetailContainer = () =>{

    const [datosProducts, setDatosProducts] = useState([])
    const {id} = useParams();

        useEffect(() => {         
            imprimir(0, products.find(item => item.id === parseInt(id)))
            .then(dates => setDatosProducts(dates))
            .catch(err => console.log(err))
        }, [])

    return(
        <div>
            <ItemDitail items={datosProducts}/>
        </div>
    )
        
}

export default ItemDetailContainer