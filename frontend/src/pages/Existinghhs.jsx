import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Existinghhs = () => {
  const [formData, setFormData] = useState({
    doorKnock: "",
    timeConsent: "",
    household: "",
    surveyType: "",
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
    navigate("/surveyqa");
  };

  return (
    <>
      <Navbar />

      {/* Main Content */}
      <main className="container mt-4 mb-5">
        {/* Info Section */}
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
        <p className="mt-5 fw-semibold mb-4">
          Record Found for Door No. 246. Proceed with selection of existing or
          new HH member.
        </p>

        {/* Existing Household Table */}
        <div className="table-responsive mb-4">
          <table className="table table-bordered text-center align-middle">
            <thead className="table-light">
              <tr>
                <th>Name</th>
                <th>Visit Date</th>
                <th>Visit Type</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  id: "rajesh",
                  name: "Rajesh Sharma",
                  date: "13-08-2025",
                  type: "Initial",
                  checked: true,
                },
                {
                  id: "ankur",
                  name: "Ankur Kumar",
                  date: "13-08-2025",
                  type: "Follow-up",
                  checked: false,
                },
              ].map((hh) => (
                <tr key={hh.id}>
                  <td>
                    <div className="form-check d-flex justify-content-center align-items-center">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        id={hh.id}
                        defaultChecked={hh.checked}
                      />
                      <label className="form-check-label" htmlFor={hh.id}>
                        {hh.name}
                      </label>
                    </div>
                  </td>
                  <td>{hh.date}</td>
                  <td>{hh.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Survey Questions */}
        <section className="p-1 ">
          <form onSubmit={handleSubmit}>
            {/* Question 1 */}
            <fieldset className="mb-3">
              <label className="form-label fw-semibold d-block">
                1. Door knocked?{" "}
                <i
                  className="fa-solid fa-lightbulb text-warning ms-1"
                  style={{ cursor: "pointer" }}
                  data-bs-toggle="collapse"
                  data-bs-target="#q1-instruction"
                  aria-expanded="false"
                  aria-controls="q1-instruction"
                ></i>
              </label>
              <div className="collapse mb-2" id="q1-instruction">
                <div className="card card-body p-2">
                  Instruction for Question 1 goes here.
                </div>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="doorKnock"
                  id="unanswered"
                  value="unanswered"
                  checked={formData.doorKnock === "unanswered"}
                  onChange={handleInputChange}
                />
                <label className="form-check-label" htmlFor="unanswered">
                  Unanswered
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="doorKnock"
                  id="answered"
                  value="answered"
                  checked={formData.doorKnock === "answered"}
                  onChange={handleInputChange}
                />
                <label className="form-check-label" htmlFor="answered">
                  Answered
                </label>
              </div>
            </fieldset>

            {/* Question 2 */}
            <fieldset className="mb-3">
              <label className="form-label fw-semibold d-block">
                2. Can I take two mins of your time?{" "}
                <i
                  className="fa-solid fa-lightbulb text-warning ms-1"
                  style={{ cursor: "pointer" }}
                  data-bs-toggle="collapse"
                  data-bs-target="#q2-instruction"
                  aria-expanded="false"
                  aria-controls="q2-instruction"
                ></i>
              </label>
              <div className="collapse mb-2" id="q2-instruction">
                <div className="card card-body p-2">
                  Instruction for Question 2 goes here.
                </div>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="timeConsent"
                  id="yesTime"
                  value="yes"
                  checked={formData.timeConsent === "yes"}
                  onChange={handleInputChange}
                />
                <label className="form-check-label" htmlFor="yesTime">
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="timeConsent"
                  id="noTime"
                  value="no"
                  checked={formData.timeConsent === "no"}
                  onChange={handleInputChange}
                />
                <label className="form-check-label" htmlFor="noTime">
                  No
                </label>
              </div>
            </fieldset>

            <div className="text-center mt-4">
              <button type="submit" className="btn btn-primary px-5">
                Start Survey
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default Existinghhs;
