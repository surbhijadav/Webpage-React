import { useState } from "react";
import "./ToggleSwitch.css";
import { IoIosSwitch } from "react-icons/io"; 
export const ToggleSwitch = () =>{

const[isOn,setInOn] = useState(true);
const handleToggleSwitch = () =>{
        setInOn(!isOn);
    };

    const checkIsOn = isOn ? "on" : "off";
    const toggleBg = {backgroundColor : isOn ? "#4caf50" : "#f44336"};

    return(
        <> 
        <h1 style={{color : "#000",textAlign : "center "}}>
            Toggle Switch
             <IoIosSwitch />
        </h1>
        <div 
        className="toggle-switch" 
        style={toggleBg} 
        onClick={handleToggleSwitch}>
            <div className={`switch ${checkIsOn}`}>
                <span className="switch-state">{checkIsOn}</span>
            </div>
        </div>
    </>
    );
};