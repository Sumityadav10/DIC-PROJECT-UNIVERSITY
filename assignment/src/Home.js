import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import student from "./images/student.svg";
import rank1 from './images/ranking-1.jpg';
import rank2 from './images/ranking-2.jpg';
import rank3 from './images/ranking-3.jpg';
import rank4 from './images/nirf.jpg';
import star from './images/star-icon.png';
import "./Components/style.css"





// import { NavLink } from "react-router-dom";
import Common from "./Common";
function Home() {
  return (
    <div>

      
      <Common
        name="Ace In Everyfield with "
        
        imgsrc={student}
        visit="/studentlogin"
        btnName="Get Started"
      />

<div class="accredition">
        <div class="accText">
          <div class="header">
            <h1>
              <i><b>Rankings & Awards</b></i>
            </h1>
          </div>

          <div class="para">
            <p>
              Rated amongst the top ranked innovation-driven private
              universities
            </p>
            <p>and technical institutes in the country.</p>
          </div>

          <div class="button">Read more</div>
          

          <div class="star"><img src={star} alt="k" /></div>
        </div>

        <div class="boxes">
          <div>
            <img class="rankImage2" src={rank1} alt="a" />
          </div>

          <div><img class="rankImage1" src={rank2} alt="b" /></div>
          <div><img class="rankImage1" src={rank3} alt="c" /></div>
          <div><img class="rankImage2" src={rank4} alt="d" /></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
