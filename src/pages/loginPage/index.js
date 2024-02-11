import React, { useState } from "react";
import axios from "axios";
 import { useAuth } from "../../context/ThemeContext";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import logo from '../../assets/Logo.png'
import { FaBars } from "react-icons/fa";
import search from'../../assets/search-outline.png'

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate= useNavigate();
   const [status, setStatus] = useState(null);
   const {isAuthenticated, user, login } = useAuth();
  // console.log({ auth });
  // console.log({user})
  const userData = {
    email: email,
    password: password,
  };

  const UserLogin = () => {
    axios
      .post("http://localhost:4000/login_user", userData)
      .then(function (res) {
         //alert(res.data.userData._id);
        const id = res.data.userData._id;
        console.log("Get Response", id );
        login(res?.data?.userData)
        setStatus(res?.data?.msg)
        
        navigate(`/home/${id}`)
        
        
      })
      .catch(function (err) {
        console.log(err)
        alert(err.response.data.msg)
        // console.log(err.response.data.msg);
      });
  };
  

  return (
    
      <div className='loginbody'>
    <div className="container">
    <div className="form-container">
    <div className="login_logo"> 
    <img src={logo} alt="logo" /></div>
      <h2>Login to your Blog!</h2>
      <h2>{status? status: ''}</h2>
      <label htmlFor="login-username">Username:</label>
      <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <label htmlFor="login-password">Password:</label>
      <input type="password" value={password} minlength="8" placeholder="Password" onChange={(e) => setPassword(e.target.value) } required />
      <button type="submit" onClick={UserLogin}>Login</button>
      <div className="signup-link">
        Don't have an account? <Link to="/signupPage">Sign Up</Link>
      </div>
    </div>
  </div>
  </div>

  );
};

export default LoginPage;
