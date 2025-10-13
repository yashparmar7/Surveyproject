import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { useLocation, useNavigate } from "react-router-dom";

const AdminTable = () => {
  const navigate = useNavigate();
  const { mode } = useLocation().state || { mode: "Admin" };

  const [tableData, setTableData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [loading, setLoading] = useState(false);

  // Generic fetch helper
  const fetchData = async (url) => {
    try {
      const res = await fetch(url, { credentials: "include" });
      if (!res.ok) throw new Error(res.statusText);
      const data = await res.json();
      return data;
    } catch (error) {
      console.error(`Error fetching ${url}:`, error);
      return [];
    }
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      let data = [];

      switch (mode) {
        case "Admin":
          setColumns(["ID", "Full Name", "Email", "Role"]);
          data = await fetchData("http://localhost:5050/api/admin/get-user");
          setTableData(
            data.map((u) => ({
              id: u._id,
              fullname: `${u.firstName} ${u.lastName}`,
              email: u.email,
              role: u.role?.roleName || "N/A",
            }))
          );
          break;

        case "Role":
          setColumns(["ID", "User Name", "Email", "Role Name"]);
          data = await fetchData("http://localhost:5050/api/admin/get-user");
          console.log(data);
          setTableData(
            data.map((r) => ({
              id: r._id,
              userName: `${r.firstName} ${r.lastName}`,
              email: r.email,
              roleName: r.role?.roleName || "N/A",
            }))
          );
          break;

        case "BlockType":
          setColumns(["ID", "Block Type"]);
          data = await fetchData(
            "http://localhost:5050/api/admin/get-blocktype"
          );
          setTableData(
            data.map((b) => ({ id: b._id, blockType: b.blockTypeName }))
          );
          break;

        case "SurveyTopic":
          setColumns(["ID", "Survey Topic"]);
          data = await fetchData(
            "http://localhost:5050/api/admin/get-surveytopic"
          );
          setTableData(
            data.map((s) => ({ id: s._id, surveyTopic: s.surveyTopicName }))
          );
          break;

        case "QuestionType":
          setColumns(["ID", "Question Type"]);
          data = await fetchData(
            "http://localhost:5050/api/admin/get-questiontype"
          );
          setTableData(
            data.map((q) => ({ id: q._id, questionType: q.questionTypeName }))
          );
          break;

        case "QBCategory":
          setColumns(["ID", "QB Category"]);
          data = await fetchData(
            "http://localhost:5050/api/admin/get-qbcategory"
          );
          setTableData(
            data.map((q) => ({ id: q._id, qbCategory: q.qbCategoryName }))
          );
          break;

        case "SurveyType":
          setColumns(["ID", "Survey Type"]);
          data = await fetchData(
            "http://localhost:5050/api/admin/get-surveytype"
          );
          setTableData(
            data.map((s) => ({ id: s._id, surveyType: s.surveyTypeName }))
          );
          break;

        case "Corporation":
          setColumns(["ID", "Corporation"]);
          data = await fetchData(
            "http://localhost:5050/api/admin/get-corporation"
          );
          setTableData(
            data.map((c) => ({ id: c._id, corporation: c.corporationName }))
          );
          break;

        case "Designation":
          setColumns(["ID", "Designation"]);
          data = await fetchData(
            "http://localhost:5050/api/admin/get-designation"
          );
          setTableData(
            data.map((d) => ({ id: d._id, designation: d.designationName }))
          );
          break;

        case "Assembly":
          setColumns(["ID", "Assembly"]);
          data = await fetchData(
            "http://localhost:5050/api/admin/get-assemblyconstituency"
          );
          setTableData(
            data.map((a) => ({ id: a._id, assembly: a.assemblyName }))
          );
          break;

        case "Wards":
          setColumns(["ID", "Wards"]);
          data = await fetchData("http://localhost:5050/api/admin/get-ward");
          setTableData(
            data.map((w) => ({ id: w.oldWardNumber, ward: w.oldWardName }))
          );
          break;

        case "Reports":
          setColumns(["ID", "Report Name"]);
          data = await fetchData("http://localhost:5050/api/admin/get-reports");
          setTableData(data.map((r) => ({ id: r._id, report: r.reportName })));
          break;

        default:
          setColumns(["ID", "Full Name", "Email", "Role"]);
          data = await fetchData("http://localhost:5050/api/admin/get-user");
          setTableData(
            data.map((u) => ({
              id: u._id,
              fullname: `${u.firstName} ${u.lastName}`,
              email: u.email,
              role: u.role?.roleName || "N/A",
            }))
          );
      }

      setLoading(false);
    };

    loadData();
  }, [mode]);

  const handleCreate = () => {
    navigate("/createform", { state: { mode: "create", role: mode } });
  };

  const handleEdit = (index) => {
    const selected = tableData[index];
    navigate("/createform", {
      state: {
        mode: "edit",
        role: mode,
        data: selected,
      },
    });
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      setTableData((prev) => prev.filter((_, i) => i !== index));
    }
  };

  const columnKeyMap = {
    ID: "id",
    "Full Name": "fullname",
    "User Name": "userName",
    Email: "email",
    Role: "role",
    "Role Name": "roleName",
    "Block Type": "blockType",
    "Survey Topic": "surveyTopic",
    "Question Type": "questionType",
    "QB Category": "qbCategory",
    "Survey Type": "surveyType",
    Designation: "designation",
    Assembly: "assembly",
    Wards: "ward",
    "Report Name": "report",
    Corporation: "corporation",
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="flex flex-col items-center w-full py-10 px-6 lg:px-20">
        <div className="flex justify-between items-center w-full lg:w-3/4 mb-6">
          <h3 className="text-2xl font-bold text-gray-800">{mode} Table</h3>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded"
            onClick={handleCreate}
          >
            Create New
          </button>
        </div>

        <div className="w-full lg:w-3/4 overflow-x-auto bg-white rounded-xl shadow-md border border-gray-100">
          {loading ? (
            <p className="text-center py-5 text-gray-500">Loading...</p>
          ) : (
            <table className="table-auto w-full text-left border-collapse">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  {columns.map((col, i) => (
                    <th key={i} className="px-6 py-3 text-sm font-semibold">
                      {col}
                    </th>
                  ))}
                  <th className="px-6 py-3 text-sm font-semibold text-center">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.length ? (
                  tableData.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b hover:bg-gray-50 transition duration-150"
                    >
                      {columns.map((col, i) => (
                        <td key={i} className="px-6 py-3 text-gray-700">
                          {item[columnKeyMap[col]] ?? "N/A"}
                        </td>
                      ))}
                      <td className="px-6 py-3 flex justify-center gap-4">
                        <button
                          className="text-blue-600 hover:text-blue-800 font-medium"
                          onClick={() => handleEdit(index)}
                        >
                          <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button
                          className="text-red-600 hover:text-red-800 font-medium"
                          onClick={() => handleDelete(index)}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={columns.length + 1}
                      className="text-center py-5 text-gray-500 italic"
                    >
                      No records found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminTable;
