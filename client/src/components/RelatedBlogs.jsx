import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { routeUrl } from "../utils/config";
import CardSkeleton from "./skeletons/CardSkeleton";
import BlogCards from "./BlogCards";

const RelatedBlogs = () => {
  const { pathname } = useLocation();
  const urlParts = pathname.split("/");
  const id = urlParts[urlParts.length - 1];

  const { data: allBlogs, isLoading } = useQuery({
    queryKey: ["relatedBlogs", id],
    queryFn: async () => {
      try {
        const { data } = await axios.get(`${routeUrl}/blogs`);
        return data?.filter((blog) => blog._id !== id).slice(0, 3);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>{isLoading ? <CardSkeleton /> : <BlogCards allBlogs={allBlogs} />}</>
  );
};

export default RelatedBlogs;
