import React from "react";

const ItemDetailsSkeleton = () => {
  return (
    <div className="h-full w-full bg-white flex flex-col items-start justify-center gap-8">
      <div className="h-[80px] bg-gray-200 animate-pulse rounded-lg w-[70%] mx-auto"></div>
      <div className="h-[50vh] bg-gray-200 animate-pulse rounded-lg w-full"></div>
      <div className="h-[50px] bg-gray-200 animate-pulse rounded-lg w-full"></div>
      <div className="h-[80px] bg-gray-200 animate-pulse rounded-lg w-[40%]"></div>
    </div>
  );
};

export default ItemDetailsSkeleton;
