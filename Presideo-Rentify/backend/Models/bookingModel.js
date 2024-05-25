const mongoose = require('mongoose');
const Property = require('./propertyModel');

const bookingSchema = new mongoose.Schema({
    property: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Property',
        required: [true, 'Booking must belong to a Property!']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Booking must belong to a User!']
    },
    price: {
        type: Number,
        required: [true, 'Price is required']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    paid: {
        type: Boolean,
        default: true
    },
    fromDate: {
        type: Date
    },
    toDate: {
        type: Date
    },
    guests: {
        type: Number
    },
    numberOfnights: {
        type: Number
    }
}, {
    timestamps: true
});

bookingSchema.pre(/^find/, function(next) {
    this.populate({
        path: 'property',
        select: 'propertyName'
    });
    next();
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
