import React from "react";

const CardSkeleton = () => {
  return (
    <div className="h-full w-full grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
      <div className="h-[400px] bg-gray-200 rounded-lg animate-pulse"></div>
      <div className="hidden sm:block h-[400px] bg-gray-200 rounded-lg animate-pulse"></div>
      <div className="hidden sm:block h-[400px] bg-gray-200 rounded-lg animate-pulse"></div>
    </div>
  );
};

export default CardSkeleton;
