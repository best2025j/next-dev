const User = require('../models/userModel');
const validator = require('validator');
const bcrypt = require('bcrypt');
const generateToken = require('../utils/generatetoken');

// Registers a User
const registerUser = async (req, res) => {
  const { firstname, lastname, email, password, role } = req.body;

  // Validates all inputs are correct
  if (!firstname || !lastname || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  if (!validator.isEmail(email)) return res.status(400).json({ error: 'invalid mail' });
  if (!validator.isStrongPassword(email)) return res.status(400).json({ error: 'Password not strong enough' });

  // Checks if email already exists
  const exists = await User.findOne({ email });
  if (exists) return res.status(400).json({ error: 'Email already exists' });

  // Hashes password
  const hashedpw = await bcrypt.hash(password, 10);

  // Adds user to database
  try {
    const user = await User.create(
      { firstname, lastname, email, password: hashedpw, role }
    );
    const token = generateToken(user);

    if (!token) return res.status(500).json({ error: 'Token generation' });
    res.status(200).json({ user, token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Database error' });
  }
};

// Logs in a User
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status(400).json({ error: 'email and password is required' });

  try {
    // Validates user's mail
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'User not found' });

    // Checks if password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Credentials do not match' });
    const token = generateToken(user);

    res.status(200).json({ user, token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Database Error' });
  }
};

module.exports = { registerUser, loginUser };
