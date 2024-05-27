import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import BlogStory from "../components/BlogStory";

import { routeUrl } from "../utils/config";
import BlogsSkeleton from "../components/skeletons/BlogsSkeleton";

const Home = () => {
  const { data: blogs, isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      try {
        const { data } = await axios.get(`${routeUrl}/blogs`, {
          withCredentials: true,
        });
        console.log(data)
        return data;
        
      } catch (error) {
        toast.error("Failed to load blogs, try again later");
      }
    },
    staleTime: 1000 * 60 * 10,
  });

  return (
    <>
      {isLoading ? (
        <BlogsSkeleton />
      ) : (
        <div className="w-full md:w-[80%] min-h-screen bg-white mx-auto mt-[50px]">
          <div className="w-full h-[200px] bg-gray-200 border border-gray-400 text-center text-xs p-4">
            Advertisement
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full min-h-screen mt-8">
            <div className="w-full sm:w-[75%]">
              <section className="space-y-3">
                <BlogStory
                  title={blogs[0]?.title}
                  description={blogs[0]?.text}
                  imageSrc={blogs[0]?.imageUrl}
                  id={blogs[0]?._id}
                />
                <div className="w-full space-y-3">
                  <p className="font-bold">In this article</p>
                  <ul className="bg-slate-200 px-6 py-3 text-xs space-y-2 list-disc underline text-blue-700">
                    <li>Lorem, ipsum dolor sit amet consectetur </li>
                    <li>Lorem, ipsum dolor sit amet consectetur </li>
                    <li>Lorem, ipsum dolor sit amet consectetur </li>
                    <li>Lorem, ipsum dolor sit amet consectetur </li>
                  </ul>
                </div>
                <div className="h-[100px] w-full py-2 flex gap-2 border-y border-gray-600">
                  <img src="/car.jpg" alt="car" className="size-[70px]" />
                  <div className="space-y-1">
                    <p className="text-gray-600 text-xs font-bold">Korean</p>
                    <p className="text-[8px] font-semibold text-gray-800 line-clamp-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsa
                    </p>
                  </div>
                </div>
                <div className="size-[170px] bg-gray-200 border border-gray-400 text-center text-xs p-4 mx-auto">
                  Advertisement
                </div>
              </section>
              <section className="mt-12">
                {blogs?.map((blog, i) => (
                  <div key={i} className="space-y-3 mt-8">
                    <h1 className="font-extrabold">{blog?.title}</h1>
                    <ReactQuill
                      value={blog?.text}
                      theme="bubble"
                      readOnly={true}
                      className="w-full"
                    />
                    {(i === 0 || i === 3) && (
                      <div className="size-[140px] bg-gray-200 border border-gray-400 text-center text-xs p-4 mx-auto">
                        Advertisement
                      </div>
                    )}
                  </div>
                ))}
                <p className="text-[11px] mt-8 font-bold">
                  ALSO READ:{" "}
                  <span className="text-blue-600 font-normal cursor-pointer">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </span>
                </p>
              </section>
              <div className="space-y-2 my-8 border-y border-black py-4">
                <p className="font-bold">ABOUT THE AUTHOR</p>
                <div className="flex gap-2">
                  <img
                    src="/user.jpg"
                    alt="author"
                    className="size-[50px] rounded-full"
                  />
                  <p className="font-bold text-sm">John Doe</p>
                </div>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore, voluptate!
                </p>
                <p className="font-bold text-[10px] text-blue-700 flex gap-1 items-center cursor-pointer">
                  READ MORE <FaCaretDown />
                </p>
              </div>
              <div className="size-[170px] bg-gray-200 border border-gray-400 text-center text-xs p-4 mx-auto">
                Advertisement
              </div>
              <section>
                <div className="border border-dashed border-gray-500 mt-8 shadow-yellow-custom">
                  <p className="font-bold m-2">You May Like This</p>
                  <div className="grid grid-cols-2">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="flex gap-1 h-[80px] border-b border-gray-600 p-2"
                      >
                        <img
                          src="/car.jpg"
                          alt="car"
                          className="w-[40%] h-full"
                        />
                        <div className="space-y-2">
                          <p className="text-[8px] font-semibold text-gray-800 line-clamp-3">
                            EXCLUSIVE: Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Ipsa neque ullam necessitatibus
                            porro. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Ipsa neque ullam necessitatibus
                            porro.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-10">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="gap-1 h-[120px] mb-3">
                      <img
                        src="/cricket.jpg"
                        alt="car"
                        className="w-full h-[80%]"
                      />
                      <p className="font-semibold text-[9px] line-clamp-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Delectus, architecto!
                      </p>
                    </div>
                  ))}
                </div>
              </section>
              <section className="w-full mt-12">
                {blogs?.map((blog, i) => (
                  <div key={i}>
                    <div className="flex h-[1px] items-center justify-center border border-dashed border-gray-700 relative my-3">
                      <p className="text-[8px] font-bold absolute top-[-7px] bg-white w-[70px] text-center">
                        NEXT STORY
                      </p>
                    </div>
                    <BlogStory
                      title={blog?.title}
                      description={blog?.text}
                      imageSrc={blog?.imageUrl}
                      id={blog?._id}
                    />
                  </div>
                ))}
              </section>
            </div>
            <div className="w-full sm:w-[25%] flex flex-col gap-3">
              <div className="w-full h-[150px] bg-gray-200 border border-gray-400 text-center text-xs p-4">
                Advertisement
              </div>
              <p className="font-bold">You May Like This</p>
              <div className="w-full grid grid-cols-3 sm:grid-cols-1 gap-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="flex gap-1 h-[100px] w-full border-b border-dashed border-gray-600"
                  >
                    <img src="/car.jpg" alt="car" className="w-[40%] h-[70%]" />
                    <div className="space-y-2">
                      <p className="text-gray-600 text-xs font-bold">Korean</p>
                      <p className="text-[8px] font-semibold text-gray-800 line-clamp-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsa neque ullam necessitatibus porro. Lorem ipsum dolor
                        sit amet consectetur adipisicing elit. Ipsa neque ullam
                        necessitatibus porro.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-20 grid grid-cols-3 sm:grid-cols-1 gap-3">
                <div className="w-full h-[150px] bg-gray-200 border border-gray-400 text-center text-xs p-4">
                  Advertisement
                </div>
                <div className="w-full h-[150px] bg-gray-200 border border-gray-400 text-center text-xs p-4">
                  Advertisement
                </div>
                <div className="w-full h-[150px] bg-gray-200 border border-gray-400 text-center text-xs p-4">
                  Advertisement
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
