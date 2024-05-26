const errorHandler = async (err, req, res, next) => {
  let customError = {
    msg: err.message || "Something went wrong",
    statusCode: err.statusCode || 503,
  };
  if (err.code === 11000) {
    customError.msg = `Duplicate key ${Object.keys(err.keyValue)} entered`;
    customError.statusCode = StatusCodes.BAD_REQUEST;
  }
  if (err.name === "ValidationError") {
    customError.msg = err.message;
    customError.statusCode = StatusCodes.BAD_REQUEST;
  }
  if (err.name === "CastError") {
    customError.msg = "Nothing found with this id";
    customError.statusCode = StatusCodes.BAD_REQUEST;
  }
  return res.status(customError.statusCode).json({ msg: customError.msg });
};

module.exports = errorHandler;
