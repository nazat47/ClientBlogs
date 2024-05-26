const jwt = require("jsonwebtoken");

const createToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET);
};
const validateToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

const attachCookies = (res, user) => {
  const token = createToken(user);
  res.cookie("inGeneralToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
  });
};
module.exports = { createToken, validateToken, attachCookies };
