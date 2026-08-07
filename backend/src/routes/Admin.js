import express from "express";

import { getAdminStats , getRescueTeams , approveRescue , rejectRescue } from "../controllers/Admin.js";

import authMiddleware from "../middleware/authMiddleware.js";


const router = express.Router();



router.get(
    "/stats",
    authMiddleware,
    getAdminStats
);


router.get(
    "/rescues",
    authMiddleware ,
    getRescueTeams
);



router.patch(
    "/rescues/:id/approve",
    authMiddleware ,
    approveRescue
);



router.patch(
    "/rescues/:id/reject",
   authMiddleware ,
    rejectRescue
);


export default router;