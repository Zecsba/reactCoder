import { Link } from "react-router-dom"

const ItemCountReplace = () =>{
    return(
        <div>
            <Link to='/cart'><button className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800 m-2">Ir al carrito</button></Link>
        </div>
    )
}

export default ItemCountReplace