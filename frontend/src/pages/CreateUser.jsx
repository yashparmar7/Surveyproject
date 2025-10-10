import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";

const CreateUser = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5050/api/users/create-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstname,
          lastName: formData.lastname,
          email: formData.email,
          phone: formData.phone,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success(
          " User Created Successfully! Check email for set-password link."
        );
        console.log("Invite link:", data.setPasswordLink);
        navigate("/createuser");
        setFormData({
          firstname: "",
          lastname: "",
          phone: "",
          email: "",
        });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Error creating user. Please try again later.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="d-flex align-items-center justify-content-center my-20 bg-light">
        <div
          className="card shadow-lg border-0 rounded-4 p-4 p-md-5"
          style={{
            width: "100%",
            maxWidth: "700px",
            background: "#fff",
          }}
        >
          <h3 className="mb-4 text-center fw-bold">Create User Form</h3>

          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              {/* First Name */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter First Name"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Last Name */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Last Name"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Email */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Phone */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Enter Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  pattern="[0-9]{10}"
                  required
                />
              </div>
            </div>

            {/* Submit */}
            <div className="d-flex justify-content-center mt-4">
              <button
                type="submit"
                className="btn btn-primary px-5 py-2 rounded-3 fw-semibold"
              >
                Submit Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateUser;
