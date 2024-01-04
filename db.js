const { MongoClient } = require('mongodb');

// Replace 'your-mongodb-uri' with your actual MongoDB connection string
const uri = 'mongodb+srv://KatayoonPardal:katayoon1380@cluster0.tzfuooz.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db('db-1'); // Replace 'your-database-name' with your actual database name
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

function closeMongoDBConnection() {
  client.close();
  console.log('MongoDB connection closed');
}

module.exports = { connectToMongoDB, closeMongoDBConnection };