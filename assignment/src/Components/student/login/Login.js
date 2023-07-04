import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import signing from "../../../images/privacy.svg"


const Login = ( {updateUser}) => {

  const navigate = useNavigate()


  const [user, setUser] = useState({

  
    email:"",
    password:"",
    


})

const handleChange = e => {
 const { name, value } = e.target
 setUser({
     ...user,
     [name]: value
 })
}


const login = () => {

  axios.post("http://localhost:2000/login",user)
  .then(res => {
    alert(res.data.message)
    updateUser(res.data.user)
    navigate("/studentlogin")
  } )
} 




  return (
  
<div className="loginContainer pt-3">
  <div className="login">

   

    <h1>Login</h1>
    <input type="text" name="email" value={user.email} onChange={ handleChange }  placeholder="Enter Your Email"/>
    <input type="password" name="password" value={user.password} onChange={ handleChange }  placeholder="Enter your Password" />
    <div className="button" onClick={login}>Login</div>
    <div>or</div>
    <div className="button" onClick={()=> navigate("/register")}>Register</div>



  </div>

  <div className="login-image">
    <img src={signing} alt="" />
  </div>
  </div>
  );
};

export default Login;
