import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { useLocation, useNavigate } from "react-router-dom";

const AdminTable = () => {
  const navigate = useNavigate();

  const { mode } = useLocation().state || { mode: "Admin" };

  const [blocks, setBlocks] = useState([
    {
      fullname: "Yash Parmar",
      ward: "Whitefield",
      area: "Immadhailli",
      community: "Immadhailli",
    },
    {
      fullname: "Yash Parmar",
      ward: "Whitefield",
      area: "Immadhailli",
      community: "Immadhailli",
    },
    {
      fullname: "Yash Parmar",
      ward: "Whitefield",
      area: "Immadhailli",
      community: "Immadhailli",
    },
    {
      fullname: "Yash Parmar",
      ward: "Whitefield",
      area: "Immadhailli",
      community: "Immadhailli",
    },
    {
      fullname: "Yash Parmar",
      ward: "Whitefield",
      area: "Immadhailli",
      community: "Immadhailli",
    },
    {
      fullname: "Yash Parmar",
      ward: "Whitefield",
      area: "Immadhailli",
      community: "Immadhailli",
    },
  ]);

  const handleCreate = () => {
    navigate("/createform", { state: { mode: "create" } });
  };

  const handleEdit = (index) => {
    const selected = blocks[index];
    navigate("/createform", {
      state: { mode: "edit", data: selected, index },
    });
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this block?")) {
      setBlocks((prev) => prev.filter((_, i) => i !== index));
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
          <table className="table-auto w-full text-left border-collapse">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-6 py-3 text-sm font-semibold">Full Name</th>
                <th className="px-6 py-3 text-sm font-semibold">Ward</th>
                <th className="px-6 py-3 text-sm font-semibold">Area</th>
                <th className="px-6 py-3 text-sm font-semibold">Corporation</th>
                <th className="px-6 py-3 text-sm font-semibold text-center">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {blocks.map((item, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition duration-150"
                >
                  <td className="px-6 py-3 font-medium text-gray-800">
                    {item.fullname}
                  </td>
                  <td className="px-6 py-3 text-gray-600">{item.ward}</td>
                  <td className="px-6 py-3 text-gray-600">{item.area}</td>
                  <td className="px-6 py-3 text-gray-600">{item.community}</td>
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
              ))}

              {blocks.length === 0 && (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-5 text-gray-500 italic"
                  >
                    No records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminTable;
