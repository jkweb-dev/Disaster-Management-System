import express from "express";


import upload from "../middleware/multer.js";


import { createEmergencyReport , getEmergencyReportById , getMyEmergencyReports } from "../controllers/report-Emergency.js";



import authMiddleware from "../middleware/authMiddleware.js";



const router = express.Router();






// Create emergency report

router.post(

    "/create",

    authMiddleware ,

    upload.array(
        "images",
        5
    ),

    createEmergencyReport

);







// Victim own reports

router.get(

    "/my-reports",

      authMiddleware ,

    getMyEmergencyReports

);







// Single report

router.get(

    "/:id",

      authMiddleware ,

    getEmergencyReportById

);







export default router;