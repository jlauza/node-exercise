import { MongoClient } from "mongodb";

const connectionString = process.env._URI || "";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
  console.log("Successful connection with MongoDB!");
} catch(e) {
  console.error(e);
}

let db = conn.db("sample_training");

export default db;