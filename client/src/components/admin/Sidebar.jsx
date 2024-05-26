import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CgMenuLeft } from "react-icons/cg";

const Sidebar = ({ active }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);
  return (
    <>
      <div className="hidden sm:block min-h-screen w-[200px] shadow-2xl">
        <div className="p-3 flex flex-col gap-2 items-start justify-center">
          <Link
            to={"/dashboard/blogs"}
            className={`font-semibold ${
              active === 1 ? "text-purple-600" : "text-gray-900"
            } h-[50px] hover:bg-gray-100 rounded w-full flex items-center justify-center hover:text-lg transition-all`}
          >
            <p>Blogs</p>
          </Link>
        </div>
      </div>
      <div className="sm:hidden flex h-[50px] w-screen shadow-2xl bg-white items-start justify-start p-4">
        <CgMenuLeft
          size={25}
          onClick={(e) => setSidebarOpen(true) || e.stopPropagation()}
        />
      </div>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 bg-[#00000042] z-[5] transition-transform duration-300 transform  ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          ref={ref}
          className={`absolute top-0 left-0 h-full w-[60vw] bg-white z-[9] p-4 transition-transform duration-700 transform  ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-3 flex flex-col items-start justify-center">
            <Link
              to={"/dashboard"}
              className="font-semibold text-purple-600 h-[50px] hover:bg-gray-100 rounded w-full flex items-center justify-center hover:text-lg transition-all"
              onClick={() => setSidebarOpen(false)}
            >
              <p className="text-lg">Blogs</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
