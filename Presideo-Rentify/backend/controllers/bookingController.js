


async function getUserBookings(req, res) {
    try {
        const Booking = require('../Models/bookingModel');
        const bookings = await Booking.find({ user: req.user._id });
        res.status(200).json({ status: 'success', data: { bookings: bookings } });
    } catch (error) {
        res.status(500).json({ status: 'fail', message: error.message });
    }
}

async function getBookingDetails(req, res) {
    try {
        const Booking = require('../Models/bookingModel');
        const bookings = await Booking.findById(req.params.bookingId);
        res.status(200).json({ status: 'success', data: { bookings: bookings } });
    } catch (error) {
        res.status(500).json({ status: 'fail', message: error.message });
    }
}

module.exports = {

    getUserBookings: getUserBookings,
    getBookingDetails: getBookingDetails
};
