const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserModel = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, index: true },
  password: String,
});

UserModel.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  try {
    this.password = await bcrypt.hash(this.password, 6);
  } catch (err) {
    console.error("Error to save the password", err.message);
  }
});

module.exports = mongoose.model("User", UserModel);
