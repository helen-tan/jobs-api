const express = require('express');
const dotenv = require('dotenv');

const app = express();

// Setting up config.env file variables
dotenv.config({path: './config/config.env'});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server start on port ${process.env.PORT}`);
});