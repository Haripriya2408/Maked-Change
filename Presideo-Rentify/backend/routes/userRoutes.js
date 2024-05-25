const express = require('express');
const authController = require('../controllers/authController');
const bookingController = require('../controllers/bookingController');
const propertyController = require('../controllers/propertyController');
const router = express.Router();

// Routes for Property Management
router.route('/newAccommodation')
    .get(authController.protect, propertyController.createProperty);

router.route('/myAccommodation')
    .get(authController.isLoggedIn);

// Routes for User Authentication
router.route('/signup')
    .post(authController.signup);

router.route('/login')
    .post(authController.login);

router.route('/logout')
    .get(authController.logout);

router.route('/forgotPassword')
    .post(authController.forgotPassword);

router.route('/resetPassword/:token')
    .patch(authController.resetPassword);


// Routes for Booking Management


// router.route('/booking')
//     .post(authController.protect, bookingController.createBookings);

router.route('/booking/:bookingId')
    .get(authController.protect, bookingController.getBookingDetails);

// Export the router
module.exports = router;
