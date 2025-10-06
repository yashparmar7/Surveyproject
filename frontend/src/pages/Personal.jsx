import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Personal = () => {
  const [answers, setAnswers] = useState({
    q1: "",
    q2: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answers.q2 === "yes") {
      navigate("/collect-info");
    } else {
      navigate("/final");
    }
  };

  return (
    <>
      <Navbar />

      <main className="container mt-4">
        {/*  Household details card */}
        <div className="p-3 mb-4 rounded shadow-sm bg-light">
          <h5 className="mb-3 fw-semibold">Household Details</h5>
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

        {/*  Form with same style as SurveyQA */}
        <form onSubmit={handleSubmit} id="instructionGroup" className="p-3">
          {/* Question 1 */}
          <fieldset className="p-3">
            <div className="d-flex align-items-start gap-2">
              <label className="form-label fw-semibold mb-0">
                1. Would you like to be part of BNP Area Sabha Team?
                <i
                  className="fa-solid fa-lightbulb text-warning ms-2"
                  style={{ cursor: "pointer" }}
                  data-bs-toggle="collapse"
                  data-bs-target="#q1-instruction"
                  aria-expanded="false"
                  aria-controls="q1-instruction"
                ></i>
              </label>
              <div
                className="collapse flex-grow-1"
                id="q1-instruction"
                data-bs-parent="#instructionGroup"
              >
                <div
                  className="p-3 rounded shadow-sm bg-light border-start border-3 border-warning"
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: "1.4",
                    color: "#333",
                  }}
                >
                  BNP is building citizen-led Area Sabha teams. Already, we have
                  100s of members in this area as part of the group. These teams
                  help resolve civic issues, support services like voter ID &
                  e-Khata, and meet regularly to shape ward-level development.
                  <br />
                  <br />
                  Ask if they’d like to be part of this citizen movement —
                  <em>“Would you like to be part of this citizen movement?”</em>
                </div>
              </div>
            </div>
            <div className="form-check mt-2">
              <input
                className="form-check-input"
                type="radio"
                name="q1"
                id="q1-yes"
                value="yes"
                checked={answers.q1 === "yes"}
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
                name="q1"
                id="q1-no"
                value="no"
                checked={answers.q1 === "no"}
                onChange={handleInputChange}
                required
              />
              <label className="form-check-label" htmlFor="q1-no">
                No
              </label>
            </div>
          </fieldset>

          {/* Question 2 */}
          <fieldset className="p-3">
            <div className="d-flex align-items-start gap-2">
              <label className="form-label fw-semibold mb-0">
                2. Would you be OK with sharing your personal info?
                <i
                  className="fa-solid fa-lightbulb text-warning ms-2"
                  style={{ cursor: "pointer" }}
                  data-bs-toggle="collapse"
                  data-bs-target="#q2-instruction"
                  aria-expanded="false"
                  aria-controls="q2-instruction"
                ></i>
              </label>
              <div
                className="collapse flex-grow-1"
                id="q2-instruction"
                data-bs-parent="#instructionGroup"
              >
                <div
                  className="p-3 rounded shadow-sm bg-light border-start border-3 border-warning"
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: "1.4",
                    color: "#333",
                  }}
                >
                  Instruction for Question 2 goes here.
                </div>
              </div>
            </div>
            <div className="form-check mt-2">
              <input
                className="form-check-input"
                type="radio"
                name="q2"
                id="q2-yes"
                value="yes"
                checked={answers.q2 === "yes"}
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
                name="q2"
                id="q2-no"
                value="no"
                checked={answers.q2 === "no"}
                onChange={handleInputChange}
                required
              />
              <label className="form-check-label" htmlFor="q2-no">
                No
              </label>
            </div>
          </fieldset>

          {/* Buttons */}
          <div className="d-flex justify-content-between mt-4">
            <Link to="/surveyqa" className="btn btn-outline-primary px-4">
              Previous
            </Link>
            <button type="submit" className="btn btn-primary px-4 text-white">
              Continue
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default Personal;
