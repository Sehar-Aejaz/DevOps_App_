const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Sample GET endpoint
router.get('/users', userController.getUsers);

module.exports = router;
