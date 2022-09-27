const express = require('express');
const dotenv = require('dotenv');
const mysql = require('mysql');

// Create connection 
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '158848',
    database : 'jobs_api_db'
})

// Connect to MySQL
db.connect((err) => {
    console.log('MySql Connected!');
})

const app = express();

// Setting up config.env file variables
dotenv.config({path: './config/config.env'});

// Importing all routes
const jobs = require('./routes/jobs');
app.use('/api/v1', jobs);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server start on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});