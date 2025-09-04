// 


import React, { useState } from "react";
import "../styles/CreateAccount.css";

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: "Yes",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle create account submission logic here
    alert("Account created successfully!");
  };

  return (
    <form className="create-account-container animated-fadeInUp" onSubmit={handleSubmit}>
      <h2>Create your PopX account</h2>

      <label>
        Full Name*
        <input
          type="text"
          name="fullName"
          placeholder="Marry Doe"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Phone number*
        <input
          type="text"
          name="phoneNumber"
          placeholder="123-456-7890"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Email address*
        <input
          type="email"
          name="email"
          placeholder="example@mail.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Password*
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Company name
        <input
          type="text"
          name="companyName"
          placeholder="Company Inc."
          value={formData.companyName}
          onChange={handleChange}
        />
      </label>

      <div className="agency-question">
        Are you an Agency?*
        <label>
          <input
            type="radio"
            name="isAgency"
            value="Yes"
            checked={formData.isAgency === "Yes"}
            onChange={handleChange}
            required
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="isAgency"
            value="No"
            checked={formData.isAgency === "No"}
            onChange={handleChange}
          />
          No
        </label>
      </div>

      <button type="submit" className="btn btn-create-account">
        Create Account
      </button>
    </form>
  );
};

export default CreateAccount;