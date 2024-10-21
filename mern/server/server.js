import express from "express";
import cors from "cors";
import records from "./routes/record.js";
import dotenv from "dotenv"; // Import dotenv

// Load environment variables from config.env file
dotenv.config({ path: './config.env' }); // Make sure the path is correct

const PORT = process.env.PORT || 5050;
const app = express();

// Configure CORS to allow only your frontend URL
const corsOptions = {
  origin: "https://toepfernfull-fe.onrender.com", // Replace this with your actual frontend URL
  optionsSuccessStatus: 200, // Some legacy browsers choke on 204 responses, so this is a safeguard
};

app.use(cors(corsOptions));
//app.use(cors());
app.use(express.json());
app.use("/record", records);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
