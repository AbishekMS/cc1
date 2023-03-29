import React from "react";
import './App.css';

let myarray=["a","e","i","o"];
let vowelArray=myarray;


const disp=()=>{
    alert("Check console output");
    myarray.push("u");
    console.log(vowelArray);
}
function Apps(){
    return(
        <div id="main">
        <button onClick={disp}>click here</button>
        </div>
    )
}
export  default Apps;