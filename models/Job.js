import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Job title is required"],
      trim: true
    },

    company: {
      type: String,
      required: [true, "Company is required"],
      trim: true
    },

    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true
    },

    location: {
      type: String,
      required: [true, "Location is required"],
      trim: true
    },

    jobType: {
      type: String,
      required: [true, "Job type is required"],
      trim: true
    },

    experience: {
      type: String,
      required: [true, "Experience is required"],
      trim: true
    },

    salary: {
      type: Number,
      required: [true, "Salary is required"],
      min: [0, "Salary cannot be negative"]
    },

    skills: {
      type: [String],
      required: [true, "Skills are required"]
    },

    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true
    },

    vacancies: {
      type: Number,
      required: [true, "Number of vacancies is required"],
      min: [1, "There must be at least 1 vacancy"]
    },

    deadline: {
      type: Date,
      required: [true, "Deadline is required"]
    },

    status: {
      type: String,
      required: [true, "Status is required"],
      enum: {
        values: ["active", "closed", "expired"],
        message: "Status must be active, closed, or expired"
      },
      default: "active"
    }
  },
  {
    timestamps: true
  }
);

const Job = mongoose.model("Job", jobSchema);

export default Job;