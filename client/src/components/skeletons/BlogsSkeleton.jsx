import React from "react";

const BlogsSkeleton = () => {
  return (
    <div className="h-full w-full bg-white flex flex-col sm:flex-row items-start justify-center gap-8 mt-14">
      <div className="h-auto bg-white w-full sm:w-[70%] flex flex-col gap-4">
        <div className="h-[10vh] w-[80%] bg-gray-200 animate-pulse rounded-lg"></div>
        <div className="h-[35vh] bg-gray-200 animate-pulse rounded-lg w-full"></div>
        <div className="h-[7vh] bg-gray-200 animate-pulse rounded-lg w-[50%]"></div>
        <div className="h-[12vh] bg-gray-200 animate-pulse rounded-lg w-full"></div>
        <div className="h-[5vh] bg-gray-200 animate-pulse rounded-lg w-[40%]"></div>
      </div>
      <div className="h-auto bg-white w-full sm:w-[30%] flex sm:flex-col gap-4">
        <div className="size-[20vh] bg-gray-200 animate-pulse rounded-lg"></div>
        <div className="size-[20vh] bg-gray-200 animate-pulse rounded-lg"></div>
        <div className="size-[20vh] bg-gray-200 animate-pulse rounded-lg"></div>
      </div>
    </div>
  );
};

export default BlogsSkeleton;
