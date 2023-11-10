//import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const[text,setText] = useState('');
  

  /* Variation 1-> without dependency.
  
  useEffect(()=>{
    console.log("Component rendering Done");
  }); // useEffect jis component ke andar likha hai vo component ke render hone ke baad jo funtion me likha hoga usse execute karega
  */

  /* Variation 2-> of useEffect-> when and only first rendering is done.
  
  seEffect(()=>{
    console.log("Component rendering Done");
  },[]); // second parameter shows dependency on funtion.
  */

  /* Variation 3-> on first render + whenever dependencies is changed.
  
  useEffect(()=>{
    console.log("Component rendering Done");
  },[text]); // whenever text change this console log will print. if value is not change then no function is run.
  */

  // Variation 4-> too handle unmounting of a component.
 // unmounting -> example you add an event listner and then remove that listner this is call unmounting. "when a component is removed from the DOM, or unmounting as React likes to call it".
    useEffect(()=>{
      console.log("listner added");
    
      return ()=>{
      console.log("listner removed"); // first this line is execute then other line of useEffect is used.
      }
    },[text]);



  function changeHandler(event){
    console.log(text);
    setText(event.target.value);
  }

  return (
    <div className="App">
      <input type="text" onClick={changeHandler}></input>
    </div>
  );
}

export default App;
