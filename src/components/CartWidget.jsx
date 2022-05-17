import Carrito from "../icons/Carrito"

const CartWidget = () =>{
    return(
        <div className="flex absolute itemCartWidget">
            <span className="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
                <Carrito />
                <p className="ml-3 text-lg">10</p>
            </span>          
        </div>
    )
}

export default CartWidget