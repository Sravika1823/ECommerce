import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UserLogin() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:8081/users/login", {
        phoneNumber,
        password,
      });
      alert(res.data);
      navigate("/products");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div>
      <h2>User Login</h2>
      <input placeholder="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button >Login</button>
    </div>
  );
}

export default UserLogin;
