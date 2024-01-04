const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb+srv://abdolalianzahra:27zL4IWcwCHWW8Mo@cluster0.x5temxa.mongodb.net/?retryWrites=true&w=majority';

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Function to run queries
async function run() {
  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('Connected to the database');

    // Specify the database and collection
    const database = client.db('p1');
    const collection = database.collection('posts');

    // Find all documents
    const allDocuments = await collection.find({}).toArray();
    console.log('All Documents:', allDocuments);

    // Find documents with a specific field value
    const aliceDocuments = await collection.find({ "title": "Post Title 1" }).toArray();
    console.log('Post Title 1 Documents:', aliceDocuments);

    // Find documents with conditions
    const ageGreaterThan25 = await collection.find({ "likes": { "$gt": 2 } }).toArray();
    console.log('likes > 2 Documents:', ageGreaterThan25);
  } finally {
    // Close the connection when finished
    await client.close();
    console.log('Connection closed');
  }
}

// Run the queries
run();
