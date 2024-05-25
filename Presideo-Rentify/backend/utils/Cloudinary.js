// Function to generate a unique identifier
function generateUniqueId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 10; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// Initialize Cloudinary
const cloudinary = require('cloudinary').v2;
const path = require('path');
const dotenv = require('dotenv').config({ 'path': path.join(__dirname, '../config.env') });

// Configure Cloudinary with API credentials
cloudinary.config({
    'cloud_name': process.env.CLOUD_NAME,
    'api_key': process.env.CLOUD_KEY,
    'api_secret': process.env.CLOUD_KEY_SECRET
});

// Export the configured Cloudinary module
module.exports = cloudinary;
