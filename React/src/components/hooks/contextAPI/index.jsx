import { createContext, useContext } from "react";

export const  BioContext = createContext();

export const BioProvider = ({children})=>{
    const myName = "surbhi";
    const myAge = 19 ;

    return<BioContext.Provider value={{myName, myAge}}>{children}
    </BioContext.Provider>
}

//context hook provides a data to it's children only so it's important to write or treat all other as children and write in context api in app.jsx file.

//custom Hooks
export const useBioContext = () => {
    const context = useContext(BioContext);
    if (context === undefined){
        throw new Error("Component must be wrapped with BioProvider");
    }
    return context ;
}