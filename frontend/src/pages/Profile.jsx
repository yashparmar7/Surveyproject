import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    dob: "",
    address: "",
    phone: "",
    email: "",
    language: "",
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
    navigate("/home");
  };

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="card mx-auto p-4" style={{ maxWidth: "600px" }}>
          <h4 className="mb-4 text-center fw-bold">User Information</h4>
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            {/* Gender */}
            <div className="mb-3">
              <label className="form-label fw-semibold d-block mb-2">
                Gender
              </label>
              <div className="d-flex gap-3 flex-wrap">
                {["male", "female", "other"].map((g) => (
                  <div className="form-check" key={g}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id={g}
                      value={g}
                      checked={formData.gender === g}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor={g}>
                      {g.charAt(0).toUpperCase() + g.slice(1)}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* DOB */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Date of Birth</label>
              <input
                type="date"
                className="form-control"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
              />
            </div>

            {/* Address */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Address</label>
              <textarea
                className="form-control"
                rows="3"
                placeholder="Enter Address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              ></textarea>
            </div>

            {/* Phone */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Phone</label>
              <input
                type="tel"
                className="form-control"
                placeholder="Enter Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            {/* Language */}
            <div className="mb-4">
              <label className="form-label fw-semibold d-block mb-2">
                Language
              </label>
              <div className="d-flex gap-3 flex-wrap">
                {["kannada", "english", "hindi"].map((lang) => (
                  <div className="form-check" key={lang}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="language"
                      id={lang}
                      value={lang}
                      checked={formData.language === lang}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor={lang}>
                      {lang.charAt(0).toUpperCase() + lang.slice(1)}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit */}
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary px-5">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
