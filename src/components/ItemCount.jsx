import { useState } from "react"

const ItemCount = ({stock, initial}) =>{ 
    const [number, setNumber] = useState(0)

    const increment = () => {
        if(number < stock) setNumber(number + 1)
    }

    const decrement = () =>{
        if(number > initial) setNumber(number - 1)
    }

    const window = () =>{
        alert(`${number}`)
    }

    return(
        <div className="flex">
                <button onClick={decrement} className="bg-slate-200 p-1 m-2"> - </button>
                <p>{number}</p>
                <button onClick={increment} className="bg-slate-200 p-1 m-2"> + </button>

                <button onClick={window}>Agregar</button>
        </div>
    )
}

export default ItemCount