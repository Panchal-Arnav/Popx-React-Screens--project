// 

import React, { useState } from "react";
import "../styles/Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    alert("Login submitted!");
  };

  return (
    <form className="login-container animated-fadeIn" onSubmit={handleSubmit}>
      <h2>Signin to your PopX account</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

      <label>
        Email Address
        <input
          type="email"
          name="email"
          placeholder="Enter email address"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Password
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </label>

      <button
        type="submit"
        className="btn btn-login"
        disabled={!formData.email || !formData.password}
      >
        Login
      </button>
    </form>
  );
};

export default Login;