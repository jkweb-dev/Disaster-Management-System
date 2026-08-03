import bcrypt from "bcryptjs";


import generateToken from "../utils/generateToken.js";

import { registerSchema } from "../validators/user.js";

import User from "../models/user.js";



export const register = async(req,res)=>{
console.log("Hitted")

try{


const validation =
registerSchema.safeParse(req.body);



if(!validation.success){

return res.status(400).json({

message:
"Invalid data",

errors:
validation.error.errors

});

}



const data=req.body;



const existingUser =
await User.findOne({
email:data.email
});


if(existingUser){

return res.status(409).json({

message:
"Email already exists"

});

}




const hashedPassword =
await bcrypt.hash(
data.password,
12
);





const user =
await User.create({

...data,

password:hashedPassword,


emergencyCategories:

data.emergencyCategories
?
data.emergencyCategories.split(",")
:
[]


});




const token =
generateToken(
user._id,
user.role
);





res.status(201).json({

message:
"Registration successful",

token,


user:{

id:user._id,

role:user.role

}

});



}

catch(error){

res.status(500).json({

message:
error.message

});


}


};





export const login = async (req, res) => {

    try {


        const {
            email,
            password
        } = req.body;



        // Validation

        if(!email || !password){

            return res.status(400).json({

                message:
                "Email and password are required"

            });

        }



        // Find User

        const user =
        await User.findOne({
            email
        });



        if(!user){

            return res.status(400).json({

                message:
                "Invalid email or password"

            });

        }





        // Compare Password

        const isPasswordValid =
        await bcrypt.compare(
            password,
            user.password
        );



        if(!isPasswordValid){

            return res.status(400).json({

                message:
                "Invalid email or password"

            });

        }





        // Rescue verification check

        if(
            user.role==="rescue" &&
            user.verificationStatus==="rejected"
        ){

            return res.status(403).json({

                message:
                "Rescue account has been rejected"

            });

        }






        // Generate JWT

        const token =
        generateToken(
            user._id,
            user.role
        );






        res.status(200).json({

            message:
            "Login successful",


            token,


            user:{

                id:user._id,

                role:user.role,

                name:
                user.name ||
                user.organizationName

            }

        });



    }

    catch(error){


        res.status(500).json({

            message:
            error.message

        });


    }


};