import { useState } from "react";
import React from "react";

const Clock = ()=> {
    let time = new Date().toLocaleTimeString();
    
    const [ctime,setCtime]= useState(time);

    const UpdateTime = () =>{
        time = new Date().toLocaleTimeString();
        setCtime(time);
    };

    setInterval(UpdateTime, 1000);
    return(
        <>
            <h1 style={{paddingLeft:530, paddingTop:250}}>{ctime}</h1>
        </>
    );
}
export default Clock;

