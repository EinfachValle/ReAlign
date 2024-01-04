import asyncHandler from "express-async-handler";

import User from "../models/User.js";

// @desc AUTH user/set token
// route POST /api/users/auth
// @access Public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth User" });
});

const registerUser = asyncHandler(async (req, res) => {
  const { userName, firstName, lastName, email, password } = req.body;

  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400).json({ message: "User already exist" });
  }

  const user = await User.create({
    userName,
    firstName,
    lastName,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      userName: user.userName,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
    });
  } else {
    res.status(400).json({ message: "Invalid user data" });
  }

  res.status(200).json({ message: "Register User" });
});

const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Logout User" });
});

const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get User profile" });
});

const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update User Profile" });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
