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


export const getRescueTeams = async (req, res) => {

    try {


        const rescues = await User.find({
            role: "rescue"
        })
        .select(
            "-password"
        )
        .sort({
            createdAt: -1
        });



        res.status(200).json({

            success: true,

            rescues

        });



    }
    catch(error){

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};


export const approveRescue = async (req,res)=>{


    try{


        const rescue = await User.findById(
            req.params.id
        );



        if(!rescue){

            return res.status(404).json({

                success:false,

                message:"Rescue team not found"

            });

        }





        rescue.verificationStatus = "approved";


        await rescue.save();





        res.status(200).json({

            success:true,

            message:"Rescue team approved"

        });



    }
    catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });


    }


};



export const rejectRescue = async(req,res)=>{


    try{


        const rescue = await User.findById(
            req.params.id
        );



        if(!rescue){

            return res.status(404).json({

                success:false,

                message:"Rescue team not found"

            });

        }



        rescue.verificationStatus = "rejected";


        await rescue.save();





        res.status(200).json({

            success:true,

            message:"Rescue team rejected"

        });



    }
    catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });


    }


};