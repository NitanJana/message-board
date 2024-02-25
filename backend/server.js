import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

// middleware
app.use(express.json());
app.use(cors());


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
