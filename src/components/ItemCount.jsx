import { useState } from "react"

const ItemCount = () =>{ 
    const [number, setNumber] = useState(0)

    const increment = () => {
        if(number < 5) setNumber(number + 1)
    }

    const decrement = () =>{
        if(number > 0) setNumber(number - 1)
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