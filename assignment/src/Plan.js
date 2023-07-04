import React, { useState } from "react";
import Dataplan from "./Dataplan";
import Plannings from "./Components/Plannings";

const Plan = () => {
  const [tours, setTours] = useState(Dataplan);

  function removeTour(id) {
    
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  
  }  

  if(tours.length===0){

    return(
      <div className="refresh">
        <h2>No Options Left</h2>
        <button className="btn-white" onClick={()=> setTours(Dataplan)}>Refresh</button>
      </div>
    )

  }

  return (
    <div  >
      <Plannings tours={tours} removeTour={removeTour}></Plannings>
    </div>
  );
};

export default Plan;
