import mongoose from "mongoose";
import Job from "../models/Job.js";


const createJob = async (req, res) => {
  try {
    const job = await Job.create(req.body);

    res.status(201).json({
      success: true,
      message: "Job created successfully",
      data: job
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to create job",
      error: error.message
    });
  }
};


const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: jobs.length,
      data: jobs
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch jobs",
      error: error.message
    });
  }
};


const getJobById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid job ID"
      });
    }

    const job = await Job.findById(id);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found"
      });
    }

    res.status(200).json({
      success: true,
      data: job
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch job",
      error: error.message
    });
  }
};


const updateJob = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid job ID"
      });
    }

    const job = await Job.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Job updated successfully",
      data: job
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to update job",
      error: error.message
    });
  }
};


const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid job ID"
      });
    }

    const job = await Job.findByIdAndDelete(id);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Job deleted successfully",
      data: job
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete job",
      error: error.message
    });
  }
};


export {
  createJob,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob
};