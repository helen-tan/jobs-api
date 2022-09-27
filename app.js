const express = require('express');
const dotenv = require('dotenv');
const mysql = require('mysql2');

// Create connection 
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '158848',
    database : 'jobs_api_db'
})

// Connect to MySQL
db.connect((error) => {
    if (error) {
        throw error;
    }
    console.log('MySql Connected!');
})

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

// Test GET route
app.get('/api/v1/jobstest', (req, res) => {
    let sql = 'SELECT * FROM jobs';
    let query = db.query(sql, (err, results, fields) => {
        console.log(results);
        res.send(results);
    })
})

// Importing all routes
const jobs = require('./routes/jobs');
app.use('/api/v1', jobs);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server start on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});