import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl, routeUrl } from "../utils/config";
import BlogsSkeleton from "../components/skeletons/BlogsSkeleton";
import RelatedBlogs from "../components/RelatedBlogs";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isLoading } = useQuery({
    queryKey: ["blog-details", id],
    queryFn: async () => {
      try {
        const { data } = await axios.get(`${routeUrl}/blogs/${id}`);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  return (
    <>
      {isLoading ? (
        <BlogsSkeleton />
      ) : (
        <div className="w-full min-h-screen bg-white mt-20">
          <div className="flex flex-col gap-14">
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
            </div>
          </div>
          <RelatedBlogs category={blog?.category} />
        </div>
      )}
    </>
  );
};

export default BlogDetails;
