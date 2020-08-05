// declare animals.json, express server,
const fs = require('fs');
const path = require('path');
const { animals } = require('./data/animals.json');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// add middleware to server to serve CSS and JS files in public folder
app.use(express.static('public'));
// route to aniamls api


// listener for server on port 3001
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});