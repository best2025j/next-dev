import { MongoClient } from "mongodb";

// Ensure the MongoDB URI is set
const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("Please add your Mongo URI to .env.local");
}

let client;
let clientPromise;

// Create a new MongoClient instance and handle connections
if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable to preserve the MongoClient across module reloads.
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    global._mongoClientPromise = client.connect().catch((err) => {
      console.error("MongoDB connection error:", err);
      throw err; // Rethrow the error to be caught by the caller
    });
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, create a new client and connect
  client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  clientPromise = client.connect().catch((err) => {
    console.error("MongoDB connection error:", err);
    throw err; // Rethrow the error to be caught by the caller
  });
}

// Export a promise that resolves to the MongoClient
export default clientPromise;
