import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UserRegister() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post("http://localhost:8081/users/register", { phoneNumber });
      alert("OTP sent to phone!");
      navigate("/users/verify", { state: { phoneNumber } });
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div>
      <h2>User Registration</h2>
      <input placeholder="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)} />
      <button onClick={handleRegister}>Send OTP</button>
    </div>
  );
}

export default UserRegister;
