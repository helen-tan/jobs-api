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

module.exports = db;