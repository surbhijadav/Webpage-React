import { useMemo, useState } from "react";
import UseCallback from "./UseCallBack";

const ExpensiveComponent = () =>{
    const sum = () =>{
        console.log("calculating sum..");
        let i = 0 ;
        for (i=0;i <= 10000000; i++ ){
            i= i + 1;
        }
        return i;
    }
const total = useMemo (() => sum() , []);
// const total = sum();
return  <p>sum: {total}</p>;
};

const MemoParentComponent = () =>{
    const [count,setCount] = useState(0);

    return(
        <div className="p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-black text-white">
            <ExpensiveComponent/>
            <button
             onClick={() => setCount(count + 1)}
             className="py-3 px-6 bg-cyan-400 rounded-sm">
                Re-render Parent
             </button>
             <p>Parent re-renders : {count}</p>
             <UseCallback />
        </div>
    )
};

export default MemoParentComponent;