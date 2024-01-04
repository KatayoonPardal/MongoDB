const express = require('express');
const { connectToMongoDB, closeMongoDBConnection } = require('./db');

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Routes go here...

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});