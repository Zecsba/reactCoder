import { useContext, useEffect } from 'react';
import { CartContext } from '../Context/CartContext';
import Basura from '../icons/Basura';
import { Link } from 'react-router-dom';

const Cart = () =>{

    const test = useContext(CartContext);

    return(
        <div className='w-full md:h-[60rem] overflow-y-auto flex flex-col'>


            {test.cartList.length > 0 && test.cartList.map((item) => 

            <div key={item.idItem} className="flex flex-col md:flex-row bg-slate-300 rounded-lg m-5 md:w-4/12 sm:w-3/12">

                    <div className='p-2 mt-1 mx-2 '>
                        <img className="mb-3 w-24 m-auto h-24 rounded-full shadow-lg" src={item.imgItem}/>
                    </div>

                    <div className='flex flex-col justify-center'>
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white text-center md:text-left">{item.titleItem}</h5>
                        <span className='text-center'>Precio: <span className='tracking-wide'>{item.priceItem}</span></span>
                        <span className='text-center'>Cantidad solicitada: {item.cantidadItem}</span>
                    </div>
                    
                    
                     <div className='m-auto '>
                        <button className='p-2 bg-red-600 hover:bg-red-700 rounded-md flex flex-row m-4' onClick={() => test.deleteItem(item.idItem)}> Delete <Basura/></button>
                     </div>

                     <p className='tracking-wide'>{test.sumaProducts(item.idItem)}</p>
            </div>
            )}

            {test.cartList.length > 0 && 
            
            <div className="bg-slate-300 absolute right-0 m-20 p-5">
                <p className='tracking-wide'>{test.sumaTotalProduct()}</p>    
            </div>}

            { test.cartList.length > 0 
            ? 
                <button className='p-3 bg-blue-700 text-white m-auto rounded-lg text-2xl uppercase' onClick={test.removeList}>Delete all products</button> 
                : 
                <div className='m-auto'>
                    <Link to="/"><span className='p-3 bg-blue-700 text-white text-center rounded-lg uppercase text-2xl'>!Tu carrito esta vacio, vamos a comprar algo!</span></Link>
                </div>
            }

        </div>
    )
}

export default Cart