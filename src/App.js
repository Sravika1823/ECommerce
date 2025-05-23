import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import UserLogin from "./components/UserLogin";
import UserRegister from "./components/UserRegister";
import OtpVerification from "./components/OtpVerification";
import ProductPage from "./components/ProductPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/users/login" element={<UserLogin />} />
        <Route path="/users/register" element={<UserRegister />} />
        <Route path="/users/verify" element={<OtpVerification />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/" element={<UserLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
