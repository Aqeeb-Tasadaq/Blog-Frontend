import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setimage] = useState(null);
  const navigate = useNavigate();
  //  const [status, setStatus] = useState(null);
 
  const UserSignUp = () => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
    formData.append("email", email);
    formData.append("password", password);

    axios.post("http://localhost:4000/create_user", formData)
      .then(function (res) {
         alert(res.data.msg);
        //const id = res.data.userData._id;
        // console.log("Get Response", res);

         navigate(`/LoginPage`)
      })
      .catch(function (err) {
        alert(err.response.data.msg);
        // console.log(err);
      });
  };
  return (
    <div className="loginbody">
      <div className="container">
        <div className="form-container">
          <h2>Sign up for Your Blog</h2>
          <label>First Name::</label>
          <input
            type="text"
            value={first_name}
            placeholder="First Name"
            onChange={(e) => setfirst_name(e.target.value)}
          />
          <label>Last Name::</label>
          <input
            type="text"
            value={last_name}
            placeholder="Last Name"
            onChange={(e) => setlast_name(e.target.value)}
          />
          <label>Email:</label>
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setimage(e.target.files[0])}
          />
          <button type="submit" onClick={UserSignUp}>
            Sign up
          </button>
          <div className="signup-link">
            Already have an account? <Link to="/">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
