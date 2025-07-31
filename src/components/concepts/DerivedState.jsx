import { useState } from "react"

// const users = []

export const DerivedState = () =>{
    const [users , setUsers] = useState([
        { name:"Subhu",age : 18},
        { name:"Khushu",age : 19},
        { name:"Tamu",age : 17},
        { name:"Dhwija",age : 16},
    ])
    return(
        <div className="main-div">
            <h1>Users List </h1>
     <ul>
        {users.map((curElem,index)=>{
            return(
                <li key={index}>
                    {curElem.name} - {curElem.age} years old </li>
            )
        })}
        </ul>
    </div>)

}