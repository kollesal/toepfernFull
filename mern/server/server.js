import express from "express";
import cors from "cors";
import records from "./routes/record.js";
import { connectDB } from "./db/connection.js"; // Import the database connection
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5050;
const app = express();

// Configure CORS to allow only your frontend URL
const corsOptions = {
  origin: "https://toepfernfull-fe.onrender.com", // Replace with your actual frontend URL
  optionsSuccessStatus: 200, 
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/record", records);

// Start the server only after database connection is successful
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server listening on port ${PORT}`);
  });
}).catch((err) => {
  console.error("❌ Error connecting to MongoDB:", err);
});
