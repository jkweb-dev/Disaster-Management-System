import express from "express";

import { getAllEmergencyReports , getEmergencyReportById , updateEmergencyReportStatus , getApprovedRescueTeams , assignRescueTeam } from "../controllers/AdminEmergencyReport.js";

const router = express.Router();




/*
|--------------------------------------------------------------------------
| GET ALL EMERGENCY REPORTS
|--------------------------------------------------------------------------
*/

router.get(
    "/",
    getAllEmergencyReports
);


router.get(
    "/rescue-teams",
    
    getApprovedRescueTeams
);


/*
|--------------------------------------------------------------------------
| GET SINGLE EMERGENCY REPORT
|--------------------------------------------------------------------------
*/

router.get(
    "/:id",
    getEmergencyReportById
);




/*
|--------------------------------------------------------------------------
| UPDATE STATUS
|--------------------------------------------------------------------------
*/

router.patch(
    "/:id/status",
    updateEmergencyReportStatus
);






/*
|--------------------------------------------------------------------------
| Assign Rescue Team
|--------------------------------------------------------------------------
|
| PATCH /api/admin/emergency-reports/:id/assign
|
*/

router.patch(
    "/:id/assign",
   
    assignRescueTeam
);



export default router;