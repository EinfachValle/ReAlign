import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/User.js";

const authUser = asyncHandler(async (req, res) => {
  const { email, password, userName } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      userName: user.userName,
      email: user.email,
    });
  } else {
    res.status(400).json({ message: "Invalid EMail or password" });
  }
});

const registerUser = asyncHandler(async (req, res) => {
  const { userName, firstName, lastName, email, password, birthday } = req.body;

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
    birthday,
  });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      userName: user.userName,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      birthday: user.birthday,
      role: user.role,
    });
  } else {
    res.status(400).json({ message: "Invalid user data" });
  }

  res.status(200).json({ message: "Register User" });
});

const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "User logged out" });
});

const getUserProfile = asyncHandler(async (req, res) => {
  const user = {
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
  };

  res.status(200).json(user);
});

const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
    });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

const deleteUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  try {
    await user.remove();
    res.status(204).json({ message: "User successfully deleted" });
  } catch (error) {
    console.error(`User deletion failed: ${error}`);
    res.status(500).json({ message: "User deletion failed" });
  }
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
};
