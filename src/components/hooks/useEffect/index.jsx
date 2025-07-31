import { useEffect, useState } from "react";
import "./index.css";

export const ReactUseEffect = () => {
    const [count,setCount] = useState(0);
    useEffect(() => {
        console.log(`count value : ${count}`);
    },[count]);
    return(
    //     // Example :1
    //     // <div>
    //     //     <h1>Hello,useEffect!</h1>
    //     // </div>

        // Example :2
         <div className="container effect-container">
             <h1>useEffect Hook</h1>
            <p>Count : {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
     
    //Example :3
    // const [date,setDate] = useState(0);
    // useEffect(()=>{
    //    setInterval(() =>{
    //     const updateDate = new Date();
    //     setDate(updateDate.toLocaleTimeString());
    //    },1000);
    // },[]);

    // return(
    //     <div className="container effect-container">
    //         <h1>Date :{date}</h1>
    //     </div>
    // )

}