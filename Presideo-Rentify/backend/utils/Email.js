// Function to generate a unique identifier
function generateUniqueId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 10; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// Import nodemailer module
const nodemailer = require('nodemailer');

// Configure nodemailer with email credentials from environment variables
const sendEmail = async (emailData) => {
    // Create a transporter object with SMTP configuration
    const transporter = nodemailer.createTransport({
        'host': process.env.EMAIL_HOST,
        'port': process.env.EMAIL_PORT,
        'auth': {
            'user': process.env.EMAIL_USERNAME,
            'pass': process.env.EMAIL_PASSWORD
        }
    });

    // Define email message options
    const mailOptions = {
        'from': process.env.EMAIL_FROM,
        'to': emailData['email'],
        'subject': emailData['subject'],
        'html': emailData['message']
    };

    // Send the email
    await transporter.sendMail(mailOptions);
};

// Export the sendEmail function
module.exports = sendEmail;
