// Jobs Controller contains all the methods for the Jobs Router
const db = require('../config/database');

// Test GET route (MOVED INTO getJobs Method)
//app.get('/api/v1/jobstest', (req, res) => {
//   let sql = 'SELECT * FROM jobs';
//    let query = db.query(sql, (err, results, fields) => {
//       console.log(results);
//        res.send(results);
//    })
//})


// Get all jobs 
// GET /api/v1/jobs
exports.getJobs = (req, res, next) => {    
    let sql = 'SELECT * FROM jobs';

    db.query(sql, (err, results) => {
        if (err) {
            res.send('Could not get results')
        } else {
            console.log(results);
            res.status(200).send({
                success: true,
                results: results.length,
                requestMethod: req.requestMethod,
                data: results
            });
        }
    })

    //res.status(200).json({
    //    success: true,
    //    requestMethod: req.requestMethod,
    //    message: 'This route will display all jobs in future.'
    //})
}