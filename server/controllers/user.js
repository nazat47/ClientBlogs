const { BadRequest, NotFound } = require("../errors");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const { createTokenFields, attachCookies } = require("../utils");
const { createToken } = require("../utils/jwt");

const createUser = async (req, res) => {
  const { email, username, password } = req.body;
  if (!username || !password) {
    throw new BadRequest("Please insert your email, username and password");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);
  const user = await User.create({
    email: email ? email : "",
    username,
    password: hashedPass,
  });
  return res.status(201).json({ message: "User created", user });
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new BadRequest("Please insert your username and password");
  }
  const user = await User.findOne({ username });
  if (!user) {
    throw new NotFound("Invalid username");
  }
  const isMatched = await bcrypt.compare(password, user.password);
  if (!isMatched) {
    throw new BadRequest("Invalid password");
  }
  const tokenUser = createTokenFields(user);
  const token = createToken(tokenUser);
  attachCookies(res, tokenUser);
  const { password: pass, ...rest } = user._doc;
  return res.status(200).json({ user: rest, token });
};

module.exports = { createUser, loginUser };
