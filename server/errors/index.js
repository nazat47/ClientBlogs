const BadRequest = require("./badRequest");
const CustomError = require("./customError");
const NotFound = require("./notFound");
const Unauthenticated = require("./unauthenticated");
const Unauthorized = require("./unauthorized");

module.exports = {
  BadRequest,
  NotFound,
  Unauthenticated,
  Unauthorized,
  CustomError,
};
