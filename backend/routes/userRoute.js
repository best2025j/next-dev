const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const { getAUser, getAllUsers, deleteUser } = require('../controllers/userController');
const isAdmin = require('../middlewares/isAdmin');
const requireLogin = require('../middlewares/requireLogin')
const router = express.Router();

// Registers a user
router.post('/register', registerUser);

// Logs in a user
router.post('/login', loginUser);

// Gets all users
router.get('/', getAllUsers);

//Gets a user
router.get('/:id', getAUser);

// Deletes a user, ADMIN-ACCESS ONLY
router.delete('/:id', requireLogin, isAdmin, deleteUser);

module.exports = router;