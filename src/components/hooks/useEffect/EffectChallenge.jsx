import { useEffect, useState } from 'react';
import './index.css';

export const EffectChallenge  =() =>{
const [count,setCount] = useState(0);
const [name,setName] = useState("");

useEffect(()=>{
    document.title = `count : ${count}`;
},[count]);

  const  handleCount = () =>{
        setCount(()=> count +1);    
        console.log(count);
    };

    useEffect(()=>{
        console.log(name);
    },[name]);
    return(
        <div className='container effect-container'>
            <h1>useEffect Challenge</h1>
            <p>
                Count : <span> {count} </span>
            </p>
            <button onClick={handleCount}>Increment</button>
            <p>
               Name : <span>{name}</span>
            </p>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
    )
}