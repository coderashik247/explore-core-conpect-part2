import { useState } from "react"

export default function Player(){

    const [count, setCount] = useState(11);

    const handleAdd = () =>{
        const newCount = count + 1;
        setCount(newCount);
    }

    const handleRemove = () =>{
        const newCount = count - 1;
        setCount(newCount);
    }

    const playerStyle={
        border:'2px solid tomato',
        margin: '15px',
        padding: '20px',
        borderRadius: '20px'

    }
    return(
        <div style={playerStyle}>
            <h2>Player: {count}</h2>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}