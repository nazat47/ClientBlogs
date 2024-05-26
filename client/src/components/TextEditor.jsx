import React, { useMemo, useRef } from "react";
import { toast } from "react-toastify";
import { baseUrl, routeUrl } from "../utils/config";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TextEditor = ({ description, setDescription }) => {
  const quillRef = useRef();
  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      const formData = new FormData();
      formData.append("image", file);
      try {
        const { data } = await axios.post(
          `${routeUrl}/blogs/upload`,
          formData,
          {
            withCredentials: true,
          }
        );
        const imageUrl = data?.imageUrl;
        const quill = quillRef.current.getEditor();
        const range = quill.getSelection();
        quill.insertEmbed(range.index, "image", `${baseUrl}/${imageUrl}`);
      } catch (error) {
        toast.error(error?.response?.data?.msg || "Image upload failed");
      }
    };
  };
  // react quill modules
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: "1" }, { header: "2" }, { font: [] }],
          [{ size: ["small", false, "large", "huge"] }],
          [{ list: "ordered" }, { list: "bullet" }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ script: "sub" }, { script: "super" }],
          [{ color: [] }, { background: [] }],
          [{ align: [] }],
          ["link", "image"],
          ["clean"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    []
  );
  // react quill formats
  const formats = [
    "header",
    "size",
    "font",
    "list",
    "bullet",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "script",
    "sub",
    "super",
    "color",
    "background",
    "align",
    "link",
    "image",
  ];
  return (
    <ReactQuill
      ref={quillRef}
      value={description}
      onChange={(value) => setDescription(value)}
      modules={modules}
      formats={formats}
      theme="snow"
      placeholder="Description"
      className="h-[400px] lg:h-[300px] mb-[120px] md:mb-[70px] xl:mb-12"
    />
  );
};

export default TextEditor;
