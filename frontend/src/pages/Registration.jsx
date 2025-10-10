import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { toast } from "react-toastify";

const Registration = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    dob: "",
    address: "",
    phone: "",
    email: "",
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
    console.log(formData);

    setFormData({
      firstname: "",
      lastname: "",
      gender: "",
      dob: "",
      address: "",
      phone: "",
      email: "",
    });
    toast.success("Registration Successful!");
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <div className="d-flex align-items-center justify-content-center vh-90 mt-4">
        <div
          className="card shadow-lg border-0 rounded-4 p-4 p-md-5"
          style={{
            width: "100%",
            maxWidth: "700px",
            background: "#fff",
          }}
        >
          <h3 className="mb-4 text-center fw-bold">Registration Form</h3>

          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              {/* First Name */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter First Name"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Last Name */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Last Name"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Email */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Phone */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Enter Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  pattern="[0-9]{10}"
                  required
                />
              </div>

              {/* DOB */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">Date of Birth</label>
                <input
                  type="date"
                  className="form-control"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Gender */}
              <div className="col-md-6">
                <label className="form-label fw-semibold d-block">Gender</label>
                <div className="d-flex align-items-center gap-3 mt-1">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="male"
                      value="male"
                      checked={formData.gender === "male"}
                      onChange={handleInputChange}
                      required
                    />
                    <label className="form-check-label" htmlFor="male">
                      Male
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="female"
                      value="female"
                      checked={formData.gender === "female"}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="female">
                      Female
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="other"
                      value="other"
                      checked={formData.gender === "other"}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="other">
                      Other
                    </label>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="col-12">
                <label className="form-label fw-semibold">Address</label>
                <textarea
                  className="form-control"
                  placeholder="Enter Address"
                  name="address"
                  rows="2"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
            </div>

            {/* Submit */}
            <div className="d-flex justify-content-center mt-4">
              <button
                type="submit"
                className="btn btn-primary px-5 py-2 rounded-3 fw-semibold"
              >
                Register Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration;
