import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { firestoreFetchOne } from "../utils/FirestoreFetch"
import ItemDitail from "../components/ItemDetail"


const ItemDetailContainer = () =>{

    const [datosProducts, setDatosProducts] = useState([])
    const {id} = useParams();

    useEffect(() => {
        firestoreFetchOne(id)
            .then(result => setDatosProducts(result))
            .catch(err => console.log(err))
    }, []);

    return(
        <div className="m-auto">
            <ItemDitail items={datosProducts}/>
        </div>
    )
        
}

export default ItemDetailContainer