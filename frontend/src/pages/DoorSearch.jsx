import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const DoorSearch = () => {
  const [formData, setFormData] = useState({
    surveyType: "",
    establishmentName: "",
    streetName: "",
    floorNumber: "",
    doorNumber: "246",
  });

  const [searchResult, setSearchResult] = useState(null);
  const [noRecord, setNoRecord] = useState(false);

  const navigate = useNavigate();

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = (event) => {
    event.preventDefault();

    if (!formData.doorNumber) {
      setSearchResult(null);
      setNoRecord(false);
      return;
    }

    if (formData.doorNumber === "246") {
      navigate("/existinghhs");
    } else {
      setSearchResult({
        wardNumber: "103",
        area: "Whitefield",
        community: "Prestige Boulevard",
        doorNumber: formData.doorNumber,
      });
      setNoRecord(true);
    }
  };

  const handleStartNewSurvey = (event) => {
    event.preventDefault();
    navigate("/survey-start");
  };

  return (
    <>
      <Navbar />
      <main className="container">
        <div className="logo mt-4 d-flex justify-content-center">
          <img
            src="/logo.png"
            alt="D2DSurvey logo"
            className="img-fluid"
            style={{ width: "80px" }}
          />
        </div>

        <div className="text-center mt-2">
          <h4 className="fw-bold">Door Search</h4>
        </div>

        <div className="row justify-content-center g-3">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card-form p-4">
              <form onSubmit={handleSearch}>
                {/* Survey Type */}
                <div className="mb-3">
                  <label className="form-label fw-semibold d-block">
                    Survey Type
                  </label>
                  <div className="d-flex gap-5">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="surveyType"
                        id="survey-mane-vani"
                        value="mane-vani"
                        checked={formData.surveyType === "mane-vani"}
                        onChange={handleFormChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="survey-mane-vani"
                      >
                        Mane Vani
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="surveyType"
                        id="survey-jana-vani"
                        value="jana-vani"
                        checked={formData.surveyType === "jana-vani"}
                        onChange={handleFormChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="survey-jana-vani"
                      >
                        Jana Vani
                      </label>
                    </div>
                  </div>

                  {formData.surveyType === "jana-vani" && (
                    <input
                      type="text"
                      className="form-control mt-3"
                      id="establishment-name"
                      name="establishmentName"
                      placeholder="Enter Establishment Name"
                      value={formData.establishmentName}
                      onChange={handleFormChange}
                      required
                    />
                  )}
                </div>

                {/* Street Name */}
                <div className="mb-3">
                  <label className="form-label fw-semibold d-block">
                    Street Name/ Landmark
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="street-name"
                    name="streetName"
                    placeholder="Enter Street Name"
                    value={formData.streetName}
                    onChange={handleFormChange}
                    required
                  />
                </div>

                {/* Floor Number */}
                <div className="mb-3">
                  <label className="form-label fw-semibold d-block">
                    Floor No
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="floor-number"
                    name="floorNumber"
                    placeholder="Enter Floor Number"
                    value={formData.floorNumber}
                    onChange={handleFormChange}
                  />
                </div>

                {/* Door Number */}
                <div className="mb-3">
                  <div className="d-flex align-items-start gap-3">
                    <label
                      htmlFor="door-number"
                      className="form-label fw-semibold"
                    >
                      Door Number
                      <i
                        className="fa-solid fa-lightbulb text-warning ms-2"
                        style={{ cursor: "pointer" }}
                        data-bs-toggle="collapse"
                        data-bs-target="#q1-instruction"
                        aria-expanded="false"
                        aria-controls="q1-instruction"
                      ></i>
                    </label>
                  </div>

                  <div className="collapse mt-2" id="q1-instruction">
                    <div className="card card-body p-2">
                      Namaskara! I’m a volunteer with the Bengaluru NavaNirmana
                      Party – or BNP. We are a citizen-led political party
                      focused only on Bengaluru and its local civic issues.
                      <br />
                      <br />
                      We’re not here to ask for votes – just to talk about the
                      citizen movement that is happening in your area.
                      <br />
                      <br />
                      We’re meeting residents like you to listen to your issues,
                      share what BNP is doing, and invite you to be part of this
                      effort – as a supporter, a volunteer, or just someone who
                      wants better governance.
                      <br />
                      <br />
                      Can I take 2 minutes of your time and share how?
                    </div>
                  </div>

                  <input
                    type="text"
                    className="form-control mt-2"
                    id="door-number"
                    name="doorNumber"
                    placeholder="Enter Door Number"
                    value={formData.doorNumber}
                    onChange={handleFormChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100 p-2">
                  Search
                </button>
              </form>

              {searchResult && (
                <div className="search-info mt-4">
                  <p>
                    <span className="fw-bold">Ward Number:</span>
                    {searchResult.wardNumber}
                  </p>
                  <p>
                    <span className="fw-bold">Area:</span>
                    {searchResult.area}
                  </p>
                  <p>
                    <span className="fw-bold">Community:</span>
                    {searchResult.community}
                  </p>
                  <p>
                    <span className="fw-bold">Door Number:</span>
                    {searchResult.doorNumber}
                  </p>
                </div>
              )}

              {noRecord && (
                <>
                  <div className="mt-4">
                    <p className="mb-1 fw-bold">No Record Found.</p>
                    <p className="mb-0 fw-semibold">
                      Please add a new survey record.
                    </p>
                  </div>
                  <form onSubmit={handleStartNewSurvey}>
                    <button
                      type="submit"
                      className="btn btn-primary w-100 mt-3 p-lg-2"
                    >
                      Start New Survey
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DoorSearch;
