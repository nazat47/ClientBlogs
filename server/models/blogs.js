const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide blog title"],
    },
    subTitle: {
      type: String,
    },
    category: {
      type: String,
    },
    text: {
      type: String,
      required: [true, "Please provide blog text"],
    },
    tags: {
      type: [String],
      default: [],
    },
    imageUrl: {
      type: String,
      required: [true, "Please provide blog image"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blogs", blogSchema);
