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
    setAnswers((prev) => ({
      ...prev,
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

      <section className="container my-4">
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

        <form onSubmit={handleSubmit} className="pb-5">
          {/* Question 1 */}
          <fieldset className="p-3">
            <div className="d-flex align-items-start gap-2">
              <label className="form-label fw-semibold mb-0 ">
                1. Do you have a Voter's ID?
                <i
                  className="fa-solid fa-lightbulb text-warning ms-2"
                  style={{ cursor: "pointer" }}
                  data-bs-toggle="collapse"
                  data-bs-target="#q1-instruction"
                  aria-expanded="false"
                  aria-controls="q1-instruction"
                ></i>
              </label>
              <div className="collapse flex-grow-1" id="q1-instruction">
                <div
                  className="card card-body p-3 small bg-light"
                  style={{ maxWidth: "800px" }}
                >
                  Voter's ID Details go here...
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className="form-check mb-2">
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
            </div>
          </fieldset>

          {/* Question 2 */}
          <fieldset className="p-3">
            <div className="d-flex align-items-start gap-2">
              <label className="form-label fw-semibold mb-0 ">
                2. Are you a voter in this area?
                <i
                  className="fa-solid fa-lightbulb text-warning ms-2"
                  style={{ cursor: "pointer" }}
                  data-bs-toggle="collapse"
                  data-bs-target="#q2-instruction"
                  aria-expanded="false"
                  aria-controls="q2-instruction"
                ></i>
              </label>
              <div className="collapse flex-grow-1" id="q2-instruction">
                <div className="card card-body p-3 small bg-light">
                  Instruction for Question 2 goes here.
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

          {/* Question 3 */}
          <fieldset className="p-3">
            <div className="d-flex align-items-start gap-2">
              <label className="form-label fw-semibold mb-0">
                3. Have you voted in the previous BBMP election?
                <i
                  className="fa-solid fa-lightbulb text-warning ms-2"
                  style={{ cursor: "pointer" }}
                  data-bs-toggle="collapse"
                  data-bs-target="#q3-instruction"
                  aria-expanded="false"
                  aria-controls="q3-instruction"
                ></i>
              </label>
              <div className="collapse flex-grow-1" id="q3-instruction">
                <div className="card card-body p-3 small bg-light">
                  Instruction for Question 3 goes here.
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="q3"
                  id="q3-yes"
                  value="yes"
                  checked={answers.q3 === "yes"}
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
                  name="q3"
                  id="q3-no"
                  value="no"
                  checked={answers.q3 === "no"}
                  onChange={handleInputChange}
                  required
                />
                <label className="form-check-label" htmlFor="q3-no">
                  No
                </label>
              </div>
            </div>
          </fieldset>

          {/* Question 4 */}
          <fieldset className="p-3">
            <div className="d-flex align-items-start gap-2">
              <label className="form-label fw-semibold mb-0 ">
                4. Do you know your ward budget?
                <i
                  className="fa-solid fa-lightbulb text-warning ms-2"
                  style={{ cursor: "pointer" }}
                  data-bs-toggle="collapse"
                  data-bs-target="#q4-instruction"
                  aria-expanded="false"
                  aria-controls="q4-instruction"
                ></i>
              </label>
              <div className="collapse flex-grow-1" id="q4-instruction">
                <div className="card card-body p-3 small bg-light">
                  Instruction for Question 4 goes here.
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="q4"
                  id="q4-yes"
                  value="yes"
                  checked={answers.q4 === "yes"}
                  onChange={handleInputChange}
                  required
                />
                <label className="form-check-label" htmlFor="q4-yes">
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="q4"
                  id="q4-no"
                  value="no"
                  checked={answers.q4 === "no"}
                  onChange={handleInputChange}
                  required
                />
                <label className="form-check-label" htmlFor="q4-no">
                  No
                </label>
              </div>
            </div>
          </fieldset>

          {/* Question 5 */}
          <fieldset className="p-3">
            <div className="d-flex align-items-start gap-2">
              <label className="form-label fw-semibold mb-0 ">
                5. Do you know BBMP annual budget?
                <i
                  className="fa-solid fa-lightbulb text-warning ms-2"
                  style={{ cursor: "pointer" }}
                  data-bs-toggle="collapse"
                  data-bs-target="#q5-instruction"
                  aria-expanded="false"
                  aria-controls="q5-instruction"
                ></i>
              </label>
              <div className="collapse flex-grow-1" id="q5-instruction">
                <div className="card card-body p-3 small bg-light">
                  If No - Reveal that it is 10,000Cr per year.
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="q5"
                  id="q5-yes"
                  value="yes"
                  checked={answers.q5 === "yes"}
                  onChange={handleInputChange}
                  required
                />
                <label className="form-check-label" htmlFor="q5-yes">
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="q5"
                  id="q5-no"
                  value="no"
                  checked={answers.q5 === "no"}
                  onChange={handleInputChange}
                  required
                />
                <label className="form-check-label" htmlFor="q5-no">
                  No
                </label>
              </div>
            </div>
          </fieldset>

          {/* Question 6 */}
          <fieldset className="p-3">
            <div className="d-flex align-items-start gap-2">
              <label className="form-label fw-semibold mb-0 flex-grow-1">
                6. If a competent and professional candidate stands for
                corporator elections, regardless of party, would you vote for
                them?
                <i
                  className="fa-solid fa-lightbulb text-warning ms-2"
                  style={{ cursor: "pointer" }}
                  data-bs-toggle="collapse"
                  data-bs-target="#q6-instruction"
                  aria-expanded="false"
                  aria-controls="q6-instruction"
                ></i>
              </label>
            </div>
            <div className="collapse flex-grow-1" id="q6-instruction">
              <div className="card card-body p-3 small bg-light">
                Instruction for Question 6 goes here.
              </div>
            </div>
            <div className="mt-3">
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="q6"
                  id="q6-yes"
                  value="yes"
                  checked={answers.q6 === "yes"}
                  onChange={handleInputChange}
                  required
                />
                <label className="form-check-label" htmlFor="q6-yes">
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="q6"
                  id="q6-no"
                  value="no"
                  checked={answers.q6 === "no"}
                  onChange={handleInputChange}
                  required
                />
                <label className="form-check-label" htmlFor="q6-no">
                  No
                </label>
              </div>
            </div>
          </fieldset>

          {/* Buttons */}
          <div className="d-flex justify-content-between mt-4">
            <Link to="/survey-start" className="btn btn-outline-primary px-4">
              Previous
            </Link>
            <button type="submit" className="btn btn-primary px-4 text-white">
              Continue
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Surveyqa;
