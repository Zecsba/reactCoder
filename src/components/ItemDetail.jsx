import ItemCount from './ItemCount'

const ItemDitail = ({items}) =>{
    return(
        <div key={items.id} className="flex justidy-center rounded-lg shadow-2xl m-5">
                    <div className='flex justify-center'>
                            <img className="p-8 rounded-t-lg" src={items.src} alt="product image" />
                    </div>
                    
                    <div className="px-5 pb-5">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white uppercase">{items.title}</h5>
                            <p className='text-2xl font-bold uppercase text-center p-2'>{items.descriptionOne}</p>
                            <p>{items.descriptionTwo}</p>
                            <p> <span className='text-lg font-bold'>Mas info</span>: {items.descriptionThree}</p>
                    <div className="flex justify-between items-center">
                            <span className="text-3xl font-bold text-gray-900 dark:text-gray-900"> ${items.price}</span>
                    </div>
                    <ItemCount stock={items.stock} initial="0" onAdd={window}/> 
                </div>
            </div>
    )
}

export default ItemDitail