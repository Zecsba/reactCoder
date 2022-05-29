import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import imprimir from "../utils/Imprimir"
import products from "../utils/products"

const ItemListContainer = () =>{
    const [datosProducts, setDatosProducts] = useState([])
    const {idcategory} = useParams()

    console.log(idcategory)

        useEffect(() => {         
            imprimir(0, products.filter(item =>  {
                if(idcategory == undefined) return item;
                return item.idcategory == parseInt(idcategory)
            }))
            .then(dates => setDatosProducts(dates))
            .catch(err => console.log(err))
        }, [idcategory])

    return(
        <div className="itemList">
            <ItemList items={datosProducts} />
        </div>
    )
}

export default ItemListContainer