import { useState } from "react"

export const Counter = () => {
    const [counter ,setCounter ] = useState(0);


    return (
        <>
            <h1>Contador: {counter}</h1>
            <button
                onClick={()=>setCounter(counter+1)}
            
            style={{margin:"10px"}}>Aumentar</button>
            <button
                onClick={()=>setCounter(counter-1)}

            style={{margin:"10px"}}>Disminuir</button>
        </>
    )
}