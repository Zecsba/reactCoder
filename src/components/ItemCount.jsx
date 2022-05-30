import { useState } from "react"

const ItemCount = ({stock, initial, onAdd}) =>{ 

    const [number, setNumber] = useState(0)

    const increment = () => {
        if(number < stock) setNumber(number + 1)
    }

    const decrement = () =>{
        if(number > initial) setNumber(number - 1)
    }

    return(
        <div className="flex">
                <div className="flex items-center text-gra-900">
                    <button onClick={decrement} className="bg-blue-700 p-1 m-2 rounded text-white"> - </button>
                    <p>{number}</p>
                    <button onClick={increment} className="bg-blue-700 p-1 m-2 rounded text-white"> + </button>
                </div>
                

                {
                number ? <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 m-2" onClick={() => onAdd(number)}>Agregar al carrito</button> : <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 cursor-not-allowed opacity-75 m-2" disabled>No tienes articulos aun</button>
                }
        </div>
    )
}

export default ItemCount