import {Link} from 'react-router-dom'

const Item = ({items}) =>{
    return(
            <div key={items.id} className="max-w-auto h-1/2 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-5">
                        <Link to={`/item/${items.id}`}>
                            <img className="p-8 rounded-t-lg" src={items.src} alt="product image" />
                         </Link>
                    <div className="px-5 pb-5">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white uppercase">
                                <Link to={`/item/${items.id}`}> {items.title} </Link>
                            </h5>    
                    <div className="flex justify-between items-center">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white"> ${items.price}</span>
                            <Link to={`/item/${items.id}`}>
                                <span className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Mas detalles</span>
                            </Link>                           
                    </div>
                </div>
            </div>
    )
}

export default Item