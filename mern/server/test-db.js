import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config(); // Load .env variables

const uri = process.env.ATLAS_URI; // Make sure this matches your .env file

async function testDB() {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    console.log("✅ Connected to MongoDB successfully!");
    await client.close();
  } catch (error) {
    console.error("❌ Connection failed:", error);
  }
}

testDB();