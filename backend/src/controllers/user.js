import bcrypt from "bcryptjs";


import generateToken from "../utils/generateToken.js";

import { registerSchema } from "../validators/user.js";

import User from "../models/user.js";

import crypto from "crypto";

import sendEmail from "../utils/sendEmail.js";


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

role:user.role ,

name : user.name ||
                user.organizationName || "Admin Bai"

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
                user.organizationName || "Admin Bai"

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


export const forgotPassword = async (req, res) => {

    try {

        const { email } = req.body;

        if (!email) {

            return res.status(400).json({

                message: "Email is required"

            });

        }


        const user = await User.findOne({ email });


        // Don't reveal whether the email exists
        if (!user) {

            return res.status(200).json({

                message:
                "If an account exists with this email, a password reset link has been sent."

            });

        }


        // Generate random token

        const resetToken = crypto.randomBytes(32).toString("hex");


        // Hash token before saving

        const hashedToken = crypto
            .createHash("sha256")
            .update(resetToken)
            .digest("hex");


        user.resetPasswordToken = hashedToken;

        user.resetPasswordExpires = Date.now() + 15 * 60 * 1000;


        await user.save();


        const resetURL =

`${process.env.CLIENT_URL}/reset-password/${resetToken}`;



        const html = `

        <h2>Password Reset</h2>

        <p>You requested to reset your password.</p>

        <p>

        <a href="${resetURL}">

        Reset Password

        </a>

        </p>

        <p>

        This link expires in 15 minutes.

        </p>

        `;



        await sendEmail({

            to: user.email,

            subject: "Reset Your Password",

            html

        });



        res.status(200).json({

            message:
            "If an account exists with this email, a password reset link has been sent."

        });

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};


export const resetPassword = async (req, res) => {

    try {

        const { token } = req.params;

        const {
            password,
            confirmPassword
        } = req.body;


        if (!password || !confirmPassword) {

            return res.status(400).json({

                message: "All fields are required"

            });

        }


        if (password !== confirmPassword) {

            return res.status(400).json({

                message: "Passwords do not match"

            });

        }


        // Hash the received token

        const hashedToken = crypto
            .createHash("sha256")
            .update(token)
            .digest("hex");


        // Find matching user

        const user = await User.findOne({

            resetPasswordToken: hashedToken,

            resetPasswordExpires: {
                $gt: Date.now()
            }

        });


        if (!user) {

            return res.status(400).json({

                message: "Reset link is invalid or has expired"

            });

        }


        // Hash new password

        const hashedPassword = await bcrypt.hash(
            password,
            12
        );


        user.password = hashedPassword;

        user.resetPasswordToken = undefined;

        user.resetPasswordExpires = undefined;


        await user.save();


        res.status(200).json({

            message: "Password reset successfully"

        });

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};