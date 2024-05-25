const mongoose = require('mongoose');
const app = require('./app');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

let DB = process.env.DATABASE_LOCAL;
console.log(DB);

mongoose.connect(DB)
    .then(() => {
        console.log('DB connection successful');
    })
    .catch(err => {
        console.error('DB connection error:', err);
    });

const port = 8000;
app.listen(port, () => {
    console.log(`App running on port: ${port}`);
});
