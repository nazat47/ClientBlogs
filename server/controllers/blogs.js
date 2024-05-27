const { unlinkSync } = require("fs");
const { BadRequest, NotFound } = require("../errors");
const Blogs = require("../models/blogs");
const path = require("path");

const createBlog = async (req, res) => {
  const { title, text, subTitle, category, tags } = req.body;
  if (!title || !text || !subTitle || !category) {
    throw new BadRequest(
      "Plase insert blog title, sub title, description and category"
    );
  }
  if (!req.file) {
    throw new BadRequest("Please upload blog image");
  }
  try {
    const blog = await Blogs.create({
      title,
      text,
      subTitle,
      category,
      tags,
      imageUrl: req.file?.filename,
    });
    if (!blog) {
      throw new BadRequest("Unable to create blog, try again");
    }
    return res.status(201).json(blog);
  } catch (error) {
    console.log(error);
  }
};
const getBlog = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    throw new BadRequest("Id not provided");
  }
  const blog = await Blogs.findById(id);
  if (!blog) {
    throw new NotFound("No blog found");
  }
  return res.status(200).json(blog);
};
const getBlogByCategory = async (req, res) => {
  const { category } = req.params;
  if (!category) {
    throw new BadRequest("category not provided");
  }
  const blogs = await Blogs.find({ category });
  if (!blogs) {
    throw new NotFound("No blogs found");
  }
  return res.status(200).json(blogs);
};
const getAllBlogs = async (req, res) => {
  const blogs = await Blogs.find({}).sort({ createdAt: -1 });
  if (!blogs) {
    throw new NotFound("No blogs found");
  }
  return res.status(200).json(blogs);
};
const deleteBlog = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    throw new BadRequest("Id not provided");
  }
  const blog = await Blogs.findByIdAndDelete(id);
  if (!blog) {
    throw new NotFound("Unable to find blog");
  }
  if (blog?.imageUrl) {
    const oldImage = path.join(__dirname, "..", "uploads", blog.imageUrl);
    unlinkSync(oldImage, (err) => {
      if (err) console.log("unable to delete blog image");
    });
  }
  return res.status(200).json({ message: "Blog deleted" });
};

const updateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, text, subTitle, category, tags } = req.body;
  if (!title || !text || !subTitle || !category) {
    throw new BadRequest(
      "Plase insert blog title, sub title, description and category"
    );
  }
  try {
    const blog = await Blogs.findById(id);
    if (!blog) {
      throw new NotFound("No blog found");
    }
    if (req.file) {
      if (blog.imageUrl) {
        const oldImage = path.join(__dirname, "..", "uploads", blog.imageUrl);
        unlinkSync(oldImage, (err) => {
          if (err) console.log("oops");
        });
      }
      blog.imageUrl = req.file.filename;
    }
    blog.title = title;
    blog.text = text;
    blog.subTitle = subTitle;
    blog.category = category;
    blog.tags = tags;
    await blog.save();
    return res.status(201).json(blog);
  } catch (error) {
    console.log(error);
  }
};
const uploadImage = async (req, res) => {
  if (!req.file) {
    throw new BadRequest("Image not uploaded");
  }
  return res.status(200).json({ imageUrl: req.file?.filename });
};
module.exports = {
  createBlog,
  deleteBlog,
  updateBlog,
  getAllBlogs,
  getBlog,
  uploadImage,
  getBlogByCategory,
};
