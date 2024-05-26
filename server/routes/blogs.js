const express = require("express");
const {
  createBlog,
  getAllBlogs,
  updateBlog,
  getBlog,
  deleteBlog,
  uploadImage,
} = require("../controllers/blogs");

const uploadOptions = require("../utils/multerConfig");
const authenticateUser = require("../middlewares/authenticate");
const router = express.Router();

router
  .route("/")
  .post(uploadOptions.single("image"), authenticateUser, createBlog)
  .get(getAllBlogs);
router
  .route("/:id")
  .put(uploadOptions.single("image"), authenticateUser, updateBlog)
  .get(getBlog)
  .delete(authenticateUser, deleteBlog);
router.post("/upload", uploadOptions.single("image"), uploadImage);

module.exports = router;
