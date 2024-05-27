import React from "react";
import { useQuery } from "@tanstack/react-query";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import axios from "axios";
import { baseUrl, routeUrl } from "../utils/config";

const CategorizedBlogs = ({ category }) => {
  const { data: allBlogs, isLoading } = useQuery({
    queryKey: ["categorizedBlogs", category],
    queryFn: async () => {
      try {
        const { data } = await axios.get(`${routeUrl}/blogs/get/${category}`);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="w-full min-h-screen bg-white mt-20">
      <div className="flex flex-col gap-14">
        {allBlogs?.map((blog, i) => (
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-3xl">{blog?.title}</h1>
            <img
              src={`${baseUrl}/${blog?.imageUrl}`}
              alt="blogImage"
              className="h-[400px] w-[70%]"
            />
            <ReactQuill
              value={blog?.text}
              theme="bubble"
              readOnly={true}
              className="w-full"
            />
            <div className="w-full border-b-[2px] border-dashed border-gray-300 h-[1px]"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorizedBlogs;
