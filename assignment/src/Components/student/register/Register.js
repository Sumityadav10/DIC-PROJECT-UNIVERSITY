import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import signing from "../../../images/privacy.svg"


const Register = () => {

  const navigate = useNavigate()


  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      axios.post("http://localhost:2000/register", user)
            .then( res => {
                alert(res.data.message)
                navigate("/studentlogin")
                
            })
    } else {
      alert("invalid input");
    }
  };

  return (
    <div className="registerContainer">
    <div className="register">
      <h1>Register</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Your Name"
      />

      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder=" Your Email"
      />
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder=" your Password"
      />
      <input
        type="password"
        name="reEnterPassword"
        value={user.reEnterPassword}
        onChange={handleChange}
        placeholder=" Re-enter Password"
      />

      <div className="button" onClick={register}>
        Register
      </div>
      <div>or</div>
      <div className="button" onClick={()=> navigate("/login")} > Login</div>
    </div>

    <div className="login-image">
    <img src={signing} alt="" />
  </div>
    </div>
  );
};

export default Register;
