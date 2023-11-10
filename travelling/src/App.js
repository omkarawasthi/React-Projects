import React from "react";
import data from "./data";
import Tours from "./components/Tours";
import {useState} from 'react';
const App = () => {

  const [tours,setTour] = useState(data);

  function removeTour(id){
    const newTour = tours.filter(tour=>tour.id !== id);
    setTour(newTour);
  }
  if(tours.length === 0){
    return (
      <div className="notour">
        <h2> No Tour Left</h2>
        <button className="refbtn" onClick={()=>setTour(data)}>
          Refresh
        </button>
      </div>
    );
  }
  return (
    <div className="app">
      <Tours tours = {tours} removeTour ={removeTour}></Tours>
    </div>
  );
};

export default App;
