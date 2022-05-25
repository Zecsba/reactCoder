import Spiner from "../icons/Spiner"

const ItemList = ({items}) =>{
    return(
        <div className="flex justify-center flex-wrap h-screen overflow-y-scroll">
            { items.length > 0
                ? items.map(item => 
                <div key={item.id} className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-stone-700 dark:border-gray-700 m-8">
                    <div className="flex justify-center mt-3">
                        <img className="rounded-t-lg" src={item.src} alt="" />
                    </div>

                    <div className="p-5">
                        <div>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                        </div>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.descriptionOne}</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.descriptionTwo}</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.descriptionThree}</p>
                    </div>

                    <div className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{item.price}</div>
                    </div>
                ) : <div className="text-center"><Spiner /></div>
            }
        </div>
    )
}

export default ItemList