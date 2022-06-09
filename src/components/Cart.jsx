import { useContext, useEffect } from 'react';
import { CartContext } from '../Context/CartContext';

const Cart = () =>{

    const test = useContext(CartContext);

    return(
        <div className='w-full h-[60rem] overflow-y-auto flex flex-col'>
            {test.cartList.length > 0 && test.cartList.map((item) => 

            <div key={item.idItem} className="flex bg-slate-300 rounded-lg m-5 w-3/12">

                    <div className='p-2 mt-1 mx-2'>
                        <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={item.imgItem}/>
                    </div>

                    <div className='flex flex-col justify-center'>
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{item.titleItem}</h5>
                        <span>Precio: {item.priceItem}</span>
                        <span>Cantidad solicitada: {item.cantidadItem}</span>
                    </div>
                    
                    
                     <div className='m-auto'>
                        <button className='p-2 bg-red-600 hover:bg-red-700 rounded-md' onClick={() => test.deleteItem(item.idItem)}>Delete</button>
                     </div>
                   
                
            </div>
            )}

            { test.cartList.length > 0 
            ? <button className='p-5 bg-emerald-500 m-auto' onClick={test.removeList}>Delete all products!</button> : <span>Tu carrito esta vacio, vamos a comprar algo!</span>}

        </div>
    )
}

export default Cart