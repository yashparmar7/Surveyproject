import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Final = () => {
  const [formData, setFormData] = useState({
    remark: "",
    phoneCollected: "",
    whatsappGroup: "",
    pamphletGiven: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/home");
  };

  const handleNextHH = () => {
    navigate("/survey");
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
          <h5 className="mb-4">Final Check</h5>

          {/* Remark */}
          <div className="p-3">
            <label htmlFor="remark" className="form-label fw-semibold">
              Remark
            </label>
            <textarea
              name="remark"
              id="remark"
              rows="3"
              className="form-control"
              placeholder="Add your comments"
              value={formData.remark}
              onChange={handleInputChange}
            ></textarea>
          </div>

          {/* Phone Collected */}
          <fieldset className="p-3">
            <div className="d-flex align-items-start gap-2">
              <label className="form-label fw-semibold">
                1. Did you collect the Phone Number?
                <i
                  className="fa-solid fa-lightbulb text-warning ms-2"
                  style={{ cursor: "pointer" }}
                  data-bs-toggle="collapse"
                  data-bs-target="#instruction1"
                ></i>
              </label>
              <div className="collapse flex-grow-1" id="instruction1">
                <div
                  className="p-3 rounded shadow-sm bg-light border-start border-3 border-warning"
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: "1.4",
                    color: "#333",
                  }}
                >
                  instruction goes here.
                </div>
              </div>
            </div>
            <div className="d-flex gap-4 mt-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="phoneCollected"
                  id="q1-yes"
                  value="yes"
                  checked={formData.phoneCollected === "yes"}
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
                  name="phoneCollected"
                  id="q1-no"
                  value="no"
                  checked={formData.phoneCollected === "no"}
                  onChange={handleInputChange}
                  required
                />
                <label className="form-check-label" htmlFor="q1-no">
                  No
                </label>
              </div>
            </div>
          </fieldset>

          {/* WhatsApp Group */}
          <fieldset className="p-3">
            <div className="d-flex align-items-start gap-2">
              <label className="form-label fw-semibold">
                2. Did you add them to the WhatsApp group?
                <i
                  className="fa-solid fa-lightbulb text-warning ms-2"
                  style={{ cursor: "pointer" }}
                  data-bs-toggle="collapse"
                  data-bs-target="#instruction2"
                ></i>
              </label>
              <div className="collapse flex-grow-1" id="instruction2">
                <div
                  className="p-3 rounded shadow-sm bg-light border-start border-3 border-warning"
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: "1.4",
                    color: "#333",
                  }}
                >
                  instruction goes here.
                </div>
              </div>
            </div>
            <div className="d-flex gap-4 mt-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="whatsappGroup"
                  id="q2-yes"
                  value="yes"
                  checked={formData.whatsappGroup === "yes"}
                  onChange={handleInputChange}
                  required
                />
                <label className="form-check-label" htmlFor="q2-yes">
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="whatsappGroup"
                  id="q2-no"
                  value="no"
                  checked={formData.whatsappGroup === "no"}
                  onChange={handleInputChange}
                  required
                />
                <label className="form-check-label" htmlFor="q2-no">
                  No
                </label>
              </div>
            </div>
          </fieldset>

          {/* Pamphlet Given */}
          <fieldset className="p-3">
            <div className="d-flex align-items-start gap-2">
              <label className="form-label fw-semibold">
                3. Did you hand out the pamphlet?
                <i
                  className="fa-solid fa-lightbulb text-warning ms-2"
                  style={{ cursor: "pointer" }}
                  data-bs-toggle="collapse"
                  data-bs-target="#instruction3"
                ></i>
              </label>
              <div className="collapse flex-grow-1" id="instruction3">
                <div
                  className="p-3 rounded shadow-sm bg-light border-start border-3 border-warning"
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: "1.4",
                    color: "#333",
                  }}
                >
                  instruction goes here.
                </div>
              </div>
            </div>
            <div className="d-flex gap-4 mt-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="pamphletGiven"
                  id="q3-yes"
                  value="yes"
                  checked={formData.pamphletGiven === "yes"}
                  onChange={handleInputChange}
                  required
                />
                <label className="form-check-label" htmlFor="q3-yes">
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="pamphletGiven"
                  id="q3-no"
                  value="no"
                  checked={formData.pamphletGiven === "no"}
                  onChange={handleInputChange}
                  required
                />
                <label className="form-check-label" htmlFor="q3-no">
                  No
                </label>
              </div>
            </div>
          </fieldset>

          {/* Buttons */}
          <div className="d-flex justify-content-between mt-5 gap-2">
            <button type="submit" className="btn btn-primary px-5 text-white">
              Finish
            </button>
            <button
              type="submit"
              onClick={handleNextHH}
              className="btn btn-primary px-5 text-white"
            >
              Next HH
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default Final;
