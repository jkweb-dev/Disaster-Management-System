import EmergencyReport from "../models/report-Emergency.js";
import deleteFiles from "../utils/deleteFiles.js";




// CREATE EMERGENCY REPORT

export const createEmergencyReport = async(req,res)=>{


    try{


        const victimId = req.user.id;



        const {

            name,
            email,
            phone,

            emergencyType,
            severity,
            title,
            description,
            contactPreference,

            adults,
            children,
            elderly,
            disabled,
            injured,

            assistanceRequired,

            latitude,
            longitude,
            address,
            city,
            landmark


        } = req.body;







        const images = req.files?.map(

            (file)=>({


                url:
                `/uploads/${file.filename}`,



                filename:
                file.filename


            })

        ) || [];









        const report = await EmergencyReport.create({



            victim:victimId,



            name,

            email,

            phone,



            emergencyType,

            severity,

            title,

            description,

            contactPreference,





            peopleAffected:{


                adults,

                children,

                elderly,

                disabled,

                injured


            },





            assistanceRequired:

                Array.isArray(assistanceRequired)

                ?

                assistanceRequired

                :

                [assistanceRequired],






            location:{


                latitude,

                longitude,

                address,

                city,

                landmark


            },






            images



        });








        res.status(201).json({


            success:true,


            message:
            "Emergency report submitted successfully",



            report


        });





    }

    catch(error){



        console.log(error);


        deleteFiles(req.files)

        res.status(500).json({

            success:false,

            message:
            "Server error"

        });



    }



};









// GET ALL REPORTS OF LOGGED IN VICTIM

export const getMyEmergencyReports = async(req,res)=>{


    try{


        const reports = await EmergencyReport.find({

            victim:req.user.id


        })

        .sort({

            createdAt:-1

        });





        res.status(200).json({


            success:true,


            reports


        });





    }

    catch(error){


        res.status(500).json({

            success:false,

            message:"Server error"

        });


    }



};









// GET SINGLE REPORT

export const getEmergencyReportById = async(req,res)=>{


    try{

        console.log("Hitted")

        const report =
        await EmergencyReport.findOne({


            _id:req.params.id,


            victim:req.user.id


        });






        if(!report){


            return res.status(404).json({

                success:false,

                message:
                "Report not found"

            });


        }







        res.status(200).json({


            success:true,


            report


        });






    }

    catch(error){


        res.status(500).json({

            success:false,

            message:
            "Server error"

        });


    }



};