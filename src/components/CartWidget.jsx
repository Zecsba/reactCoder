import Carrito from "../icons/Carrito"
import { Link } from "react-router-dom"
import { CartContext } from "../Context/CartContext"
import { useContext } from "react"

const CartWidget = () =>{

    const test = useContext(CartContext);

    return(
        <div className="flex absolute itemCartWidget">
            <Link to='/cart'>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
                    <Carrito />
                    <p className="ml-3 text-lg">{test.calcItemsQty()}</p>    
                </span>      
            </Link>    
        </div>
    )
}

export default CartWidget