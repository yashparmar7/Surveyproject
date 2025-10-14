import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreateForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { mode, role, data } = location.state || {
    mode: "create",
    role: "Admin",
  };

  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fieldConfigs = {
    Admin: [
      { name: "firstName", label: "First Name", type: "text", required: true },
      { name: "lastName", label: "Last Name", type: "text", required: false },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "phone", label: "Phone", type: "text", required: true },
      { name: "role", label: "Role", type: "text", required: true },
    ],
    Role: [
      { name: "firstName", label: "First Name", type: "text", required: true },
      { name: "lastName", label: "Last Name", type: "text", required: false },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "role", label: "Role", type: "text", required: true },
    ],
    BlockType: [
      {
        name: "blockTypeName",
        label: "Block Type Name",
        type: "text",
        required: true,
      },
    ],
    SurveyTopic: [
      {
        name: "surveyTopicName",
        label: "Survey Topic Name",
        type: "text",
        required: true,
      },
    ],
    QuestionType: [
      {
        name: "questionTypeName",
        label: "Question Type Name",
        type: "text",
        required: true,
      },
    ],
    QBCategory: [
      {
        name: "qbCategoryName",
        label: "QB Category Name",
        type: "text",
        required: true,
      },
    ],
    SurveyType: [
      {
        name: "surveyTypeName",
        label: "Survey Type Name",
        type: "text",
        required: true,
      },
    ],
    Corporation: [
      {
        name: "corporationName",
        label: "Corporation Name",
        type: "text",
        required: true,
      },
    ],
    Designation: [
      {
        name: "designationName",
        label: "Designation Name",
        type: "text",
        required: true,
      },
    ],
    Assembly: [
      {
        name: "assemblyName",
        label: "Assembly Name",
        type: "text",
        required: true,
      },
    ],
    Wards: [
      {
        name: "oldWardNumber",
        label: "Ward Number",
        type: "text",
        required: true,
      },
      { name: "oldWardName", label: "Ward Name", type: "text", required: true },
    ],
    Reports: [
      {
        name: "reportName",
        label: "Report Name",
        type: "text",
        required: true,
      },
    ],
  };

  const fields = fieldConfigs[role] || [];

  useEffect(() => {
    if (mode === "edit" && data) {
      setFormData(data);
    } else {
      const initialData = {};
      fields.forEach((field) => (initialData[field.name] = ""));
      setFormData(initialData);
    }
  }, [mode, data, role]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const resourceMap = {
        Admin: "user",
        Role: "role",
        BlockType: "blocktype",
        SurveyTopic: "surveytopic",
        QuestionType: "questiontype",
        QBCategory: "qbcategory",
        SurveyType: "surveytype",
        Corporation: "corporation",
        Designation: "designation",
        Assembly: "assemblyconstituency",
        Wards: "ward",
        Reports: "report",
      };

      const resource = resourceMap[role] || role.toLowerCase();

      const endpoint =
        mode === "edit"
          ? `http://localhost:5050/api/admin/update-${resource}/${formData._id}`
          : `http://localhost:5050/api/admin/create-${resource}`;

      console.log(endpoint);

      // const endpoint =
      //   mode === "edit"
      //     ? `http://localhost:5050/api/admin/update-${role.toLowerCase()}/${
      //         formData.id
      //       }`
      //     : `http://localhost:5050/api/admin/create-${role.toLowerCase()}`;

      const method = mode === "edit" ? "PUT" : "POST";

      const response = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      console.log(response);
      if (!response.ok) throw new Error(`Failed to ${mode} ${role}`);

      toast.success(
        `${role} ${mode === "edit" ? "updated" : "created"} successfully`
      );
      navigate("/admintable", { state: { mode: role } });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card shadow-lg border-0 rounded-4 p-4 p-md-5 w-11/12 md:w-1/3 mx-auto mt-5">
      <h1 className="text-center mb-4 font-bold text-2xl">
        {mode === "edit" ? `Edit ${role}` : `Create ${role}`}
      </h1>

      {error && (
        <div className="alert alert-danger text-red-600 text-sm mb-2">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.name} className="mb-3">
            <label className="form-label font-semibold">{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name] || ""}
              onChange={handleChange}
              required={field.required}
              className="form-control w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        ))}

        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded"
            disabled={loading}
          >
            {loading ? "Saving..." : mode === "edit" ? "Update" : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateForm;
