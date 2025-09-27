import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const CollectInfo = () => {
  const [formData, setFormData] = useState({
    whatsappGroup: "",
    firstname: "",
    lastname: "",
    gender: "",
    age: "",
    phone: "",
    isWhatsApp: false,
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/final");
  };

  return (
    <>
      <Navbar />

      <main className="container mt-4 mb-5">
        {/* Household Details */}
        <div className="p-3 rounded shadow-sm bg-light mb-4">
          <h5 className="mb-3">Household Details</h5>
          <div className="d-flex flex-wrap gap-4">
            <div>
              <strong>Ward Number:</strong> 103
            </div>
            <div>
              <strong>Area:</strong> Whitefield
            </div>
            <div>
              <strong>Street Name:</strong> Rajajinagar
            </div>
            <div>
              <strong>Floor Number:</strong> 2
            </div>
            <div>
              <strong>Community:</strong> Prestige Boulevard
            </div>
            <div>
              <strong>Door Number:</strong> 246
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4">
          <h5 className="mb-4">Now collect the personal information</h5>

          {/* WhatsApp Question */}
          <fieldset className="mb-4">
            <label className="form-label fw-semibold">
              1. Would you be okay being added to the WhatsApp group with <br />
              other like-minded citizens of this area?
              <i
                className="fa-solid fa-lightbulb text-warning ms-2"
                style={{ cursor: "pointer" }}
                data-bs-toggle="collapse"
                data-bs-target="#q1-instruction"
              ></i>
            </label>
            <div className="collapse mt-2" id="q1-instruction">
              <div className="card p-2 small">
                Whatever issue you’re facing whether it’s with E-Khata, property
                tax, or any civic issue like garbage, street lights etc, this
                WhatsApp group is your support community. The BNP Team will pick
                it up immediately and start supporting you.
              </div>
            </div>
            <div className="d-flex gap-4 mt-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="whatsappGroup"
                  id="q1-yes"
                  value="yes"
                  checked={formData.whatsappGroup === "yes"}
                  onChange={handleInputChange}
                  required
                />
                <label className="form-check-label" htmlFor="q1-yes">
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="whatsappGroup"
                  id="q1-no"
                  value="no"
                  checked={formData.whatsappGroup === "no"}
                  onChange={handleInputChange}
                  required
                />
                <label className="form-check-label" htmlFor="q1-no">
                  No
                </label>
              </div>
            </div>
          </fieldset>

          {/* Name Fields */}
          <fieldset className="mb-4">
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="firstname" className="form-label fw-semibold">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  name="firstname"
                  placeholder="Enter first name"
                  value={formData.firstname}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="lastname" className="form-label fw-semibold">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  name="lastname"
                  placeholder="Enter last name"
                  value={formData.lastname}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </fieldset>

          {/* Gender + Age */}
          <fieldset className="mb-4">
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label fw-semibold">Gender</label>
                <div className="d-flex gap-3 mt-1">
                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="gender"
                      id="male"
                      value="male"
                      checked={formData.gender === "male"}
                      onChange={handleInputChange}
                      required
                    />
                    <label htmlFor="male" className="form-check-label">
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="gender"
                      id="female"
                      value="female"
                      checked={formData.gender === "female"}
                      onChange={handleInputChange}
                      required
                    />
                    <label htmlFor="female" className="form-check-label">
                      Female
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="gender"
                      id="other"
                      value="other"
                      checked={formData.gender === "other"}
                      onChange={handleInputChange}
                      required
                    />
                    <label htmlFor="other" className="form-check-label">
                      Other
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="age" className="form-label fw-semibold">
                  Age
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  name="age"
                  placeholder="Enter age"
                  value={formData.age}
                  onChange={handleInputChange}
                  required
                  min="1"
                />
              </div>
            </div>
          </fieldset>

          {/* Phone */}
          <fieldset className="mb-4">
            <label htmlFor="phone" className="form-label fw-semibold">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            <div className="form-check mt-2">
              <input
                type="checkbox"
                className="form-check-input"
                name="isWhatsApp"
                id="check"
                checked={formData.isWhatsApp}
                onChange={handleInputChange}
              />
              <label htmlFor="check" className="form-check-label">
                This is also my WhatsApp number.
              </label>
            </div>
          </fieldset>

          {/* Buttons */}
          <div className="d-flex justify-content-evenly mt-4">
            <Link to="/personal" className="btn btn-outline-primary px-5">
              Previous
            </Link>
            <button type="submit" className="btn btn-primary px-5 text-white">
              Continue
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default CollectInfo;
