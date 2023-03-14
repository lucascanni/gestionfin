const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
    res.send('Api running on port ${process.env.API_PORT}');
});

app.listen(process.env.API_PORT, () => {
    console.log(`Server started on port ${process.env.API_PORT} ...`);
});