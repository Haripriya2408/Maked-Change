const express = require('express');
const propertyController = require('../controllers/propertyController');
const authController = require('../controllers/authController');
const router = express.Router();

// Route to get all properties
router.route('/')
    .get(propertyController.getProperties);

// Route to get a specific property by ID
router.route('/:id')
    .get(propertyController.getProperty);

module.exports = router;
