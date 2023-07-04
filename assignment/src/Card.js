import React from "react";
import { NavLink } from "react-router-dom";

function Card(props) {
  return (
    <div className="col-md-4 col-10" mx-auto>
      <div className="card">
        <div className=" imgContainer">
          <img src={props.imgsrc} className="card-img-top " alt="abc" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, voluptatem consequatur animi saepe iure, quibusdam maiores quisquam dolorum molestiae corrupti suscipit harum rerum ea, nam magnam explicabo aliquid adipisci a odit officia exercitationem repellendus modi tempora omnis! Inventore.
          </p>
          <NavLink to="#" className="btn btn-primary">
            know More
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Card;
