import express from "express";

import {
  createJob,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob
} from "../controllers/jobController.js";

const router = express.Router();

// Create a job
router.post("/", createJob);

// Get all jobs
router.get("/", getAllJobs);

// Get single job
router.get("/:id", getJobById);

// Update job
router.put("/:id", updateJob);

// Delete job
router.delete("/:id", deleteJob);

export default router;