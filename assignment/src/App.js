import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import About from "./Abouts";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Courses from "./Courses";
import Plan from "./Plan";
import Homes from "./Components/student/home/Home-Module";
import Login from "./Components/student/login/Login";
import Register from "./Components/student/register/Register";
import "./App.css"
import Achievers from "./Components/Testimonial/Achievers";
import Socialmedia from "./Components/Footer/Footer";
import Campus from "./Components/campus/Campus";
import Schedule from "./Components/Todo/Schedule";

function App() {

  const [user, setLoginUser] = useState({});

  useEffect(() => {
   setLoginUser(JSON.parse(localStorage.getItem("MyUser")))
  },[])

 const updateUser = (user) => {

  localStorage.setItem("MyUser", JSON.stringify(user))
  setLoginUser(user)

 }




  
  // const [submitBtn, setSubmitBtn] = useState(false);

  return (
    <div className="App">
      <Navbar />

      {/* {
  submitBtn ? ("hello") : (<Routes>
    <Route exact path="/" Component={Home} />
    <Route exact path="/about" Component={About} />
    <Route exact path="/service" Component={Service} />
    <Route exact path="/contact" Component={Contact} />
 
  </Routes>)
}  */}

      
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/about" Component={About} />
          <Route exact path="/prepare" Component={Plan} />
          <Route exact path="/Schedule" Component={Schedule} />
          <Route exact path="/service" Component={Service} />
          <Route exact path="/campus" Component={Campus} />
          <Route exact path="/contact" Component={Contact} />
          <Route exact path="/courses" Component={Courses} />
          <Route exact path="/studentlogin" element={user && user._id ? <Homes updateUser={updateUser} user={user}/> : <Login updateUser={updateUser} />}/>
          <Route exact path="/login" element={<Login updateUser={updateUser} />} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/achievers" Component={Achievers} />
        </Routes>
      
     
      <Footer />
      <Socialmedia/>

    </div>
  );
}

export default App;
