import express from "express";

import { getRescueDashboard } from "../controllers/rescueDashboard.js";

import authMiddleware from "../middleware/authMiddleware.js";


const router =
    express.Router();



router.get(
    "/dashboard",
   authMiddleware,
    getRescueDashboard
);



export default router;