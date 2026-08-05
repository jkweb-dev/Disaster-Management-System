import jwt from "jsonwebtoken";

import User from "../models/user.js";



const authMiddleware = async (req, res, next) => {


    try {


        // Get token from cookie

        const token = req.cookies.token;



        if (!token) {

            return res.status(401).json({

                message: "Not authenticated"

            });

        }





        // Verify token

        const decoded = jwt.verify(

            token,

            process.env.JWT_SECRET

        );





        // Find user from database

        const user = await User.findById(
            decoded.id
        )
        .select("-password");





        if (!user) {

            return res.status(401).json({

                message:"User not found"

            });

        }





        // Attach user to request

        req.user = user;




        next();



    }

    catch(error){


        return res.status(401).json({

            message:"Invalid or expired token"

        });


    }


};



export default authMiddleware;