import express from "express";

import { register } from "../controllers/user.js";
import { login , forgotPassword , resetPassword } from "../controllers/user.js";

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

export default router;