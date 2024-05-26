const CustomError = require("./customError");

class Unauthorized extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = 401;
  }
}
module.exports = Unauthorized;
