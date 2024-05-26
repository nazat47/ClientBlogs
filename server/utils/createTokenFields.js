const createTokenFields = (user) => {
  return { userId: user._id, username: user.username };
};
module.exports = createTokenFields;
