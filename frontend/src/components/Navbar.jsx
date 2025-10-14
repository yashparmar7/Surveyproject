import { Link } from "react-router-dom";

const Navbar = () => {
  const role = JSON.parse(localStorage.getItem("user")).role;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary shadow-sm">
      <div className="container-fluid">
        {role.roleName === "Admin" || role.roleName === "SuperAdmin" ? (
          <Link className="navbar-brand fw-bold" to="/adminmenu">
            <img
              src="/logo.png"
              alt="D2DSurvey Logo"
              style={{ width: "40px" }}
              className="d-inline-block align-text-center me-2"
            />
            Admin Dashboard
          </Link>
        ) : (
          <Link className="navbar-brand fw-bold" to="/home">
            <img
              src="/logo.png"
              alt="D2DSurvey Logo"
              style={{ width: "40px" }}
              className="d-inline-block align-text-center me-2"
            />
            D2D Survey
          </Link>
        )}

        {/* Toggler for small screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarIcons"
          aria-controls="navbarIcons"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navbar Items */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarIcons"
        >
          <ul className="navbar-nav align-items-center gap-2 gap-lg-3 flex-wrap">
            {/* Notification */}
            <li className="nav-item">
              <Link
                to="#"
                className="nav-link d-flex justify-content-center align-items-center p-2 bg-primary-subtle border border-primary-subtle rounded-2 shadow-sm"
                title="Notifications"
                aria-label="Notifications"
              >
                <i class="fa-regular fa-bell"></i>
              </Link>
            </li>
            {/* User Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link d-flex justify-content-center align-items-center p-2 bg-primary-subtle border border-primary-subtle rounded-2 shadow-sm"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <i class="fa-regular fa-user"></i>
              </a>
              <ul className="dropdown-menu dropdown-menu-end shadow">
                <li>
                  <Link
                    className="dropdown-item d-flex align-items-center"
                    to="/profile"
                  >
                    <i className="fa-regular fa-user me-2"></i> My Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item d-flex align-items-center"
                    to="#"
                  >
                    <i className="fa-solid fa-gear me-2"></i> Settings
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-danger d-flex align-items-center"
                    to="/"
                  >
                    <i className="fa-solid fa-arrow-right-from-bracket me-2"></i>{" "}
                    Logout
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
