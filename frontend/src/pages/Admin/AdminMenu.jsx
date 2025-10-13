import React from "react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

const MainMenu = () => {
  const navigate = useNavigate();

  const menuItems = [
    { title: "Role", img: "Civic.png", mode: "Role" },
    { title: "Block Type", img: "/BNP.png", mode: "BlockType" },
    { title: "Survey Topic", img: "/Volenteer.png", mode: "SurveyTopic" },
    { title: "Question Type", img: "/D2D.png", mode: "QuestionType" },
    { title: "QB Category", img: "/Civic.png", mode: "QBCategory" },
    { title: "Survey Type", img: "/Civic.png", mode: "SurveyType" },
    { title: "Corporation", img: "/Civic.png", mode: "Corporation" },
    { title: "Designation", img: "/Civic.png", mode: "Designation" },
    { title: "Assembly", img: "/Civic.png", mode: "Assembly" },
    { title: "Wards", img: "/Civic.png", mode: "Wards" },
    { title: "Reports", img: "/Civic.png", mode: "Reports" },
    { title: "Reports", img: "/Civic.png", mode: "Admin" }, // change this later
  ];

  const chunkArray = (arr, size) =>
    arr.reduce(
      (acc, _, i) => (i % size === 0 ? [...acc, arr.slice(i, i + size)] : acc),
      []
    );

  const rows = chunkArray(menuItems, 4);

  const handleClick = (mode) => {
    if (mode === "Reports") navigate("/reportlist");
    else navigate("/admintable", { state: { mode } });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="flex flex-1 flex-col items-center justify-center py-6 px-5">
        <h3 className="font-bold text-2xl mt-1 mb-3 text-gray-800">
          Main Menu
        </h3>
        <div className="flex flex-col items-center gap-3 w-full max-w-5xl">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="menu bg-gray-100 border border-gray-300 rounded-2xl p-4 flex flex-row flex-wrap items-center justify-evenly gap-8 w-full shadow-sm"
            >
              {row.map((item, i) => (
                <div
                  key={i}
                  className="menu-item flex flex-col items-center gap-1 hover:scale-105 transition-transform duration-200 cursor-pointer"
                  onClick={() => handleClick(item.mode)}
                >
                  <div className="menu-img w-20 h-20 rounded-2xl flex items-center justify-center bg-blue-50 shadow-inner">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  <div className="menu-title text-gray-700 font-medium text-sm text-center">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
