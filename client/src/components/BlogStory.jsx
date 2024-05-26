import React from "react";
import { IoShareSocialSharp } from "react-icons/io5";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { baseUrl } from "../utils/config";

const BlogStory = ({ title, description, imageSrc }) => {
  return (
    <div className="space-y-4">
      <p className="font-bold text-lg lg:text-2xl">{title}</p>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2 text-xs text-gray-600">
          <p>
            By <span>John Doe</span>
          </p>
          <p>
            Updated on <span>10 Jan, 2024</span>
          </p>
        </div>
        <img src="/googleNews.png" alt="google" className="size-[25px]" />
        <IoShareSocialSharp size={25} />
      </div>
      <img src={`${baseUrl}/${imageSrc}`} alt="" className="w-full" />
      <ReactQuill
        value={description}
        theme="bubble"
        readOnly={true}
        className="w-full"
      />
      <p className="text-[11px] mt-8 font-bold">
        ALSO READ:{" "}
        <span className="text-blue-600 font-normal cursor-pointer">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </span>
      </p>
    </div>
  );
};

export default BlogStory;
