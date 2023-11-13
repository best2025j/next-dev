const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');

const router = express.Router();

// Registers a user
router.post('/register', registerUser);

// Logs in a user
router.post('/login', loginUser);

module.exports = router;