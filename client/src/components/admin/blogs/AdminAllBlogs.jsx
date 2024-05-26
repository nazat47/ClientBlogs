import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { DataGrid } from "@material-ui/data-grid";
import AddBlog from "./AddBlog";
import DeleteBlog from "./DeleteBlog";
import { routeUrl } from "../../../utils/config";
import EditBlog from "./EditBlog";
import { toast } from "react-toastify";
import AdminTablesSkeleton from "../../skeletons/AdminTablesSkeleton";

const AdminAllBlogs = () => {
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [blogData, setBlogdata] = useState({});
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      try {
        const { data } = await axios.get(`${routeUrl}/blogs`, {
          withCredentials: true,
        });
        return data;
      } catch (error) {
        toast.error("Failed to load blogs, try again later");
      }
    },
    staleTime: 1000 * 60 * 10,
  });
  const columns = [
    {
      field: "id",
      headerName: "Blog Id",
      minWidth: 200,
      flex: 1,
      renderCell: (params) => {
        return (
          <p className="text-sm md:text-md lg:text-lg text-gray-800 cursor-pointer">
            {params.row.id}
          </p>
        );
      },
    },
    {
      field: "title",
      headerName: "Blog title",
      minWidth: 250,
      flex: 1,
      renderCell: (params) => {
        return (
          <div
            onClick={() => navigate(`/blog/${params.id}`)}
            className="w-full h-full cursor-pointer flex items-center justify-start"
          >
            <p className="text-sm md:text-md lg:text-lg text-gray-600 cursor-pointer font-semibold">
              {params.row.title}
            </p>
          </div>
        );
      },
    },
    {
      field: "Edit",
      flex: 0.3,
      minWidth: 100,
      sortable: false,
      renderCell: (params) => {
        return (
          <button
            onClick={() => setEditOpen(true) || setBlogdata(params?.row)}
            className="p-2 rounded hover:underline text-blue-600 font-semibold text-sm lg:text-lg"
          >
            Edit
          </button>
        );
      },
    },
    {
      field: "Delete",
      flex: 0.3,
      minWidth: 100,
      sortable: false,
      renderCell: (params) => {
        return (
          <button
            onClick={() => setDeleteOpen(true) || setBlogdata(params?.row)}
            className="p-2 rounded hover:underline text-red-600 font-semibold text-sm lg:text-lg"
          >
            Delete
          </button>
        );
      },
    },
  ];
  const row = [];
  data?.forEach((blog) => {
    row.push({
      id: blog?._id,
      title: blog?.title,
      subTitle: blog?.subTitle,
      text: blog?.text,
      imageUrl: blog?.imageUrl,
    });
  });

  return (
    <>
      <div className="w-full min-h-screen bg-white p-4">
        <div className="flex items-center justify-between border-b border-gray-400 min-h-[70px] px-4">
          <h1 className="font-bold text-2xl">Blogs</h1>
          <button
            onClick={() => setAddOpen(true)}
            className="flex gap-1 items-center justify-between p-2 px-6 text-white font-bold bg-black rounded hover:bg-purple-800"
          >
            <MdAdd size={30} />
            <p>Add</p>
          </button>
        </div>
        {isLoading ? (
          <AdminTablesSkeleton />
        ) : (
          <div className="w-[100%] h-[75vh] sm:h-[80vh] pt-1 mt-2 bg-white">
                 <DataGrid
              columns={columns}
              rows={row}
              pageSize={10}
              rowHeight={70}
              disableSelectionOnClick
            />
          </div>
        )}
      </div>
      <AddBlog addOpen={addOpen} setAddOpen={setAddOpen} />
      <DeleteBlog
        deleteOpen={deleteOpen}
        setDeleteOpen={setDeleteOpen}
        blogId={blogData?.id}
      />
      <EditBlog editOpen={editOpen} setEditOpen={setEditOpen} blog={blogData} />
    </>
  );
};

export default AdminAllBlogs;
