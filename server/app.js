require("dotenv").config();
require("express-async-errors");
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./db/connect");
const routeNotFound = require("./middlewares/routeNotFound");
const errorHandler = require("./middlewares/errorHandler");
const userRoute = require("./routes/user");
const blogsRoute = require("./routes/blogs");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const cookieParser = require("cookie-parser");
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000", "https://ingeneral-blogs.vercel.app"],
    credentials: true,
  })
);

app.use(mongoSanitize());
app.use(xss());
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);
app.set("trust proxy", 1);
// app.use(
//   rateLimit({
//     windowMs: 1000 * 60 * 15,
//     max: 15,
//   })
// );

app.use(express.static(path.join(__dirname, "uploads")));
app.get("/", (req, res) => {
  res.send("In General Backend");
});

app.use("/api/v1/user", userRoute);
app.use("/api/v1/blogs", blogsRoute);

app.use(routeNotFound);
app.use(errorHandler);

const port = process.env.PORT || 3001;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server running in port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
