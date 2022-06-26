import { useContext, useEffect } from 'react';
import { CartContext } from '../Context/CartContext';
import Basura from '../icons/Basura';
import { Link } from 'react-router-dom';
import { collection, serverTimestamp, setDoc, doc, updateDoc, increment } from 'firebase/firestore';
import db from '../utils/firebaseConfig';

const Cart = () =>{

    const test = useContext(CartContext);

    const createOrder = () => {

        const itemsForDB = test.cartList.map(item => ({
            id: item.idItem,
            price: item.priceItem,
            title: item.titleItem,
            qty: item.cantidadItem
        }))

        let order = {
            buyer: {
                email: 'correo@correo.com',
                name: 'Persona Correo',
                phone: '32033232'
            },
            items: itemsForDB,
            date: serverTimestamp(),
            toal: test.sumaTotalProduct()
        }

        const createInFirestore = async () =>{
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, order)
            return newOrderRef;
        }

        createInFirestore()
        .then(result => alert('Su id de order es' + result.id))
        .catch(err => console.log(err))


        test.cartList.forEach( async (item) => {
            const itemRef = doc(db, "products", item.idItem)
            await updateDoc(itemRef, {stock: increment(-item.cantidadItem)})
        })

        test.removeList()
    }

    return(
        <div className='flex flex-col'>

            {test.cartList.length > 0 && test.cartList.map((item) => 

            <div key={item.idItem} className="flex flex-col md:flex-row bg-slate-300 rounded-lg m-5 md:w-4/12 sm:w-5/12 sm:m-auto sm:mt-5">

                    <div className='p-2 mt-1 mx-2 '>
                        <img className="mb-3 w-24 m-auto h-24 rounded-full shadow-lg" src={item.imgItem}/>
                    </div>

                    <div className='flex flex-col justify-center'>
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white text-center md:text-left">{item.titleItem}</h5>
                        <span className='text-center'>Precio: <span className='tracking-wide'>{item.priceItem}</span></span>
                        <span className='text-center'>Cantidad solicitada: {item.cantidadItem}</span>
                        <p className='tracking-wide text-center'>Total: {test.sumaProducts(item.idItem)}</p>
                    </div>
                    
                    
                     <div className='m-auto '>
                        <button className='p-2 bg-red-600 hover:bg-red-700 rounded-md flex flex-row m-4' onClick={() => test.deleteItem(item.idItem)}> Delete <Basura/></button>
                     </div>

            </div>
            )}

            {test.cartList.length > 0 && 
            
            <div className="bg-slate-300 mx-auto my-20 p-3 rounded-md flex flex-col w-2/12">
                <div className='p-1'>
                    <span className='uppercase font-medium '>Total:</span> <span>$</span> {test.sumaTotalProduct()}
                </div>

                <button className='p-2 bg-blue-700 text-white rounded-lg' onClick={createOrder}>¡Comprar!</button>
                
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