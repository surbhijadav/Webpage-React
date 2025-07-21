import { use } from "react";
import { BioContext } from ".";
export const Home = () =>{
    let myName,myAge;
    return(
        <section className={`p-4 h-lvh font-display tracking-wider 
            flex flex-col justify-center item-center
             bg-grey-900 text-white`}>
            <h1>Hello Context API!!my name is {myName},my age is {myAge}</h1>
        </section>
        
    )
}
