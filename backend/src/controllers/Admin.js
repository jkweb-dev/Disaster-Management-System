import User from "../models/user.js";
import EmergencyReport from "../models/report-Emergency.js";

// Dashboard statistics

export const getAdminStats = async(req,res)=>{


    try{


        const victims =
        await User.countDocuments({
            role:"victim"
        });



        const rescues =
        await User.countDocuments({
            role:"rescue"
        });



        const reports =
        await EmergencyReport.countDocuments();



        const active =
        await EmergencyReport.countDocuments({

            status:{
                $in:[
                    "Assigned",
                    "In Progress"
                ]
            }

        });



        res.status(200).json({

            success:true,

            stats:{

                victims,

                rescues,

                reports,

                active

            }

        });


    }
    catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });


    }


};