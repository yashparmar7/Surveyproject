import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = (e) => {
    setAgreed(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (agreed) {
      navigate("/survey");
    }
  };

  return (
    <>
      <Navbar />

      <main
        className="container mt-3 d-flex flex-column align-items-center mb-5"
        role="main"
      >
        <div className="logo text-center mb-3">
          <img
            src="/logo.png"
            alt="Jana Spandana Survey Logo"
            className="img-fluid"
            style={{ maxWidth: "90px" }}
          />
        </div>

        <div
          className="card shadow-sm px-5 py-4"
          style={{ maxWidth: "600px", width: "100%" }}
        >
          <form onSubmit={handleSubmit}>
            <section
              className="profile-info mb-3"
              aria-label="User profile information"
            >
              <h2 className="mb-4 text-center">Welcome, Rajesh!</h2>
              <ul className="list-unstyled">
                <li>
                  <strong>Last login:</strong> 23-Aug-2025, 16:30 hrs
                </li>
                <li>
                  <strong>Total HH Surveyed (Overall):</strong>
                  324
                </li>
                <li>
                  <strong>Total HH Surveyed (Last):</strong>
                  54
                </li>
                <li>
                  <strong>Area/Community Surveyed Last:</strong>
                  Vidhyaranyapura
                </li>
                <li>
                  <strong>Area/Community Assigned Today:</strong>
                  Indiranagara
                </li>
                <li>
                  <strong>Questionnaire Assigned:</strong>
                  QB-0032
                </li>
                <li>
                  <strong>More about Questionnaire:</strong>
                  <Link to="#" className="text-primary text-decoration-none">
                    Click here
                  </Link>
                </li>
                <li>
                  <strong>Your Central Team Contact:</strong>
                  Saranya S
                </li>
              </ul>
            </section>
            <div className="scroll-box mb-3">
              <p>
                <b>Do's</b> <br />
                Be polite, respectful & patient <br />
                Clearly introduce BNP and yourself as a BNP Volunteer <br />
                Record accurate data <br />
                Thank them warmly irrespective of Outcome <br />
                <br />
                <b>Dont's</b> <br />
                Don’t ask for votes <br />
                Don’t speak negatively about other parties or politicians <br />
                Don’t force anyone to share details <br />
                Don’t get into arguments or debates <br />
                Don’t make false promises. <br />
              </p>
            </div>

            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="termsCheckbox"
                checked={agreed}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="termsCheckbox">
                I have read and agree to the Do's and Don'ts
              </label>
            </div>

            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-primary px-5"
                disabled={!agreed}
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Home;
