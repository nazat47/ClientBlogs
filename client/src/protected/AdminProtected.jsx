import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminProtected = ({ children }) => {
  const { isInGeneralAuthenticated } = useSelector((state) => state.user);
  return isInGeneralAuthenticated ? children : <Navigate to={"/login"} />;
};

export default AdminProtected;
