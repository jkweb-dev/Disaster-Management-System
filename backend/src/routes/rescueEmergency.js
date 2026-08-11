import express from "express";

import { getRescueEmergencies , getRescueEmergencyById , updateRescueEmergencyStatus } from "../controllers/rescueEmergency.js";

import authMiddleware from "../middleware/authMiddleware.js";



const router =  express.Router();


/*
|--------------------------------------------------------------------------
| GET ALL RESCUE EMERGENCIES
|--------------------------------------------------------------------------
*/

router.get(
    "/",
    authMiddleware ,
    getRescueEmergencies
);

/*
|--------------------------------------------------------------------------
| GET SINGLE RESCUE EMERGENCY
|--------------------------------------------------------------------------
*/

router.get(
    "/:id",
    authMiddleware,
    getRescueEmergencyById
);

/*
|--------------------------------------------------------------------------
| UPDATE EMERGENCY STATUS
|--------------------------------------------------------------------------
*/

router.patch(
    "/:id/status",
    authMiddleware ,
    updateRescueEmergencyStatus
);





export default router;