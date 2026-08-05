import express from "express";

import { register } from "../controllers/user.js";
import { login , forgotPassword , resetPassword , getMe , logout } from "../controllers/user.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router =
express.Router();



router.post(
"/register",
register
);

router.post(
"/login",
login
);

router.post(
"/forgot-password",
forgotPassword
);


router.post(
    "/reset-password/:token",
    resetPassword
);

router.get(

    "/me",

    authMiddleware,

    getMe

);


router.post(
    "/logout",
    logout
);
export default router;