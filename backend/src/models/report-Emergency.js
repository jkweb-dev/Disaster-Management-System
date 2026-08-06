import mongoose from "mongoose";



const emergencyReportSchema = new mongoose.Schema(

{

    victim:{

        type:mongoose.Schema.Types.ObjectId,

        ref:"User",

        required:true

    },



    // Personal Information snapshot

    name:{

        type:String,

        required:true

    },


    email:{

        type:String,

        required:true

    },


    phone:{

        type:String,

        required:true

    },



    // Emergency Details

    emergencyType:{

        type:String,

        required:true

    },


    severity:{

        type:String,

        enum:[
            "Low",
            "Medium",
            "High",
            "Critical"
        ],

        required:true

    },


    title:{

        type:String,

        required:true

    },


    description:{

        type:String,

        required:true

    },


    contactPreference:{

        type:String,

        enum:[
            "Phone Call",
    "SMS",
    "WhatsApp",
    "Unable to Receive Calls"

        ],

        required:true

    },




    // People affected

    peopleAffected:{


        adults:{
            type:Number,
            default:0
        },


        children:{
            type:Number,
            default:0
        },


        elderly:{
            type:Number,
            default:0
        },


        disabled:{
            type:Number,
            default:0
        },


        injured:{
            type:Number,
            default:0
        }


    },





    // Required assistance

    assistanceRequired:[

        {

            type:String

        }

    ],





    // Location

    location:{


        latitude:{

            type:Number,

            required:true

        },


        longitude:{

            type:Number,

            required:true

        },


        address:{

            type:String

        },


        city:{

            type:String

        },


        landmark:{

            type:String

        }


    },






    // Images

    images:[


        {


            url:{

                type:String,

                required:true

            },


            filename:{

                type:String

            }


        }


    ],





    // Report workflow

    status:{


        type:String,


        enum:[

            "Pending",
            "Assigned",
            "In Progress",
            "Resolved",
            "Rejected"

        ],


        default:"Pending"


    },





    assignedRescue:{


        type:mongoose.Schema.Types.ObjectId,


        ref:"User",


        default:null


    }



},


{

    timestamps:true

}


);





const EmergencyReport =
mongoose.model(
    "EmergencyReport",
    emergencyReportSchema
);



export default EmergencyReport;