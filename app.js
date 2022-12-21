const path = require('path');
const express = require('express');
require("dotenv").config({ path: "./config.env" });
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');




// Connect to database
connectDB();

// Route files
const user = require('./routes/user');

const app = express();

// Body parser
app.use(express.json());


// Set static folder
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/v1/user', user);


app.use(errorHandler);

const PORT =5000;

const server = app.listen(
    PORT,
    console.log(
        `Server running  on port ${PORT}`
    )
);
