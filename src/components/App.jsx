import React, { useState } from "react";

function handleClick(){
  [name , setName]= useState("") ;
 
   
}


function handleChange(event){
  console.log(event.target.value);
  setName(event.target.value);
}

function App() {
  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <input onChange= {handleChange} type="text" placeholder="What's your name?" />
      <button type = "Submit" onClick= {handleClick}>Submit</button>
    </div>
  );
}

export default App;
