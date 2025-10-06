import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const LOCATIONIQ_KEY = import.meta.env.VITE_LOCATIONIQ_KEY;

const DoorSearch = () => {
  const [formData, setFormData] = useState({
    surveyType: "",
    establishmentName: "",
    streetName: "",
    floorNumber: "",
    doorNumber: "246",
  });

  const [suggestions, setSuggestions] = useState([]);
  const [searchResult, setSearchResult] = useState(null);
  const [noRecord, setNoRecord] = useState(false);
  const [streetNotFound, setStreetNotFound] = useState(false);

  const navigate = useNavigate();
  const debounceTimer = useRef(null);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "streetName" && !streetNotFound) {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);

      if (value.length > 2) {
        debounceTimer.current = setTimeout(() => {
          fetch(
            `https://us1.locationiq.com/v1/autocomplete.php?key=${LOCATIONIQ_KEY}&q=${value}&format=json&countrycodes=in`
          )
            .then((res) => res.json())
            .then((data) => setSuggestions(data))
            .catch((err) => console.error(err));
        }, 500);
      } else {
        setSuggestions([]);
      }
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setFormData((prev) => ({
      ...prev,
      streetName: suggestion.display_name,
    }));
    setSuggestions([]);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    if (!formData.doorNumber) {
      setSearchResult(null);
      setNoRecord(false);
      return;
    }

    console.log(formData);

    const streetToSave = formData.streetName;
    if (!streetToSave) {
      alert("Please provide a street name!");
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
        streetName: streetToSave,
      });
      setNoRecord(true);
    }
  };

  const handleStartNewSurvey = (event) => {
    event.preventDefault();
    console.log(formData);
    navigate("/survey-start");
  };

  return (
    <>
      <Navbar />
      <main className="container">
        <div className="logo mt-4 d-flex justify-content-center">
          <img src="/logo.png" alt="logo" style={{ width: "80px" }} />
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
                  <label className="form-label fw-semibold">Survey Type</label>
                  <div className="d-flex gap-5">
                    <div className="form-check">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="surveyType"
                        value="mane-vani"
                        checked={formData.surveyType === "mane-vani"}
                        onChange={handleFormChange}
                      />
                      <label className="form-check-label">Mane Vani</label>
                    </div>
                    <div className="form-check">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="surveyType"
                        value="jana-vani"
                        checked={formData.surveyType === "jana-vani"}
                        onChange={handleFormChange}
                      />
                      <label className="form-check-label">Jana Vani</label>
                    </div>
                  </div>

                  {formData.surveyType === "jana-vani" && (
                    <input
                      type="text"
                      className="form-control mt-3"
                      name="establishmentName"
                      placeholder="Enter Establishment Name"
                      value={formData.establishmentName}
                      onChange={handleFormChange}
                      required
                    />
                  )}
                </div>

                {/* Street Name */}
                <div className="mb-3 position-relative">
                  <label className="form-label fw-semibold">
                    Street Name / Landmark
                  </label>

                  {!streetNotFound ? (
                    <>
                      <input
                        type="text"
                        className="form-control"
                        name="streetName"
                        placeholder="Enter Street Name"
                        value={formData.streetName}
                        onChange={handleFormChange}
                        required
                      />
                      {suggestions.length > 0 && (
                        <ul
                          className="list-group position-absolute w-100 zindex-tooltip"
                          style={{ maxHeight: "200px", overflowY: "auto" }}
                        >
                          {suggestions.map((sug) => (
                            <li
                              key={sug.place_id}
                              className="list-group-item list-group-item-action"
                              onClick={() => handleSuggestionClick(sug)}
                              style={{ cursor: "pointer" }}
                            >
                              {sug.display_name}
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <input
                      type="text"
                      className="form-control mt-2"
                      placeholder="Enter new street name"
                      value={formData.streetName}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          streetName: e.target.value,
                        }))
                      }
                      required
                    />
                  )}

                  {/* Street not found checkbox */}
                  <div className="form-check mt-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="streetNotFound"
                      checked={streetNotFound}
                      onChange={(e) => {
                        setStreetNotFound(e.target.checked);
                        setFormData((prev) => ({ ...prev, streetName: "" }));
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="streetNotFound"
                    >
                      Street not in the list
                    </label>
                  </div>
                </div>

                {/* Floor Number */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Floor No</label>
                  <input
                    type="text"
                    className="form-control"
                    name="floorNumber"
                    placeholder="Enter Floor Number"
                    value={formData.floorNumber}
                    onChange={handleFormChange}
                  />
                </div>

                {/* Door Number */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Door Number</label>
                  <input
                    type="text"
                    className="form-control"
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

              {/* Results */}
              {searchResult && (
                <div className="mt-4">
                  <p>
                    <b>Ward Number:</b> {searchResult.wardNumber}
                  </p>
                  <p>
                    <b>Area:</b> {searchResult.area}
                  </p>
                  <p>
                    <b>Community:</b> {searchResult.community}
                  </p>
                  <p>
                    <b>Door Number:</b> {searchResult.doorNumber}
                  </p>
                  <p>
                    <b>Street Name:</b> {searchResult.streetName}
                  </p>
                </div>
              )}

              {noRecord && (
                <div className="mt-4">
                  <p className="fw-bold mb-1">No Record Found.</p>
                  <p>Please add a new survey record.</p>
                  <form onSubmit={handleStartNewSurvey}>
                    <button className="btn btn-primary w-100 mt-2">
                      Start New Survey
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DoorSearch;
