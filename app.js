const express = require('express');
const dotenv = require('dotenv');

const app = express();

// Setting up config.env file variables
dotenv.config({path: './config/config.env'});

// Creating own middleware - middleware is a fn available everywhere in the project
const middleware = (req, res, next) => {
    console.log('Hello from middleware');

    // Setting up a variable globally
    req.requestMethod = req.method;
    next();
}

app.use(middleware);

// Importing all routes
const jobs = require('./routes/jobs');
app.use('/api/v1', jobs);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server start on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});