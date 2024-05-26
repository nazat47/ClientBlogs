import axios from "axios";
import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { routeUrl } from "../../../utils/config";
import { toast } from "react-toastify";

const DeleteBlog = ({ setDeleteOpen, deleteOpen, blogId }) => {
  const queryClient = useQueryClient();
  const { mutate, isPending, reset } = useMutation({
    mutationFn: async (id) => {
      try {
        await axios.delete(`${routeUrl}/blogs/${id}`, {
          withCredentials: true,
        });
      } catch (error) {
        reset();
        toast.error("Something went wrong");
      }
    },
    onSuccess: () => {
      reset();
      setDeleteOpen(false);
      queryClient.invalidateQueries({
        queryKey: ["blogs"],
      });
    },
  });
  const handleDelete = async (e) => {
    e.preventDefault();
    mutate(blogId);
  };
  return (
    <div
      className={`fixed inset-0  items-center justify-center bg-[#00000042] z-[5] transition-all duration-300 ${
        deleteOpen ? "flex" : "hidden"
      }`}
    >
      <div
        className={`relative bg-white rounded-lg min-h-[20vh] w-[500px] p-3 flex flex-col items-center justify-center gap-4 animate-scaleUp`}
      >
        <p>Are you sure you want to delete this blog?</p>
        <div className="flex gap-4 items-center justify-center w-full text-white font-bold">
          <button
            disabled={isPending}
            onClick={handleDelete}
            className={`p-2 bg-red-600 w-[30%] h-[40px] rounded ${
              isPending ? "cursor-not-allowed" : ""
            } `}
          >
            Confirm
          </button>
          <button
            onClick={() => setDeleteOpen(false)}
            className="p-2 bg-green-600 w-[30%] h-[40px] rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteBlog;
