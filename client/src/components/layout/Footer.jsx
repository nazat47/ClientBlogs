import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full h-auto flex items-center justify-center p-6 mt-[200px] bg-stone-200">
      <div className="w-full lg:w-[80%] flex flex-col md:flex-row p-2 sm:p-6 gap-20">
        <div className="w-full sm:w-[80%] md:w-[35%] mx-auto flex flex-col gap-3">
          <img
            src={"/inGeneralLogo.png"}
            alt="Logo"
            className="h-[60px] w-[220px]"
          />
          <p className="text-sm">SUBSCIBE TO OUR NEWSLETTER</p>
          <div className="flex w-full">
            <input
              type="email"
              name="email"
              placeholder="Enter your email address*"
              className="w-[80%] p-2 border border-gray-300 rounded-l placeholder:text-xs"
            />
            <button className="bg-black text-white w-[20%] rounded-r">
              <FaArrowRightLong className="mx-auto" />
            </button>
          </div>
          <p className="text-left text-[10px]">
            By providing this information, you agree that we may process your
            personal data in accordance with our
          </p>
          <p className="text-red-600 text-[12px]">Privacy Statement</p>
        </div>
        <div className="w-full md:w-[65%] grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-4 mb-12">
            <p className="font-bold text-sm">Company</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <p>About Us</p>
              <p>Image Usage Policy</p>
              <p>Privacy Policy</p>
              <p>Contact Us</p>
              <p>Editorial Guidlines</p>
              <p>Affiliate Disclosure</p>
              <p>Product Research</p>
              <p>Cookie Policy</p>
              <p>Press Room</p>
              <p>Awards/Badges</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 mb-12">
            <p className="font-bold text-sm">HOT TOPICS</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <p>Ananya Panday</p>
              <p>Image Usage Policy</p>
              <p>Lokesh Kanagaraj</p>
              <p>Sanjeeda Shaikh</p>
              <p>Dunki Movie</p>
              <p>Triptii Dimri</p>
              <p>Hottest Male Celebrities</p>
              <p>Popular Actresses</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 mb-12">
            <p className="font-bold text-sm">BOX OFFICE BUZZ</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <p>Animal</p>
              <p>Sam Bahadur</p>
              <p>Tiger 3</p>
              <p>Ganapath</p>
              <p>Editorial Guidlines</p>
              <p>Leo</p>
              <p>Mission Raniganj</p>
              <p>Jawan</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 mb-12">
            <p className="font-bold text-sm">POPULAR CATEGORIES</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <p>Web Stories</p>
              <p>Entertainment</p>
              <p>Lifestyle</p>
              <p>Select</p>
              <p>Horoscope</p>
              <p>Fashion</p>
              <p>Product Research</p>
              <p>Trending</p>
              <p>Television</p>
              <p>Korean</p>
              <p>Sports</p>
              <p>Videos</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 mb-12">
            <p className="font-bold text-sm">TRENDING ON THE WEB</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <p>Dunki Review</p>
              <p>Animal Review</p>
              <p>The Freelancer 2 Review</p>
              <p>Kadak Singh Review</p>
              <p>The Archies Review</p>
              <p>Sam Bahadur Review</p>
              <p>Tiger 3 Movie Review</p>
              <p>Ganapath Review</p>
              <p>Leo Review</p>
              <p>Mission Raniganj Review</p>
              <p>The Great Indian Family Review</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
