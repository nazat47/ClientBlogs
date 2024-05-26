import React from "react";
import Sidebar from "../../components/admin/Sidebar";
import AdminAllBlogs from "../../components/admin/blogs/AdminAllBlogs";

const AdminBlogs = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-2 w-full">
      <Sidebar active={1}/>
      <AdminAllBlogs />
    </div>
  );
};

export default AdminBlogs;
