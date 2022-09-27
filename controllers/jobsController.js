// Jobs Controller contains all the methods for the Jobs Router

// Get all jobs 
// GET /api/v1/jobs
exports.getJobs = (req, res, next) => {
    res.status(200).json({
        success: true,
        requestMethod: req.requestMethod,
        message: 'This route will display all jobs in future.'
    })
}