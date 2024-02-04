const mongoose = require("mongoose0");
const crypto = require("crypto");

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  fullName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  address: { type: String, required: true },
});

UserSchema.pre("save", async function (next) {
  var user = this;
  if (user.isModified("password")) {
    const hashed = crypto
      .createHash("sha1")
      .update(user.password)
      .digest("hex");
    user.password = hashed;
  }
  if (user.isModified("email")) {
    const existingUser = await User.findOne({ email: user.email });
    if (existingUser) {
      return next("Email address already exists");
    }
  }
  next();
});
UserSchema.methods.comparePassword = function (candidatePassword) {
  var user = this;
  const hashed = crypto
    .createHash("sha1")
    .update(candidatePassword)
    .digest("hex");
  if (user.password !== hashed) return false;
  return true;
};
const User = mongoose.model("users", UserSchema);

module.exports = User;
