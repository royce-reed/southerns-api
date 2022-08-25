import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import asyncHandler from 'express-async-handler';
import { User } from '../database/index.js';

// @desc Register new user
// @route POST /api/users/;
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Please enter all fields');
  }

  // Check for existing user
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400)
    throw new Error('User already exists');
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user)
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data');
  }

});

// @desc Authenticate user
// @route POST /api/users/login;
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

   // Check for user email
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      email: user.email,
      name: user.name,
      token: generateToken(user._id),
    });
  } else {
    if ( email !== user.email ) {
      res.status(400)
      throw new Error('Invalid email');
    } else {
      res.status(400)
      throw new Error('Invalid password');
    }
    // res.status(400);
    // throw new Error('Invalid credentials');
  }
});

// @desc Get user data
// @route GET /api/users/me;
// @access Private
const getMe = asyncHandler(async (req, res) => {
  // const { _id, name, email } = await User.findById(req.user.id);
  res.status(200).json(req.user);
});
// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

export { registerUser, loginUser, getMe };