import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import Userrouter from "./routes/user.js";
import Emergencyrouter from "./routes/emergency-Report.js";


const app = express();

// Middlewares


app.use(
  cors({
    origin:process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cookieParser());

app.get("/" , (req , res) => {
  res.status(200).json({
    message : "Server is running successfully"
  })
})

app.use("/auth",Userrouter)

app.use("/emergency",Emergencyrouter)

export default app;