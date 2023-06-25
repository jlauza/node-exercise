// First import MongoClient from mongoDB
import { MongoClient } from "mongodb";

// Pull db uri from .env file
const connectionString = process.env._URI || "";

// assign the connectionString variable to MongoClient class
const client = new MongoClient(connectionString);

// Test connection with try-catch
let conn;
try {
  conn = await client.connect();
  console.log("Successfully connected to MongoDB!");
} catch(e) {
  console.error(e);
}

let db = conn.db("test");

export default db;