import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
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

  return children;
};

export default ProtectedRoutes;
