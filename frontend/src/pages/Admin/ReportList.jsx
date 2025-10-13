import React from "react";
import Navbar from "../../components/Navbar";

const ReportList = () => {
  const reports = [
    { title: "D2D Conversion Rate", img: "/D2D.png" },
    { title: "Volunteer Signed Up", img: "/Volenteer.png" },
    { title: "BNP Members Count", img: "/BNP.png" },
    { title: "Top 3 Civic Issues", img: "/Civic.png" },
    { title: "Residents with Voter ID", img: "/Residents.png" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <p className="my-4 text-center text-3xl font-semibold text-gray-800">
        Report List
      </p>

      <div className="w-11/12 md:w-2/3 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 pb-12">
        {reports.map((report, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-1 border border-gray-300"
            style={{ backgroundColor: "#f8f9fa" }}
          >
            <div className="flex items-center gap-5 p-4">
              <img
                src={report.img}
                alt={report.title}
                className="w-20 h-20 rounded-xl object-contain"
              />
              <p className="text-lg font-semibold text-gray-700">
                {report.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportList;
