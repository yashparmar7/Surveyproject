import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Index = () => {
  const [formData, setFormData] = useState({
    loginID: "",
    otp: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    navigate("/home");
  };

  return (
    <>
      <Navbar />

      <main
        className="container mt-5 d-flex flex-column align-items-center"
        role="main"
      >
        <div className="logo text-center mb-3">
          <img
            src="/logo.png"
            alt="Jana Spandana Survey Logo"
            className="img-fluid"
            style={{ maxWidth: "120px" }}
          />
        </div>

        <h3 className="text-center mb-4">Jana Spandana Survey (HHS)</h3>

        <section className="login-form w-100" style={{ maxWidth: "400px" }}>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="loginID" className="form-label">
                Your Login ID
              </label>
              <input
                type="text"
                className="form-control"
                id="loginID"
                name="loginID"
                placeholder="Your Email ID or Phone Number"
                value={formData.loginID}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="otp" className="form-label">
                Enter OTP
              </label>
              <input
                type="text"
                className="form-control"
                id="otp"
                name="otp"
                placeholder="Enter OTP"
                value={formData.otp}
                onChange={handleInputChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 mt-3 p-2">
              Login
            </button>
          </form>
        </section>
      </main>
    </>
  );
};

export default Index;
