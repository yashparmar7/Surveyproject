import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Surveyqa = () => {
  const [answers, setAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
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
    console.log(answers);
    navigate("/personal");
  };

  return (
    <>
      <Navbar />

      {/* Survey Section */}
      <section className="container my-4">
        {/* Household Details */}
        <div className="p-3 mb-4 rounded shadow-sm bg-light">
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
        <form onSubmit={handleSubmit} className="pb-5">
          {/* Reusable style: each fieldset has margin-bottom + padding */}
          {[
            {
              key: "q1",
              question: "1. Do you have a Voter's ID?",
              instruction: "Voter's ID Details go here...",
            },
            {
              key: "q2",
              question: "2. Are you a voter in this area?",
              instruction: "Instruction for Question 2 goes here.",
            },
            {
              key: "q3",
              question: "3. Have you voted in the previous BBMP election?",
              instruction: "Instruction for Question 3 goes here.",
            },
            {
              key: "q4",
              question: "4. Do you know your ward budget?",
              instruction: "Instruction for Question 4 goes here.",
            },
            {
              key: "q5",
              question: "5. Do you know BBMP annual budget?",
              instruction: "If No - Reveal that it is 10,000Cr per year.",
            },
            {
              key: "q6",
              question:
                "6. If a competent and professional candidate stands for corporator elections, regardless of party, would you vote for them?",
              instruction: "Instruction for Question 6 goes here.",
            },
          ].map((q, index) => (
            <fieldset key={index} className="p-3 ">
              {/* Label + info icon */}
              <div className="d-flex align-items-start gap-2">
                <label className="form-label fw-semibold mb-0 flex-grow-1">
                  {q.question}
                  <i
                    className="fa-solid fa-lightbulb text-warning ms-2"
                    style={{ cursor: "pointer" }}
                    data-bs-toggle="collapse"
                    data-bs-target={`#${q.key}-instruction`}
                    aria-expanded="false"
                    aria-controls={`${q.key}-instruction`}
                  ></i>
                </label>
              </div>

              {/* Instructions */}
              <div className="collapse flex-grow-1" id={`${q.key}-instruction`}>
                <div className="card card-body p-3 small bg-light">
                  {q.instruction}
                </div>
              </div>

              {/* Options */}
              <div className="mt-3">
                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name={q.key}
                    id={`${q.key}-yes`}
                    value="yes"
                    checked={answers[q.key] === "yes"}
                    onChange={handleInputChange}
                    required
                  />
                  <label className="form-check-label" htmlFor={`${q.key}-yes`}>
                    Yes
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name={q.key}
                    id={`${q.key}-no`}
                    value="no"
                    checked={answers[q.key] === "no"}
                    onChange={handleInputChange}
                    required
                  />
                  <label className="form-check-label" htmlFor={`${q.key}-no`}>
                    No
                  </label>
                </div>
              </div>
            </fieldset>
          ))}

          {/* Buttons */}
          <div className="d-flex justify-content-evenly mt-4">
            <Link to="/survey-start" className="btn btn-outline-primary px-5">
              Previous
            </Link>
            <button type="submit" className="btn btn-primary px-5 text-white">
              Continue
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Surveyqa;
