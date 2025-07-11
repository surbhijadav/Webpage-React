import { useState } from "react"

export const Counter = () => {
    const [count,setCount] = useState(0);
    return(
        <div className="container state-container" style={{textAlign : "center"}}>
            <h1>UseState Hook!</h1>
            <br/>
            <p>{count}</p>
            <button className="state-button" onClick={()=> setCount(count+1)}>Increment</button>
        </div>
    )
}