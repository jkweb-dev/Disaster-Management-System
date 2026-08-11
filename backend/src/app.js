import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";

import Userrouter from "./routes/user.js";
import Emergencyrouter from "./routes/emergency-Report.js";
import Adminrouter from "./routes/Admin.js";
import AdminEmergencyReportrouter from "./routes/AdminEmergencyReport.js";
import AdminVictimrouter from "./routes/AdminVictim.js";
import RescueDashboardrouter from "./routes/rescueDashboard.js";
import RescueEmergencyrouter from "./routes/rescueEmergency.js";


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

app.use(
  "/uploads",
  express.static(path.join(process.cwd(), "src/uploads"))
);


app.use("/auth",Userrouter)

app.use("/emergency",Emergencyrouter)

app.use("/admin" , Adminrouter)

app.use("/admin/emergency-reports" , AdminEmergencyReportrouter)

app.use("/admin/victims",  AdminVictimrouter);

app.use("/rescue", RescueDashboardrouter);

app.use( "/rescue/emergencies", RescueEmergencyrouter);

export default app;