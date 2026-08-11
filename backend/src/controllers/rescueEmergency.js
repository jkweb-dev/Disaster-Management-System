import mongoose from "mongoose";

import EmergencyReport from "../models/report-Emergency.js";





export const getRescueEmergencies = async (
    req,
    res
) => {

    try {

        const rescueId = req.user._id;


        const emergencies =
            await EmergencyReport
                .find({
                    assignedRescue: rescueId,

                    status: {
                        $in: [
                            "Assigned",
                            "In Progress",
                            "Resolved"
                        ]
                    }
                })
                .sort({
                    createdAt: -1
                })
                .lean();



        return res.status(200).json({

            success: true,

            count: emergencies.length,

            emergencies

        });


    } catch (error) {

        console.error(
            "Get rescue emergencies error:",
            error
        );


        return res.status(500).json({

            success: false,

            message:
                "Failed to fetch emergencies."

        });

    }

};





export const getRescueEmergencyById = async (
    req,
    res
) => {

    try {

        const {
            id
        } = req.params;



        if (
            !mongoose.Types.ObjectId.isValid(
                id
            )
        ) {

            return res.status(400).json({

                success: false,

                message:
                    "Invalid emergency ID."

            });

        }



        const rescueId =
            req.user.id;



        const emergency =
            await EmergencyReport
                .findOne({

                    _id: id,

                    assignedRescue:
                        rescueId

                })
                .populate(
                    "assignedRescue",
                    "organizationName contactPerson email phone teamSize serviceArea emergencyCategories"
                )
                .populate(
                    "victim",
                    "name email phone address city"
                )
                .lean();



        if (!emergency) {

            return res.status(404).json({

                success: false,

                message:
                    "Emergency not found or not assigned to your rescue team."

            });

        }



        return res.status(200).json({

            success: true,

            emergency

        });


    } catch (error) {

        console.error(
            "Get rescue emergency error:",
            error
        );


        return res.status(500).json({

            success: false,

            message:
                "Failed to fetch emergency."

        });

    }

};





export const updateRescueEmergencyStatus =
    async (
        req,
        res
    ) => {

        try {

            const {
                id
            } = req.params;


            const {
                status
            } = req.body;



            /*
            |--------------------------------------------------------------------------
            | Validate ID
            |--------------------------------------------------------------------------
            */

            if (
                !mongoose.Types.ObjectId.isValid(
                    id
                )
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Invalid emergency ID."

                });

            }



            /*
            |--------------------------------------------------------------------------
            | Validate requested status
            |--------------------------------------------------------------------------
            */

            const allowedStatuses = [

                "In Progress",

                "Resolved"

            ];



            if (
                !allowedStatuses.includes(
                    status
                )
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Invalid rescue status."

                });

            }



            const rescueId =
                req.user.id;



            /*
            |--------------------------------------------------------------------------
            | Find emergency
            |--------------------------------------------------------------------------
            */

            const emergency =
                await EmergencyReport.findOne({

                    _id: id,

                    assignedRescue:
                        rescueId

                });



            if (!emergency) {

                return res.status(404).json({

                    success: false,

                    message:
                        "Emergency not found or not assigned to your rescue team."

                });

            }



            /*
            |--------------------------------------------------------------------------
            | Protect status transitions
            |--------------------------------------------------------------------------
            */

            if (
                status === "In Progress"
            ) {

                if (
                    emergency.status !==
                    "Assigned"
                ) {

                    return res.status(400).json({

                        success: false,

                        message:
                            "Only an assigned emergency can be started."

                    });

                }


                emergency.status =
                    "In Progress";

            }



            if (
                status === "Resolved"
            ) {

                if (
                    emergency.status !==
                    "In Progress"
                ) {

                    return res.status(400).json({

                        success: false,

                        message:
                            "Only an emergency in progress can be resolved."

                    });

                }


                emergency.status =
                    "Resolved";


                emergency.completedAt =
                    new Date();

            }



            await emergency.save();



            return res.status(200).json({

                success: true,

                message:
                    `Emergency status updated to ${status}.`,

                emergency

            });


        } catch (error) {

            console.error(
                "Update rescue emergency status error:",
                error
            );


            return res.status(500).json({

                success: false,

                message:
                    "Failed to update emergency status."

            });

        }

    };