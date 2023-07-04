import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import study from "./images/study.svg";
// import { NavLink } from "react-router-dom";
import Common from "./Common";

function About() {
  return (
    <div>
      <Common
        name="Welcome to About Page"
        imgsrc={study}
        visit="/contact"
        btnName="contact now"
      />
    </div>
  );
}

export default About;
