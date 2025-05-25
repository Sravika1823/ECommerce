import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import loginImage from "../images/login.png";
import logoImage from "../images/logo.png";

function UserLogin() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Replace with actual backend API
      const res = await fetch("http://localhost:8081/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber, password }),
      });
      const data = await res.text();
      alert(data);
      navigate("/products");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="container px-4 text-center">
      <div className="row gx-5 mt-5">
        <div className="col">
          <div className="p-3 login1">
            <p className="elegance">Elegance<br />Start here</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="180" height="26" viewBox="0 0 180 26" fill="none">
              <path d="M2 23.6834C31.3333 14.0167 107.6 -3.4166 178 4.1834" stroke="white" strokeWidth="4" strokeLinecap="round" />
            </svg>
            <p className="Where">Where style meets simplicity. Enjoy your shopping experience.</p>

            <div className="text-center">
              <img className="loginimg img-fluid" src={loginImage} alt="Login Illustration" />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="p-3" style={{ alignContent: "center" }}>
            <img className="loginlogo" src={logoImage} alt="Logo" />
            <p className="welcome">Welcome Back</p>
            <p className="please">Please Login to Your account</p>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control custom-input"
                placeholder="Username"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control custom-input"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div style={{ marginTop: "-10px" }}>
              <p className="loginforgot">Forgot Password?</p>
            </div>
            <div className="d-grid gap-2">
              <button className="btn custom-btn " type="button" onClick={handleLogin}>Login</button>
            </div>
            <hr style={{ border: "none", height: "2px", backgroundColor: "#8d8c8c", width: "50%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
