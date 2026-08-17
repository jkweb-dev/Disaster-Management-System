import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";

import { getNotifications , markAsRead , markAllAsRead } from "../controllers/notificationController.js";


const router =
    express.Router();



/*
    Get logged-in user's
    notifications
*/

router.get(
    "/",
    authMiddleware,
    getNotifications
);



/*
    Mark one notification
    as read
*/

router.patch(
    "/:id/read",
    authMiddleware,
    markAsRead
);



/*
    Mark all notifications
    as read
*/

router.patch(
    "/read-all",
    authMiddleware,
    markAllAsRead
);



export default router;