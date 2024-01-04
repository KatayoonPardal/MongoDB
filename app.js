// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Set up EJS as the view engine
app.set('view engine', 'ejs');

// Serve static assets from the public folder
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
    res.render('welcome');
});

app.get('/information-form', (req, res) => {
    res.render('information-form');
});

app.post('/submit-information', (req, res) => {
    // Implement logic to handle form submissions and store data in MongoDB
    // Use db.js to connect to MongoDB and perform database operations
    res.redirect('/database-report'); // Redirect to the database report page after submission
});

app.get('/database-report', (req, res) => {
    res.render('database-report');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
