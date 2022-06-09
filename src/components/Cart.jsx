import { useContext, useEffect } from 'react';
import { CartContext } from '../Context/CartContext';

const Cart = () =>{

    const test = useContext(CartContext);

    return(
        <div>
            {test.cartList.length === 0 ? <p>NO tienes nada</p> : test.cartList.map((item) => 
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center pb-10">
                    <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={item.src} alt="Bonnie image"/>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{item.title}</h5>
                    
                    <div className="flex mt-4 space-x-3 lg:mt-6"> 
                        <button className='p-5 bg-red-600 ' onClick={() => test.deleteItem(item.idItem)}>Delete</button>
                    </div>
                </div>
            </div>
            )}

            <button className='p-5 bg-emerald-500 ' onClick={test.removeList}>Delete all products!</button>
        </div>
    )
}

export default Cart