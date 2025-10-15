import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const location = useLocation();
  let user = null;

  try {
    user = JSON.parse(localStorage.getItem("user"));
  } catch (error) {
    console.error("Failed to parse user from localStorage", error);
  }

  const token = localStorage.getItem("token");

  if (!token || !user) {
    return <Navigate to="/" replace />;
  }

  const role = user?.role?.roleName;

  const adminRoutes = [
    "/adminmenu",
    "/admintable",
    "/createform",
    "/reportlist",
  ];
  const volunteerRoutes = [
    "/home",
    "/collect-info",
    "/door-search",
    "/existinghhs",
    "/final",
    "/personal",
    "/profile",
    "/survey",
    "/surveyqa",
    "/survey-start",
  ];

  if (role === "Volunteer" && adminRoutes.includes(location.pathname)) {
    return <Navigate to="/home" replace />;
  }

  if (
    (role === "Admin" || role === "SuperAdmin") &&
    volunteerRoutes.includes(location.pathname)
  ) {
    return <Navigate to="/adminmenu" replace />;
  }

  return children;
};

export default ProtectedRoutes;
