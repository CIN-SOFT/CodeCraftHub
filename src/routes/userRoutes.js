// src/routes/userRoutes.js
const express = require('express');
// Importing the controller functions for user registration and login
const { registerUser, loginUser } = require('../controllers/userController');

// Creating a router object to define user-related routes
const router = express.Router();

// Route for user registration
// This route handles POST requests to '/api/users/register'
// It calls the registerUser function from the userController
router.post('/register', registerUser);

// Route for user login
// This route handles POST requests to '/api/users/login'
// It calls the loginUser function from the userController
router.post('/login', loginUser);

// Exporting the router to be used in the main application
module.exports = router;
