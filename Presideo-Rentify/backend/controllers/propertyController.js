// Importing required modules
const Property = require('../Models/propertyModel');
const APIFeatures = require('../utils/APIFeatures');

// Controller function to get a single property by ID
exports.getProperty = async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);
        res.status(200).json({ status: 'success', data: property });
    } catch (error) {
        res.status(404).json({ status: 'fail', message: error.message });
    }
};

// Controller function to create a new property
exports.createProperty = async (req, res) => {
    try {
        const propertyData = { ...req.body, userId: req.user.id };
        const newProperty = await Property.create(propertyData);
        res.status(200).json({ status: 'success', data: { property: newProperty } });
    } catch (error) {
        res.status(404).json({ status: 'fail', message: error.message });
    }
};

// Controller function to get all properties
exports.getProperties = async (req, res) => {
    try {
        const features = new APIFeatures(Property.find(), req.query)
            
            
        const allProperties = await Property.find();
        const properties = await features.query;
        res.status(200).json({
            status: 'success',
            no_of_responses: properties.length,
            all_Properties: allProperties.length,
            data: properties
        });
    } catch (error) {
        console.error('Error searching properties:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Controller function to get properties of a specific user
exports.getUsersProperties = async (req, res) => {
    try {
        const userId = req.params.id;
        const userProperties = await Property.find({ userId: userId });
        res.status(200).json({ status: 'success', data_length: userProperties.length, data: userProperties });
    } catch (error) {
        res.status(404).json({ status: 'fail', message: error.message });
    }
};
