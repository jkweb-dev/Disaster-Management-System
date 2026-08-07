import express from "express";

import { getAdminStats } from "../controllers/Admin.js";

import authMiddleware from "../middleware/authMiddleware.js";


const router = express.Router();



router.get(
    "/stats",
    authMiddleware,
    getAdminStats
);



export default router;