const CustomError = require("./customError");

class Unauthenticated extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = 403;
  }
}
module.exports = Unauthenticated;
