import React from "react";
import "./App.css"

const alertFun=()=>{
    alert("Message from Javascript alert!");
}
const logfunc=()=>{
    console.log("Message to developer");
}

function Apps(){
    return(
        <div id="main">
        <h2>Lets see the output of JAVASCRIPT</h2>
        <button onClick={alertFun}k>alert</button><br/>
        <button onClick={logfunc}k>log</button>
        </div>
    );
}


export default Apps;