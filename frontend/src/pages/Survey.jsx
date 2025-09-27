import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Survey = () => {
  const [formData, setFormData] = useState({
    ward: "",
    newWard: "",
    area: "",
    newArea: "",
    blockType: "",
    newBlockType: "",
    block: "",
    newBlock: "",
    pincode: "560066",
    surveyType: "",
    establishmentName: "",
    remember: false,
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
    navigate("/door-search");
  };

  return (
    <>
      <Navbar />
      <main className="container mt-5 d-flex flex-column align-items-center justify-content-center">
        <div className="logo mb-2">
          <img
            src="/logo.png"
            alt="D2DSurvey logo"
            className="img-fluid"
            style={{ width: "80px" }}
          />
        </div>
        <h3 className="text-center mb-3">Jana Spandana Survey</h3>

        <div className="survey-form w-100" style={{ maxWidth: "800px" }}>
          <form onSubmit={handleSubmit} className="p-4">
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="ward-name" className="form-label fw-semibold">
                    Ward Name
                  </label>
                  <select
                    className="form-select"
                    id="ward-name"
                    name="ward"
                    value={formData.ward}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled>
                      Select Ward
                    </option>
                    <option value="create">Create New</option>
                    <option value="whitefield">Whitefield</option>
                    <option value="vigyan">Vigyan Nagar</option>
                    <option value="indira">Indira Nagara</option>
                  </select>
                  {formData.ward === "create" && (
                    <input
                      type="text"
                      className="form-control mt-2"
                      name="newWard"
                      placeholder="Enter new ward"
                      value={formData.newWard}
                      onChange={handleInputChange}
                    />
                  )}
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="area-name" className="form-label fw-semibold">
                    Area Name
                  </label>
                  <select
                    className="form-select"
                    id="area-name"
                    name="area"
                    value={formData.area}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled>
                      Select Area
                    </option>
                    <option value="create">Create New</option>
                    <option value="whitefield">Whitefield</option>
                    <option value="vigyan">Vigyan Nagar</option>
                    <option value="indira">Indira Nagara</option>
                  </select>
                  {formData.area === "create" && (
                    <input
                      type="text"
                      className="form-control mt-2"
                      name="newArea"
                      placeholder="Enter new area"
                      value={formData.newArea}
                      onChange={handleInputChange}
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label
                    htmlFor="block-type"
                    className="form-label fw-semibold"
                  >
                    Block Type
                  </label>
                  <select
                    className="form-select"
                    id="block-type"
                    name="blockType"
                    value={formData.blockType}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled>
                      Select Type (Lake, Mall, etc)
                    </option>
                    <option value="create">Create New</option>
                    <option value="lake">Lake</option>
                    <option value="mall">Mall</option>
                    <option value="road">Road</option>
                    <option value="bus-stand">Bus stand</option>
                    <option value="bus-station">Bus station</option>
                    <option value="railway">Railway station</option>
                    <option value="airport">Airport</option>
                    <option value="park">Park</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="apt">Apartment</option>
                    <option value="layout">Layout</option>
                  </select>
                  {formData.blockType === "create" && (
                    <input
                      type="text"
                      className="form-control mt-2"
                      name="newBlockType"
                      placeholder="Enter new block type"
                      value={formData.newBlockType}
                      onChange={handleInputChange}
                    />
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="block" className="form-label fw-semibold">
                    Block Name
                  </label>
                  <select
                    className="form-select"
                    id="block"
                    name="block"
                    value={formData.block}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled>
                      Select Block Name
                    </option>
                    <option value="create">Create New</option>
                    <option value="ecc-road">ECC Road</option>
                    <option value="prithvi-layout">Prithvi Layout</option>
                    <option value="dodsworth-colony">Dodsworth Colony</option>
                    <option value="pattandur-agaraha">
                      Pattandur Agrahara
                    </option>
                    <option value="borewell-road"> Borewell road</option>
                  </select>
                  {formData.block === "create" && (
                    <input
                      type="text"
                      className="form-control mt-2"
                      name="newBlock"
                      placeholder="Enter new block"
                      value={formData.newBlock}
                      onChange={handleInputChange}
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="pincode" className="form-label fw-semibold">
                    Pincode
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="pincode"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    placeholder="Enter 6 digit code"
                    required
                  />
                </div>
              </div>

              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="remember"
                  id="check"
                  checked={formData.remember}
                  onChange={handleInputChange}
                />
                <label htmlFor="check" className="form-check-label">
                  Remember this data selection for the next HHS
                </label>
              </div>
              {/* Button  */}
              <div className="d-flex justify-content-evenly mt-4">
                <Link to="/home" className="btn btn-outline-primary px-5">
                  Previous
                </Link>
                <button
                  type="submit"
                  className="btn btn-primary px-5 text-white"
                >
                  Continue
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Survey;
