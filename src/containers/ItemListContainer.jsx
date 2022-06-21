import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { firestoreFetch } from "../utils/FirestoreFetch"
import ItemList from "../components/ItemList"

const ItemListContainer = () =>{
    const [datosProducts, setDatosProducts] = useState([])
    const {idcategory} = useParams()

        useEffect(() => {         
            firestoreFetch(idcategory)
            .then(result => setDatosProducts(result))
            .catch(err => console.log(err));
        }, [idcategory])

        useEffect(() => {
            return (() => {
                setDatosProducts([]);
            })
        }, []);

    return(
        <div className="itemList">
            <ItemList items={datosProducts} />
        </div>
    )
}

export default ItemListContainer