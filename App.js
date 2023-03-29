
import './App.css';
import React from 'react';


function Form(){
  const handleAns=(e)=>{
    const first=e.target.fname.value;
    
    console.log("name "+first )
  }
  
    return(
      <div id='main'>
      <form onSubmit={handleAns}>
      <input type="text" name="fname" placeholder='firstName'/><br></br>
      <input type="text" name="lname" placeholder='lastName'/><br></br>
      <button> Submit</button>
      </form>
      </div>
    );
  
}

export default Form;
