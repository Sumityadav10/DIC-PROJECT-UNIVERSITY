import React, { useState } from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {


  const [color,setColor] = useState(false) ;


  const changeColor = () => {

    if (window.scrollY>=10)
    {
      setColor(true)
    }

    else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor) ;


  
  return (
    <div className="nav_bg  mb-0 z-3 ">
      <div >
        <div>
          <nav className= {color ? 'navbar-expand-lg navbar position-fixed main-navbar navbar-bg ' : 'navbar-expand-lg navbar position-fixed main-navbar '}>
            <div className="container-fluid">
              <NavLink exact className="navbar-brand" to="/">
                <h1>Ace University</h1>
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink exact activeClassName='menu_active' className="nav-link" aria-current="page" to="/">
                      Home
                    </NavLink>
                  </li>


                  <li className="nav-item">
                    <NavLink exact activeClassName='menu_active '  className="nav-link " to="/about">
                      About
                    </NavLink>
                  </li>


                  <li className="nav-item">
                    <NavLink exact activeClassName='menu_active '  className="nav-link" to="/campus">
                     Campus
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink exact activeClassName='menu_active '  className="nav-link" to="/studentlogin">
                      Student Login
                    </NavLink>
                  </li>


                 
                  <li className="nav-item">
                    <NavLink exact activeClassName='menu_active '  className="nav-link" to="/achievers">
                      Testimonials
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink exact activeClassName='menu_active '  className="nav-link" to="/contact">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
