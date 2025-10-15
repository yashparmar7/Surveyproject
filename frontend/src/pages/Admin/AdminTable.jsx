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
  const [limit, setLimit] = useState(5);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    itemsPerPage: 10,
  });

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

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      let data = {};
      let endpoint = "";
      let mappedData = [];

      switch (mode) {
        case "User":
          setColumns([
            "ID",
            "First Name",
            "Last Name",
            "Email",
            "Phone",
            "Role",
          ]);
          endpoint = `http://localhost:5050/api/admin/get-user?page=${page}&limit=${limit}`;
          data = await fetchData(endpoint);
          mappedData = data.users?.map((r) => ({
            id: r._id,
            firstName: r.firstName,
            lastName: r.lastName,
            email: r.email,
            phone: r.phone,
            role: r.role?.roleName || "N/A",
          }));
          break;

        case "Role":
          setColumns(["ID", "Role Name"]);
          endpoint = `http://localhost:5050/api/admin/get-role?page=${page}&limit=${limit}`;
          data = await fetchData(endpoint);
          mappedData = data.roles?.map((r) => ({
            id: r._id,
            roleName: r.roleName,
          }));
          break;

        case "BlockType":
          setColumns(["ID", "Block Type Name"]);
          endpoint = `http://localhost:5050/api/admin/get-blocktype?page=${page}&limit=${limit}`;
          data = await fetchData(endpoint);
          mappedData = data.blockTypes?.map((b) => ({
            id: b._id,
            blockTypeName: b.blockTypeName,
          }));
          break;

        case "SurveyTopic":
          setColumns(["ID", "Survey Topic Name"]);
          endpoint = `http://localhost:5050/api/admin/get-surveytopic?page=${page}&limit=${limit}`;
          data = await fetchData(endpoint);
          mappedData = data.surveyTopics?.map((s) => ({
            id: s._id,
            surveyTopicName: s.surveyTopicName,
          }));
          break;

        case "QuestionType":
          setColumns(["ID", "Question Type Name"]);
          endpoint = `http://localhost:5050/api/admin/get-questiontype?page=${page}&limit=${limit}`;
          data = await fetchData(endpoint);
          mappedData = data.questionTypes?.map((q) => ({
            id: q._id,
            questionTypeName: q.questionTypeName,
          }));
          break;

        case "QBCategory":
          setColumns(["ID", "QB Category Name"]);
          endpoint = `http://localhost:5050/api/admin/get-qbcategory?page=${page}&limit=${limit}`;
          data = await fetchData(endpoint);
          mappedData = data.qbCategories?.map((q) => ({
            id: q._id,
            qbCategoryName: q.qbCategoryName,
          }));
          break;

        case "SurveyType":
          setColumns(["ID", "Survey Type Name"]);
          endpoint = `http://localhost:5050/api/admin/get-surveytype?page=${page}&limit=${limit}`;
          data = await fetchData(endpoint);
          mappedData = data.surveyTypes?.map((s) => ({
            id: s._id,
            surveyTypeName: s.surveyTypeName,
          }));
          break;

        case "Corporation":
          setColumns(["ID", "Corporation Name"]);
          endpoint = `http://localhost:5050/api/admin/get-corporation?page=${page}&limit=${limit}`;
          data = await fetchData(endpoint);
          mappedData = data.corporations?.map((c) => ({
            id: c._id,
            corporationName: c.corporationName,
          }));
          break;

        case "Designation":
          setColumns(["ID", "Designation Name"]);
          endpoint = `http://localhost:5050/api/admin/get-designation?page=${page}&limit=${limit}`;
          data = await fetchData(endpoint);
          mappedData = data.designations?.map((d) => ({
            id: d._id,
            designationName: d.designationName,
          }));
          break;

        case "Assembly":
          setColumns(["ID", "Assembly Name"]);
          endpoint = `http://localhost:5050/api/admin/get-assemblyconstituency?page=${page}&limit=${limit}`;
          data = await fetchData(endpoint);
          mappedData = data.assemblies?.map((a) => ({
            id: a._id,
            assemblyName: a.assemblyName,
          }));
          break;

        case "Wards":
          setColumns(["ID", "old Ward Number", "old Ward Name"]);
          endpoint = `http://localhost:5050/api/admin/get-ward?page=${page}&limit=${limit}`;
          data = await fetchData(endpoint);
          mappedData = data.wards?.map((w) => ({
            id: w._id,
            oldWardNumber: w.oldWardNumber,
            oldWardName: w.oldWardName,
          }));
          break;

        case "Reports":
          setColumns(["ID", "Report Name"]);
          endpoint = `http://localhost:5050/api/admin/get-reports?page=${page}&limit=${limit}`;
          data = await fetchData(endpoint);
          mappedData = data.reports?.map((r) => ({
            id: r._id,
            reportName: r.reportName,
          }));
          break;

        default:
          mappedData = [];
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
    const dataWithId = { ...selected, _id: selected.id };
    console.log(dataWithId);
    navigate("/createform", {
      state: { mode: "edit", role: mode, data: dataWithId },
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
                            {item[
                              Object.keys(item).find(
                                (key) =>
                                  key.toLowerCase() ===
                                  col.replace(/\s+/g, "").toLowerCase()
                              )
                            ] ?? "N/A"}
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
              {pagination.totalPages > 1 && (
                <div className="flex flex-col sm:flex-row justify-between items-center mt-4 px-4 py-3 bg-white border-t border-gray-200 rounded-b-lg shadow-sm gap-3">
                  <div className="flex items-center space-x-2 text-gray-700 text-sm">
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

                  <div className="flex items-center space-x-1 flex-wrap justify-center sm:justify-end">
                    <button
                      className={`
      rounded-md border py-2 px-3 text-center text-sm transition-all shadow-sm
      ${
        pagination.currentPage === 1
          ? "border-blue-300 text-blue-600 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          : "text-blue-600 border-blue-300 hover:text-white hover:bg-blue-600 hover:border-blue-800 focus:text-white focus:bg-blue-600 focus:border-blue-800 active:border-blue-800 active:text-white active:bg-blue-600 hover:shadow-lg"
      }
    `}
                      disabled={pagination.currentPage === 1}
                      onClick={() => setPage(pagination.currentPage - 1)}
                    >
                      Prev
                    </button>

                    <div className="flex justify-center items-center space-x-1">
                      {Array.from(
                        { length: pagination.totalPages },
                        (_, i) => i + 1
                      )
                        .filter((p) => {
                          if (p <= 2) return true;
                          if (p > pagination.totalPages - 2) return true;
                          if (
                            p >= pagination.currentPage - 1 &&
                            p <= pagination.currentPage + 1
                          )
                            return true;
                          return false;
                        })
                        .map((p, index, array) => {
                          const showEllipsisBefore =
                            index > 0 && p > array[index - 1] + 1;

                          const elements = [];

                          if (showEllipsisBefore) {
                            elements.push(
                              <span
                                key={`ellipsis-${p}-before`}
                                className="px-3 py-2 text-blue-600 text-sm"
                              >
                                ...
                              </span>
                            );
                          }

                          elements.push(
                            <button
                              key={p}
                              className={`
              min-w-9 rounded-md py-2 px-3 text-center text-sm transition-all
              ${
                pagination.currentPage === p
                  ? "bg-blue-600 border border-transparent text-white shadow-md hover:shadow-lg hover:bg-blue-700 active:bg-blue-700 focus:bg-blue-700"
                  : "text-blue-600 border border-blue-300 shadow-sm hover:shadow-lg hover:text-white hover:bg-blue-600 hover:border-blue-800 focus:text-white focus:bg-blue-600 focus:border-blue-800 active:border-blue-800 active:text-white active:bg-blue-600"
              }
              disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none
            `}
                              onClick={() => setPage(p)}
                            >
                              {p}
                            </button>
                          );

                          return elements;
                        })}
                    </div>

                    <button
                      className={`
      rounded-md border py-2 px-3 text-center text-sm transition-all shadow-sm
      ${
        pagination.currentPage === pagination.totalPages
          ? "border-blue-300 text-blue-600 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          : "text-blue-600 border-blue-300 hover:text-white hover:bg-blue-600 hover:border-blue-800 focus:text-white focus:bg-blue-600 focus:border-blue-800 active:border-blue-800 active:text-white active:bg-blue-600 hover:shadow-lg"
      }
    `}
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
