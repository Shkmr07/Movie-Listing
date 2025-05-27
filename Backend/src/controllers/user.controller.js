const User = require("../models/User");
const customStatus = require("../utils/customStatus");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function signup(req, res) {
  const payload = req.body;

  try {
    await User.create(payload);
    customStatus(res, 201, "Signup Successful");
  } catch (err) {
    customStatus(res, 500, err.message);
  }
}

async function login(req,res) {
  const { email, password } = req.body;

  try {
    const isEmail = await User.findOne({ email });

    if (!isEmail) {
      return customStatus(res, 404, "email not exits");
    }

    const isPassword = await bcrypt.compare(password, isEmail.password);

    if (!isPassword) {
      return customStatus(res, 400, "Password not matched");
    }

    const token = jwt.sign({ userId: isEmail._id }, process.env.SECRET_KEY, {
      expiresIn: process.env.EXPIRY,
    });

    customStatus(res, 200, "Login Successful", {token});
  } catch (err) {
    customStatus(res, 500, err.message);
  }
}


module.exports = {login,signup}