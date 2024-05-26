import React from "react";

const AdminTablesSkeleton = () => {
  return (
    <div className="h-full w-full bg-white p-4 mt-4 flex flex-col gap-6">
      <div className="bg-gray-200 rounded-lg animate-pulse w-full h-[60px]"></div>
      <div className="bg-gray-200 rounded-lg animate-pulse w-full h-[60px]"></div>
      <div className="bg-gray-200 rounded-lg animate-pulse w-full h-[60px]"></div>
    </div>
  );
};

export default AdminTablesSkeleton;
