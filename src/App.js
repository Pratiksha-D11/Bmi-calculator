import React, { useState } from 'react';
import './App.css';

function App() {


const[weight,setweight]=useState(0);
const[height,setheight]=useState(0);
const[bmi,setbmi]=useState('');
const[message,setmessage]=useState('');

let calcbmi=(e)=>{
  e.preventDefault();
if(weight===0 || height===0){
alert("Please Enter valid weight and height");
}
else{
  let bmi=(weight/(height*height)*703)
  setbmi(bmi.toFixed(1))

  if(bmi<25){
    setmessage("You are under weight");
  }
  else
    if(bmi>=25 && bmi<30){
      setmessage("You are healthy weight person");
  }
else{
  setmessage("You are overweight");
}
}
}
let reload=()=>{
  window.location.reload();
}

  return (
<>
<div className="App">
  <div className="container">
    <h2> BMI calculator</h2>
    <form onSubmit={calcbmi}>
      <div>
        <label>Weight (ibs)</label>
        <input type="text" placeholder="Enter Weight value"
         value={weight}
         onChange={(e)=>setweight(e.target.value)}
         />
      </div>
      <div>
        <label>Height (ibs)</label>
        <input type="text" placeholder="Enter Height value" 
        value={height}
        onChange={(e)=>setheight(e.target.value)}
        />
      </div>
      <div>
      <button className="btn" type="submit">Submit</button>
      <button className="btn btn-outline" onClick={reload} type="button">Reload</button>
     </div>
      <div className="center">
        <h3>Your BMI is:{bmi}</h3>
        <p>{message}</p>
      </div>
    </form>
  </div>
</div>
</>
  );
}
export default App;
