import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CreateForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { mode, data } = location.state || { mode: "create" };

  const [formData, setFormData] = useState({
    fullname: "",
    ward: "",
    area: "",
    community: "",
  });

  useEffect(() => {
    if (mode === "edit" && data) {
      setFormData(data);
    }
  }, [mode, data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(mode === "edit" ? "Updating:" : "Creating:", formData);
    navigate("/admintable");
  };

  return (
    <div className="card shadow-lg border-0 rounded-4 p-4 p-md-5 w-50 mx-auto mt-5 bg-white">
      <h1 className="text-center mb-4 font-bold text-2xl">
        {mode === "edit" ? "Edit Record" : "Create Record"}
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Ward</label>
          <input
            type="text"
            name="ward"
            value={formData.ward}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Area</label>
          <input
            type="text"
            name="area"
            value={formData.area}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Corporation</label>
          <input
            type="text"
            name="community"
            value={formData.community}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100 mt-3">
          {mode === "edit" ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default CreateForm;
