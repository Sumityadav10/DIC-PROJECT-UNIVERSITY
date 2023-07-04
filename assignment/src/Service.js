import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

function Service() {
  return (

    <div className="mt-5">
    <h1 className="text-center complete-heading">Your Completed Courses</h1>

    <div className="container-fluid mb-5">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row gy-4">
            {
                Sdata.map((val,ind)=>{

                    return <Card imgsrc={val.imgsrc}
                    title={val.title} key={ind}
                    
                    /> 
                })
            }
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Service;
