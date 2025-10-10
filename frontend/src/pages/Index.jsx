import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { toast } from "react-toastify";

const Index = () => {
  const [formData, setFormData] = useState({
    loginID: "",
    otp: "",
    password: "",
  });

  const [loginMethod, setLoginMethod] = useState("password");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleMethodChange = (e) => {
    setLoginMethod(e.target.value);
    setFormData((prev) => ({ ...prev, otp: "", password: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let payload;

      if (loginMethod === "password") {
        payload = {
          email: formData.loginID.toLowerCase(),
          password: formData.password,
        };
      } else {
        payload = {
          loginID: formData.loginID,
          otp: formData.otp,
        };
      }

      const res = await fetch("http://localhost:5050/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        toast.success("Login successful!");

        // Redirect based on role
        if (data.user.role.roleName === "Volunteer") {
          navigate("/home");
        } else if (
          data.user.role.roleName === "Admin" ||
          data.user.role.roleName === "SuperAdmin"
        ) {
          navigate("/adminmenu");
        } else {
          navigate("/");
        }
      } else {
        toast.error(data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error. Please try again later.");
    }
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
          {/* --- Login Method Switch --- */}
          <div className="d-flex justify-content-center gap-3 mb-4">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="loginMethod"
                id="otpLogin"
                value="otp"
                checked={loginMethod === "otp"}
                onChange={handleMethodChange}
              />
              <label className="form-check-label" htmlFor="otpLogin">
                Login with OTP
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="loginMethod"
                id="passwordLogin"
                value="password"
                checked={loginMethod === "password"}
                onChange={handleMethodChange}
              />
              <label className="form-check-label" htmlFor="passwordLogin">
                Login with Password
              </label>
            </div>
          </div>

          {/* --- Login Form --- */}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="loginID" className="form-label fw-semibold">
                Your Login ID
              </label>
              <input
                type="text"
                className="form-control"
                id="loginID"
                name="loginID"
                placeholder="Enter Email or Phone Number"
                value={formData.loginID}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Conditional Rendering Based on Login Type */}
            {loginMethod === "otp" ? (
              <>
                <div className="mb-3">
                  <label htmlFor="otp" className="form-label fw-semibold">
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

                <button
                  type="button"
                  className="btn btn-outline-secondary w-100 mb-3"
                  onClick={() => toast.success("OTP sent successfully!")}
                >
                  Send OTP
                </button>
              </>
            ) : (
              <div className="mb-3">
                <label htmlFor="password" className="form-label fw-semibold">
                  Enter Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
            )}

            <button type="submit" className="btn btn-primary w-100 mt-3 p-2">
              Login
            </button>

            {loginMethod === "password" && (
              <div className="text-center mt-3">
                <Link to="/forgot-password" className="text-decoration-none">
                  Forgot Password?
                </Link>
              </div>
            )}
          </form>
        </section>
      </main>
    </>
  );
};

export default Index;
