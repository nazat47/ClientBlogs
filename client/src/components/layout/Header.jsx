import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";
import { navbarLinks } from "../../utils/config";
import { MdClose } from "react-icons/md";

const Header = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <>
      <div className="h-[50px] md:h-[70px] lg:h-[80px] w-[95%] mx-auto bg-white py-1 px-2 md:px-8 border border-gray-300 shadow-lg flex items-end">
        <div className="h-full md:h-[50%] w-full flex items-center justify-between gap-2">
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsGJx2G9wkzu-hqzwk0c4TLb20IWeakPNxFqZVB4RweA&s"
            }
            alt="Logo"
            className="h-full"
          />
          <div className="hidden sm:flex gap-4 lg:gap-6 items-center justify-center font-semibold text-[6px] md:text-[8px] lg:text-[10px] cursor-pointer">
            {navbarLinks?.map((link, i) => (
              <Link
                key={i}
                to={link.url}
                className={`text-black ${
                  pathname.toLowerCase() === link.url ? "underline" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <button className="hidden sm:flex items-end justify-center gap-1 font-semibold bg-white border border-gray-400 text-center rounded-2xl text-[6px] md:text-[7px] lg:text-[11px]  hover:bg-gray-200 p-1">
            <FaWhatsapp className="size-[10px] md:ize-[13px] lg:size-[15px] text-white bg-green-500 rounded-full" />
            <p>Join us</p>
          </button>
          <CgMenuRight
            size={20}
            onClick={(e) => setOpen(true) || e.stopPropagation()}
            className="cursor-pointer sm:hidden"
          />
        </div>
      </div>
      {/*--- Mobile nav ---*/}
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 bg-[#00000042] z-[5] transition-transform duration-300 transform  ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          ref={ref}
          className={`absolute top-0 right-0 h-full w-[60vw] bg-white z-[9] p-4 transition-transform duration-700 transform  ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="relative h-full w-full p-4">
            <MdClose
              size={25}
              className="absolute top-0 left-0 cursor-pointer"
              onClick={() => setOpen(false)}
            />
            <div className="flex flex-col gap-4 items-center justify-center font-semibold text-sm cursor-pointer mt-12">
              {navbarLinks?.map((link, i) => (
                <Link
                  onClick={() => setOpen(false)}
                  key={i}
                  to={link.url}
                  className={`text-black ${
                    pathname.toLowerCase() === link.url ? "underline" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
