import express from "express";

import { getAllVictims , getVictimById } from "../controllers/AdminVictim.js";

// Use the same authentication/authorization
// middleware that your existing admin routes use.




const router = express.Router();



/*
|--------------------------------------------------------------------------
| Get All Victims
|--------------------------------------------------------------------------
|
| GET /api/admin/victims
|
*/

router.get(

    "/",

    getAllVictims

);





/*
|--------------------------------------------------------------------------
| Get Single Victim
|--------------------------------------------------------------------------
|
| GET /api/admin/victims/:id
|
*/

router.get(

    "/:id",

    getVictimById

);



export default router;