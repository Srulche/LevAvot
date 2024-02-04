const User = require("../models/User");
const { createToken } = require("../utils");

async function signUp(user) {
  const existingUser = await User.findOne({ email: user.email });
  if (existingUser) {
    throw new Error("User alredy exists with this email");
  }
  const newUser = await User.create(user);
  return newUser;
}

async function signIn(user) {
  const existingUser = await User.findOne({ email: user.email });
  if (!existingUser) {
    throw new Error(`No such user with email ${user.email}`);
  }
  if (!existingUser.comparePassword(user.password)) {
    throw new Error("Passwords do not match");
  }

  const token = createToken({
    id: existingUser._id,
  });
  return token;
}
async function me(userPartial) {
  const user = await user.findById(userPartial.id).populate("levAvot");
  return user;
}

module.exports = {
  signUp,
  signIn,
  me,
};
