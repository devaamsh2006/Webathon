// Creating an express application
const exp = require('express');
const app = exp();
require('dotenv').config();
const mongoose = require('mongoose');
const path = require('path');
const EventApp = require('./API/EventApi');
const UserApp = require('./apis/userapi');

// Selecting port
const port = process.env.PORT || 5000;
// Serving static files from the client
app.use(exp.static(path.join(__dirname, '../client/dist')));

// Selecting API routes (uncomment if needed)
app.use('/events',EventApp);
app.use('/users',UserApp);

// Connecting to the database
mongoose.connect(process.env.DBURL)
.then(() => {
    // Successful connection
    console.log('DB connection success');

    // Start listening on the port
    app.listen(port, () => {
        console.log(`Listening on PORT ${port}`);
    });
})
.catch(err => {
    console.log('DB connection error:', err);
});

// Fallback route for SPA (serves index.html for any unmatched route)
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// Global error handler
app.use((err, req, res, next) => {
    res.status(500).send({ message: "Error occurred", problem: err.message });
});

