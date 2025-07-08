import express from "express";
const router = express.Router();

import {
  getAllJobs,
  postJob,
  getJobById,
  getAdminJobs
} from "../controllers/job.controller.js";

// Route to get all jobs
router.get("/", getAllJobs);

// Route to get all jobs posted by an admin
router.get("/admin", getAdminJobs);

// Route to get one job by ID
router.get("/:id", getJobById);

// Route to post a new job
router.post("/create", postJob);

export default router;

