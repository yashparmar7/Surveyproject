import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const SurveyStart = () => {
  const [answers, setAnswers] = useState({ q1: "", q2: "", q3: "" });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(answers);
    navigate("/surveyqa");
  };

  return (
    <>
      <Navbar />

      <main className="container my-4">
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
              <strong>Community:</strong> Prestige Boulevard
            </div>
            <div>
              <strong>Door Number:</strong> 246
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="pb-5">
          <div id="instructionGroup">
            {/* Question 1 */}
            <fieldset className=" p-3">
              <div className="d-flex align-items-start gap-2">
                <label className="form-label fw-semibold mb-0">
                  1. Was the door knocked?
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
                  <div className="card card-body p-3 small bg-light">
                    Instruction for question 1 goes here.
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="q1"
                    id="q1-unanswered"
                    value="unanswered"
                    checked={answers.q1 === "unanswered"}
                    onChange={handleInputChange}
                    required
                  />
                  <label className="form-check-label" htmlFor="q1-unanswered">
                    Unanswered
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="q1"
                    id="q1-answered"
                    value="answered"
                    checked={answers.q1 === "answered"}
                    onChange={handleInputChange}
                    required
                  />
                  <label className="form-check-label" htmlFor="q1-answered">
                    Answered
                  </label>
                </div>
              </div>
            </fieldset>

            {/* Question 2 */}
            <fieldset className="p-3">
              <div className="d-flex align-items-start gap-2">
                <label className="form-label fw-semibold mb-0">
                  2. Can I take two minutes of your time?
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
                  <div className="card card-body p-3 small bg-light">
                    Instruction for question 2 goes here.
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <div className="form-check mb-2">
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
              </div>
            </fieldset>
          </div>

          {/* Buttons */}
          <div className="d-flex justify-content-between mt-4">
            <Link to="/door-search" className="btn btn-outline-primary px-4">
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

export default SurveyStart;
