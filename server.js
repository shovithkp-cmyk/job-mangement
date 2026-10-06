import express from "express";
// import mongoose from "mongoose";
import dotenv from "dotenv";

import jobRoutes from "./routes/jobRoutes.js";
import dbconnect from "./config/db.js";

dotenv.config();

const app = express();

dbconnect()

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Job Management API is running"
  });
});

app.use("/api/jobs", jobRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    success: false,
    message: "Internal server error"
  });
});

// const PORT = process.env.PORT || 5000;

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("MongoDB connected successfully");

//     app.listen(PORT, () => {
//       console.log(`Server running on http://localhost:${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.error("MongoDB connection failed:");
//     console.error(error.message);
//   });