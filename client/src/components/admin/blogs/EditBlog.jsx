import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { RiImageAddFill } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl, routeUrl } from "../../../utils/config";
import { toast } from "react-toastify";
import TextEditor from "../../TextEditor";

const EditBlog = ({ editOpen, setEditOpen, blog }) => {
  console.log(blog)
  console.log(`${baseUrl}/${blog?.imageUrl}`)
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset: formReset,
  } = useForm();
  const [description, setDescription] = useState("");
  const [descErrorMsg, setDescErrorMsg] = useState(null);
  const [file, setFile] = useState(null);
  const queryClient = useQueryClient();

  const handleImage = (e) => {
    setFile(e.target.files[0]);
  };

  const { mutate, isPending, reset } = useMutation({
    mutationFn: async (forms) => {
      try {
        await axios.put(`${routeUrl}/blogs/${blog?.id}`, forms, {
          withCredentials: true,
        });
      } catch (error) {
        toast.error(error?.response?.data?.msg || "Something went wrong");
      }
    },
    onSuccess: () => {
      reset();
      setEditOpen(false);
      queryClient.invalidateQueries({
        queryKey: ["blogs"],
      });
    },
  });

  const onSubmit = (data) => {
    if (description.length === 0) {
      setDescErrorMsg("Description is required");
    } else {
      const forms = new FormData();
      forms.append("title", data?.title);
      forms.append("text", description);
      forms.append("subTitle", data?.subTitle);
      if (file) forms.append("image", file);
      mutate(forms);
      setFile(null);
      formReset();
      setDescription("");
    }
  };
  const handleClose = () => {
    setEditOpen(false);
    setFile(null);
    formReset();
  };

  useEffect(() => {
    setValue("title", blog?.title);
    setValue("subTitle", blog?.subTitle);
    setDescription(blog?.text);
    // eslint-disable-next-line
  }, [blog]);

  return (
    <div
      className={`fixed inset-0  items-center justify-center bg-[#00000042] z-[5] transition-all duration-300 ${
        editOpen ? "flex" : "hidden"
      }`}
    >
      <div
        className={`relative bg-white rounded-lg max-h-[90vh] w-[95vw] sm:w-[85vw] lg:w-[70vw] p-3 animate-scaleUp overflow-hidden`}
      >
        <MdClose
          className="absolute top-2 right-2 cursor-pointer size-[25px] md:size-[35px]"
          onClick={() => handleClose()}
          size={30}
        />
        <div className="overflow-y-auto max-h-[80vh] mt-12">
          <h1 className="font-bold text-lg md:text-2xl text-center">
            Edit Blog
          </h1>
          <div className="my-6 flex flex-col items-start justify-center gap-4 min-h-[80vh] px-2 md:px-6">
            {(file || blog?.imageUrl) && (
              <div className="relative group w-full h-auto">
                <img
                  src={
                    file
                      ? URL.createObjectURL(file)
                      : `${baseUrl}/${blog?.imageUrl}`
                  }
                  alt="blog"
                  className="w-[100%] md:w-[80%] h-[200px] rounded group-hover:brightness-50 mx-auto shadow-lg border border-gray-200"
                />
                <MdClose
                  onClick={() => setFile(null)}
                  className="cursor-pointer absolute top-2 right-[5%] md:right-[11%] text-white z-[2] hidden group-hover:block"
                  size={30}
                />
              </div>
            )}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4 w-full h-auto"
            >
              {errors?.title && (
                <p className="text-red-600">* {errors?.title?.message}</p>
              )}
              <input
                {...register("title", {
                  required: "Blog title is required",
                })}
                type="text"
                name="title"
                placeholder="Title"
                className="p-3 w-full rounded border border-gray-200 outline-purple-200"
              />
              {errors?.subTitle && (
                <p className="text-red-600">* {errors?.subTitle?.message}</p>
              )}
              <input
                {...register("subTitle", {
                  required: "Short description is required",
                })}
                type="text"
                name="subTitle"
                placeholder="Short Description"
                className="p-3 w-full rounded border border-gray-200 outline-purple-200"
              />
              {descErrorMsg && <p className="text-red-600">{descErrorMsg}</p>}
              <TextEditor
                description={description}
                setDescription={setDescription}
              />
              <label
                htmlFor="edit"
                className="w-full h-[50px] bg-gray-200 rounded-lg p-3 cursor-pointer flex justify-between items-center"
              >
                <p className="font-semibold text-gray-600 text-lg">Add Image</p>
                <RiImageAddFill size={35} className="text-gray-700" />
              </label>
              <input
                onChange={handleImage}
                hidden
                id="edit"
                type="file"
                accept="images/*"
                name="image"
              />
              <button
                disabled={isPending || isSubmitting}
                type="submit"
                className={`p-2 w-[100px] mx-auto rounded border border-gray-200 outline-purple-200 bg-slate-600 text-white font-bold text-lg hover:bg-slate-700 ${
                  isPending || isSubmitting ? "cursor-not-allowed" : ""
                }`}
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBlog;
