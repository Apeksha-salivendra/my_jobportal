import express from "express";
const router = express.Router();

// Import the controller function
import { getAllJobs } from "../controllers/job.controller.js";

// Route: GET /api/v1/job
router.get("/", getAllJobs);

// Export the router
export default router;
