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
                <button onClick={decrement} className="bg-slate-200 p-1 m-2"> - </button>
                <p>{number}</p>
                <button onClick={increment} className="bg-slate-200 p-1 m-2"> + </button>

                {
                number ? <button className="p-2 text-white bg-stone-600 border-stone-600 rounded-full border-2" onClick={() => onAdd(number)}>Agregar al carrito</button> : <button className="text-white cursor-not-allowed underline-offset-2 p-2  bg-stone-700 border-stone-700 rounded-full border-2 disabled:opacity-80" disabled>No tienes articulos aun</button>
                }
        </div>
    )
}

export default ItemCount