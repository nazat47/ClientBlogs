import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { baseUrl, routeUrl } from "../utils/config";
import { useNavigate } from "react-router-dom";
import BlogsSkeleton from "./skeletons/BlogsSkeleton";

const RelatedBlogs = ({ category }) => {
  const navigate = useNavigate();
  const { data: relatedBlogs, isLoading } = useQuery({
    queryKey: ["related-blogs", category],
    queryFn: async () => {
      try {
        const { data } = await axios.get(`${routeUrl}/blogs/get/${category}`);
        return data.slice(0, 3);
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <>
      {isLoading ? (
        <BlogsSkeleton />
      ) : (
        <div className="w-full">
          <h1 className="font-bold text-left mb-6 mt-12 text-2xl">
            You May Also Like
          </h1>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-4 xl:gap-6">
            {relatedBlogs?.map((blog, i) => (
              <div
                key={i}
                onClick={() => navigate(`/blog/${blog?._id}`)}
                className="cursor-pointer h-[300px] sm:h-[250px] lg:min-h-[350px] flex flex-col gap-1 lg:gap-2 xl:gap-4 items-center justify-start text-left shadow-custom bg-white border border-dashed border-stone-400 p-2"
              >
                <img
                  src={`${baseUrl}/${blog?.imageUrl}`}
                  alt="blog"
                  className="w-full h-[60%]"
                />
                <p className="w-full font-bold text-[13px] sm:text-[12px] md:text-[14px] lg:text-xl leading-4 sm:leading-[15px] md:leading-5 mt-1 md:mt-2 lg:mt-3 lg:leading-[120%]">
                  {blog?.title}
                </p>
                <p className="line-clamp-2 text-xs sm:text-[8px] md:text-xs leading-3">
                  {blog?.subTitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default RelatedBlogs;
