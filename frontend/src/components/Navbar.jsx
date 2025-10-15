import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const role = JSON.parse(localStorage.getItem("user"))?.role;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to={
            role?.roleName === "Admin" || role?.roleName === "SuperAdmin"
              ? "/adminmenu"
              : "/home"
          }
          className="flex items-center font-bold text-xl text-black text-decoration-none"
        >
          <img
            src="/logo.png"
            alt="D2DSurvey Logo"
            className="w-10 h-10 mr-2 object-contain"
          />
          {role?.roleName === "Admin" || role?.roleName === "SuperAdmin"
            ? "Admin Dashboard"
            : "D2D Survey"}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Notification */}
          <button
            className="p-2 bg-blue-100 border border-blue-100 rounded shadow-sm hover:bg-blue-200 transition"
            title="Notifications"
          >
            <i className="fa-regular fa-bell text-black-700"></i>
          </button>

          {/* User Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="p-2 bg-blue-100 border border-blue-100 rounded shadow-sm hover:bg-blue-200 transition"
            >
              <i className="fa-regular fa-user text-black-700"></i>
            </button>
            {dropdownOpen && (
              <ul className="absolute right-0 mt-2 w-48 bg-gray-100 rounded shadow-lg border">
                <li>
                  <Link
                    to="/profile"
                    className="flex items-center  py-3 hover:bg-gray-100 text-black text-decoration-none"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <i className="fa-regular fa-user mr-2"></i> My Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="flex items-center  py-2 hover:bg-gray-100 text-black text-decoration-none"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <i className="fa-solid fa-gear mr-2"></i> Settings
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left flex items-center  py-2 text-red-500 text-decoration-none hover:bg-gray-100"
                  >
                    <i className="fa-solid fa-arrow-right-from-bracket mr-2"></i>{" "}
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded border bg-gray-100"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="block w-6 h-0.5 bg-gray-600 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-600 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-600"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-md">
          <div className="flex flex-col p-4 gap-2">
            <button className="flex items-center p-2 bg-blue-100 border border-blue-100 rounded shadow-sm hover:bg-blue-200 transition">
              <i className="fa-regular fa-bell text-black-700"></i>
              <span className="ml-2">Notifications</span>
            </button>

            {/* User Mobile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center p-2 bg-blue-100 border border-blue-100 rounded shadow-sm hover:bg-blue-200 transition w-full justify-between"
              >
                <span>
                  <i className="fa-regular fa-user text-black-700 mr-2"></i>{" "}
                  Account
                </span>
                <i
                  className={`fa-solid fa-chevron-${
                    dropdownOpen ? "up" : "down"
                  }`}
                ></i>
              </button>
              {dropdownOpen && (
                <ul className="flex flex-col mt-2 w-full bg-white rounded shadow-lg border ">
                  <li>
                    <Link
                      to="/profile"
                      className="flex items-center px-4 py-2 hover:bg-gray-100 text-black text-decoration-none "
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <i className="fa-regular fa-user mr-2"></i> My Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="flex items-center px-4 py-2 hover:bg-gray-100 text-black text-decoration-none"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <i className="fa-solid fa-gear mr-2"></i> Settings
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left flex items-center px-4 py-2 text-red-500 hover:bg-gray-100"
                    >
                      <i className="fa-solid fa-arrow-right-from-bracket mr-2"></i>{" "}
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
