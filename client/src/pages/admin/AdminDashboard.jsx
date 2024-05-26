import React from "react";
import Sidebar from "../../components/admin/Sidebar";
import Dashboard from "../../components/admin/Dashboard";

const AdminDashboard = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-2 w-full">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default AdminDashboard;
