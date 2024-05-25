// Importing required modules
const express = require('express');
const propertyRoutes = require('./routes/propertyRoutes');
const userRoutes=require('./routes/userRoutes')
const cookieParser = require('cookie-parser');

// Creating an Express application
const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cookieParser()); // Parse cookies

// Routes
app.use('/api/v1/rent/listing', propertyRoutes); // Property routes
app.use('/api/v1/rent/user', userRoutes); // User routes

// Exporting the Express application
module.exports = app;
