import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { useLocation, useNavigate } from "react-router-dom";

const AdminTable = () => {
  const navigate = useNavigate();
  const { mode } = useLocation().state || { mode: "Admin" };

  const [tableData, setTableData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    itemsPerPage: 10,
  });

  // Map column names to keys
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

  // Generic fetch helper
  const fetchData = async (url) => {
    try {
      const res = await fetch(url, { credentials: "include" });
      if (!res.ok) throw new Error(res.statusText);
      const data = await res.json();
      return data;
    } catch (error) {
      console.error(`Error fetching ${url}:`, error);
      return { items: [], pagination: {} };
    }
  };

  // Load data whenever mode or page changes
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      let data = [];
      let endpoint = "";
      let mappedData = [];

      switch (mode) {
        case "Admin":
        case "Role":
          setColumns(["ID", "Full Name", "Email", "Role"]);
          endpoint = `http://localhost:5050/api/admin/get-user?page=${page}&limit=${limit}`;
          data = await fetchData(endpoint);
          mappedData = data.users?.map((u) => ({
            id: u._id,
            fullname: `${u.firstName} ${u.lastName}`,
            email: u.email,
            role: u.role?.roleName || "N/A",
          }));
          break;

        case "BlockType":
          setColumns(["ID", "Block Type"]);
          endpoint = `http://localhost:5050/api/admin/get-blocktype?page=${page}&limit=${limit}`;
          data = await fetchData(endpoint);
          mappedData = data.blockTypes?.map((b) => ({
            id: b._id,
            blockType: b.blockTypeName,
          }));
          break;

        case "SurveyTopic":
          setColumns(["ID", "Survey Topic"]);
          endpoint = `http://localhost:5050/api/admin/get-surveytopic?page=${page}&limit=${limit}`;
          data = await fetchData(endpoint);
          mappedData = data.surveyTopics?.map((s) => ({
            id: s._id,
            surveyTopic: s.surveyTopicName,
          }));
          break;

        case "QuestionType":
          setColumns(["ID", "Question Type"]);
          endpoint = `http://localhost:5050/api/admin/get-questiontype?page=${page}&limit=${limit}`;
          data = await fetchData(endpoint);
          mappedData = data.questionTypes?.map((q) => ({
            id: q._id,
            questionType: q.questionTypeName,
          }));
          break;

        case "QBCategory":
          setColumns(["ID", "QB Category"]);
          endpoint = `http://localhost:5050/api/admin/get-qbcategory?page=${page}&limit=${limit}`;
          data = await fetchData(endpoint);
          mappedData = data.qbCategories?.map((q) => ({
            id: q._id,
            qbCategory: q.qbCategoryName,
          }));
          break;

        case "SurveyType":
          setColumns(["ID", "Survey Type"]);
          endpoint = `http://localhost:5050/api/admin/get-surveytype?page=${page}&limit=${limit}`;
          data = await fetchData(endpoint);
          mappedData = data.surveyTypes?.map((s) => ({
            id: s._id,
            surveyType: s.surveyTypeName,
          }));
          break;

        case "Corporation":
          setColumns(["ID", "Corporation"]);
          endpoint = `http://localhost:5050/api/admin/get-corporation?page=${page}&limit=${limit}`;
          data = await fetchData(endpoint);
          mappedData = data.corporations?.map((c) => ({
            id: c._id,
            corporation: c.corporationName,
          }));
          break;

        case "Designation":
          setColumns(["ID", "Designation"]);
          endpoint = `http://localhost:5050/api/admin/get-designation?page=${page}&limit=${limit}`;
          data = await fetchData(endpoint);
          mappedData = data.designations?.map((d) => ({
            id: d._id,
            designation: d.designationName,
          }));
          break;

        case "Assembly":
          setColumns(["ID", "Assembly"]);
          endpoint = `http://localhost:5050/api/admin/get-assemblyconstituency?page=${page}&limit=${limit}`;
          data = await fetchData(endpoint);
          mappedData = data.assemblies?.map((a) => ({
            id: a._id,
            assembly: a.assemblyName,
          }));
          break;

        case "Wards":
          setColumns(["ID", "Wards"]);
          endpoint = `http://localhost:5050/api/admin/get-ward?page=${page}&limit=${limit}`;
          data = await fetchData(endpoint);
          mappedData = data.wards?.map((w) => ({
            id: w.oldWardNumber,
            ward: w.oldWardName,
          }));
          break;

        case "Reports":
          setColumns(["ID", "Report Name"]);
          endpoint = `http://localhost:5050/api/admin/get-reports?page=${page}&limit=${limit}`;
          data = await fetchData(endpoint);
          mappedData = data.reports?.map((r) => ({
            id: r._id,
            report: r.reportName,
          }));
          break;

        default:
          setColumns(["ID", "Full Name", "Email", "Role"]);
          endpoint = `http://localhost:5050/api/admin/get-user?page=${page}&limit=${limit}`;
          data = await fetchData(endpoint);
          mappedData = data.users?.map((u) => ({
            id: u._id,
            fullname: `${u.firstName} ${u.lastName}`,
            email: u.email,
            role: u.role?.roleName || "N/A",
          }));
      }

      setTableData(mappedData || []);
      setPagination(
        data.pagination || {
          currentPage: page,
          totalPages: 1,
          totalItems: mappedData?.length || 0,
          itemsPerPage: limit,
        }
      );
      setLoading(false);
    };

    loadData();
  }, [mode, page, limit]);

  const handleCreate = () => {
    navigate("/createform", { state: { mode: "create", role: mode } });
  };

  const handleEdit = (index) => {
    const selected = tableData[index];
    navigate("/createform", {
      state: { mode: "edit", role: mode, data: selected },
    });
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      setTableData((prev) => prev.filter((_, i) => i !== index));
    }
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
            <div className="flex justify-center items-center h-96">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
              <span className="ml-5 text-lg font-semibold text-gray-500">
                Loading...
              </span>
            </div>
          ) : (
            <>
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
              {/* Pagination */}
              {/* Pagination */}
              {pagination.totalPages > 1 && (
                <div className="flex flex-col lg:flex-row justify-between items-center mt-4 px-6 py-3 bg-white border-t border-gray-200 rounded-b-lg shadow-sm space-y-2 lg:space-y-0">
                  {/* Rows per page selector */}
                  <div className="flex items-center space-x-2 text-gray-600 text-sm">
                    <span>Rows per page:</span>
                    <select
                      className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      value={limit}
                      onChange={(e) => {
                        setLimit(parseInt(e.target.value));
                        setPage(1);
                      }}
                    >
                      {[5, 10, 25, 50, 100].map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Showing X to Y of Z */}
                  <div className="text-gray-600 text-sm">
                    Showing{" "}
                    {(pagination.currentPage - 1) * pagination.itemsPerPage + 1}{" "}
                    to{" "}
                    {Math.min(
                      pagination.currentPage * pagination.itemsPerPage,
                      pagination.totalItems
                    )}{" "}
                    of {pagination.totalItems} entries
                  </div>

                  {/* Page navigation */}
                  <div className="flex items-center space-x-1">
                    {/* Prev Button */}
                    <button
                      className={`px-3 py-1 rounded border text-sm transition-colors duration-150 ${
                        pagination.currentPage === 1
                          ? "text-gray-400 border-gray-200 cursor-not-allowed"
                          : "text-blue-600 border-blue-500 hover:bg-blue-50"
                      }`}
                      disabled={pagination.currentPage === 1}
                      onClick={() => setPage(pagination.currentPage - 1)}
                    >
                      Prev
                    </button>

                    {/* Page Numbers with Ellipsis */}
                    {Array.from(
                      { length: pagination.totalPages },
                      (_, i) => i + 1
                    ).map((p) => {
                      if (
                        p === 1 ||
                        p === pagination.totalPages ||
                        (p >= pagination.currentPage - 1 &&
                          p <= pagination.currentPage + 1)
                      ) {
                        return (
                          <button
                            key={p}
                            className={`px-3 py-1 rounded border text-sm transition-colors duration-150 ${
                              pagination.currentPage === p
                                ? "bg-blue-500 text-white border-blue-500"
                                : "text-blue-600 border-blue-500 hover:bg-blue-50"
                            }`}
                            onClick={() => setPage(p)}
                          >
                            {p}
                          </button>
                        );
                      } else if (
                        p === pagination.currentPage - 2 ||
                        p === pagination.currentPage + 2
                      ) {
                        return (
                          <span key={p} className="px-2 text-gray-400 text-sm">
                            ...
                          </span>
                        );
                      } else {
                        return null;
                      }
                    })}

                    {/* Next Button */}
                    <button
                      className={`px-3 py-1 rounded border text-sm transition-colors duration-150 ${
                        pagination.currentPage === pagination.totalPages
                          ? "text-gray-400 border-gray-200 cursor-not-allowed"
                          : "text-blue-600 border-blue-500 hover:bg-blue-50"
                      }`}
                      disabled={
                        pagination.currentPage === pagination.totalPages
                      }
                      onClick={() => setPage(pagination.currentPage + 1)}
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminTable;
