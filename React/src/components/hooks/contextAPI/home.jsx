// import { useContext } from "react"
// import { BioContext } from "."
import { use, useContext } from "react";
import { BioContext, useBioContext } from ".";
export const Home = () =>{
    // const {myName,myAge} =useBioContext();
    // const {myName,myAge} = useContext(BioContext);
    // const {myName,myAge} = use(BioContext);
    let myName,myAge;
    const newHook = true;
    return(
        <section className={`p-4 h-lvh font-display tracking-wider 
            flex flex-col justify-center item-center
             bg-grey-900 text-white`}>
            //you can use USE in condtions 
            if(newHook){
                ({myName,myAge} = use(BioContext))
            }
        <h1>Hello Context API!!my name is {myName},my age is {myAge}</h1>
        </section>
        
    )
}
