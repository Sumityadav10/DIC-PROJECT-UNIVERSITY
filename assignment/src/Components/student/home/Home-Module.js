import React from "react";
import "./home.css";
import { NavLink } from "react-router-dom";
import earth from "../../../images/earth.svg"
import completed from "../../../images/done.gif"
import prepare from "../../../images/preparing.gif"
import courses from "../../../images/book.gif"
import Common from "../../../Common"
import signing from "../../../images/signing.gif"

const Homes = ({updateUser,user}) => {
    return (
  
        <div className="homepage">
      
     
      <div className="login-hero">

      <Common 
        name={`Welcome ${user.name}`}
        
        imgsrc={earth}
        visit="/service"
        btnName="Get Started"
      />

</div>

<div className="d-flex flex-wrap justify-content-center cards-student">

<div className="card w-18rem card-course  ">
  <img class="card-img-top" src={completed} alt="Card image cap"/>
  <div class="card-body card-data d-flex justify-content-center flex-column">
    <h5 class="card-title text-center">Completed Subjects</h5>
    <p class="card-text text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure sunt tenetur repudiandae soluta dolore ea sequi hic provident minus quidem. Laudantium, corrupti inventore. Sint, fugit dolore blanditiis unde maxime ipsum.</p>
    <button href="#" class="btn btn-primary "><NavLink exact activeClassName='menu_active' className="nav-link active" aria-current="page" to="/service">
                      Click
                    </NavLink></button>
  </div>
</div>

<div className="card w-18rem card-course">
  <img class="card-img-top" src={courses} alt="Card image cap"/>
  <div class="card-body card-data d-flex justify-content-center flex-column">
    <h5 class="card-title text-center">Additional Courses</h5>
    <p class="card-text text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure sunt tenetur repudiandae soluta dolore ea sequi hic provident minus quidem. Laudantium, corrupti inventore. Sint, fugit dolore blanditiis unde maxime ipsum.</p>
    <button href="#" class="btn btn-primary "> <NavLink exact activeClassName='menu_active '  className="nav-link" to="/courses">
                       Click
                    </NavLink></button>
  </div>
</div>


<div className="card w-18rem card-course">
  <img class="card-img-top" src={prepare} alt="Card image cap"/>
  <div class="card-body card-data d-flex justify-content-center flex-column">
    <h5 class="card-title text-center">Prepare </h5>
    <p class="card-text text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure sunt tenetur repudiandae soluta dolore ea sequi hic provident minus quidem. Laudantium, corrupti inventore. Sint, fugit dolore blanditiis unde maxime ipsum.</p>
    <button href="#" class="btn btn-primary "><NavLink exact activeClassName='menu_active '  className="nav-link" to="/prepare">
                      Click
                    </NavLink></button>
  </div>
</div>


<div className="card w-18rem card-course">
  <img class="card-img-top" src={signing} alt="Card image cap"/>
  <div class="card-body card-data d-flex justify-content-center flex-column">
    <h5 class="card-title text-center">Make Daily Schedule </h5>
    <p class="card-text text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure sunt tenetur repudiandae soluta dolore ea sequi hic provident minus quidem. Laudantium, corrupti inventore. Sint, fugit dolore blanditiis unde maxime ipsum.</p>
    <button href="#" class="btn btn-primary "><NavLink exact activeClassName='menu_active '  className="nav-link" to="/schedule">
                      Click
                    </NavLink></button>
  </div>
</div>


</div>

      <div className="button" onClick={()=>updateUser({})}>Logout</div>
      
      
        </div>
        
        );
};

export default Homes;
