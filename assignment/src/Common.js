import React from "react";
// import student from "./images/student.svg";
import { NavLink } from "react-router-dom";

function Common(props) {
  return (
    <div >
      <section id="header" className=" d-flex align-items-center pt-5 ">
        <div className="container-fluid  ">
          <div className="row ">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">
                  <h1>{props.name}</h1>
                  <h1 id="university">
                    <strong className="brand-name text-primary">
                      Ace University
                    </strong>
                  </h1>
                  <h2 className="my-3">
                    Everything you have ever wanted is on the other side of
                    fear.
                  </h2>

                  <div className="mt-3">
                    <NavLink
                      className=" btn-get-started"
                      to={props.visit}
                      role="button"
                    >
                      {props.btnName}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="home img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Common;
