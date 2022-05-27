import ItemCount from './ItemCount'

const ItemDitail = ({items}) =>{
    return(
        <div key={items.id} className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-5">
                    <div className='flex justify-center'>
                        <a href="#" className='m-auto'>
                            <img className="p-8 rounded-t-lg" src={items.src} alt="product image" />
                        </a>
                    </div>
                    
                    <div className="px-5 pb-5">
                        <a href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white uppercase">{items.title}</h5>
                        </a>
                    <div className="flex justify-between items-center">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white"> ${items.price}</span>
                    </div>
                    <ItemCount stock={items.stock} initial="0" onAdd={window}/> 
                </div>
            </div>
    )
}

export default ItemDitail