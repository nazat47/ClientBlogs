const { Unauthorized } = require("../errors");
const { validateToken } = require("../utils");

const authenticateUser = async (req, res, next) => {
  const token = req.cookies?.inGeneralToken;
  if (!token) {
    throw new Unauthorized("User not authenticated");
  }
  try {
    const { userId, username } = validateToken(token);
    req.user = {
      userId,
      username,
    };
    next();
  } catch (error) {
    throw new Unauthorized("Authentication failed");
  }
};
module.exports = authenticateUser;
