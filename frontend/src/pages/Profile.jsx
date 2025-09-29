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
      <div className="container py-4 py-md-4">
        <div
          className="card shadow-lg border-0 rounded-3 mx-auto p-4 p-md-5"
          style={{ maxWidth: "720px" }}
        >
          <h4 className="mb-4 text-center fw-bold fs-3">User Information</h4>

          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              {/* Name */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>

              {/* Email */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              {/* Gender */}
              <div className="col-md-6">
                <label className="form-label fw-semibold d-block">Gender</label>
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
              <div className="col-md-6">
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
              <div className="col-md-6">
                <label className="form-label fw-semibold">Address</label>
                <textarea
                  className="form-control"
                  rows="2"
                  placeholder="Enter Address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                ></textarea>
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
                />
              </div>

              {/* Language */}
              <div className="col-12">
                <label className="form-label fw-semibold d-block">
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
            </div>

            {/* Submit */}
            <div className="d-flex justify-content-center mt-4">
              <button type="submit" className="btn btn-primary px-4 py-2">
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
