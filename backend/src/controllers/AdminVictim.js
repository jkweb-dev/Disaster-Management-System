import mongoose from "mongoose";

import EmergencyReport from "../models/report-Emergency.js";
import User from "../models/user.js";


/*
|--------------------------------------------------------------------------
| Get All Victims
|--------------------------------------------------------------------------
*/

export const getAllVictims = async (req, res) => {

    try {

        const victims = await User.aggregate([

            /*
            |--------------------------------------------------------------------------
            | Only victims
            |--------------------------------------------------------------------------
            */

            {
                $match: {
                    role: "victim"
                }
            },


            /*
            |--------------------------------------------------------------------------
            | Join emergency reports
            |--------------------------------------------------------------------------
            */

            {
                $lookup: {

                    from: "emergencyreports",

                    localField: "_id",

                    foreignField: "victim",

                    as: "emergencyReports"

                }
            },


            /*
            |--------------------------------------------------------------------------
            | Add report count
            |--------------------------------------------------------------------------
            */

            {
                $addFields: {

                    emergencyReportCount: {
                        $size: "$emergencyReports"
                    }

                }
            },


            /*
            |--------------------------------------------------------------------------
            | Don't send password
            |--------------------------------------------------------------------------
            */

            {
                $project: {

                    password: 0,

                    emergencyReports: 0

                }
            },


            /*
            |--------------------------------------------------------------------------
            | Newest victims first
            |--------------------------------------------------------------------------
            */

            {
                $sort: {
                    createdAt: -1
                }
            }

        ]);


        return res.status(200).json({

            success: true,

            count: victims.length,

            victims

        });

    }

    catch (error) {

        console.error(
            "Get all victims error:",
            error
        );


        return res.status(500).json({

            success: false,

            message:
                "Failed to fetch victims."

        });

    }

};





/*
|--------------------------------------------------------------------------
| Get Single Victim
|--------------------------------------------------------------------------
*/

export const getVictimById = async (req, res) => {

    try {

        const {
            id
        } = req.params;



        /*
        |--------------------------------------------------------------------------
        | Validate ObjectId
        |--------------------------------------------------------------------------
        */

        if (
            !mongoose.Types.ObjectId.isValid(id)
        ) {

            return res.status(400).json({

                success: false,

                message:
                    "Invalid victim ID."

            });

        }



        /*
        |--------------------------------------------------------------------------
        | Find victim
        |--------------------------------------------------------------------------
        */

        const victim =
            await User.findOne({

                _id: id,

                role: "victim"

            })
            .select("-password")
            .lean();



        if (!victim) {

            return res.status(404).json({

                success: false,

                message:
                    "Victim not found."

            });

        }



        /*
        |--------------------------------------------------------------------------
        | Find victim's emergency reports
        |--------------------------------------------------------------------------
        */

        const reports =
            await EmergencyReport
                .find({
                    victim: id
                })
                .populate(
                    "assignedRescue",
                    "organizationName contactPerson phone serviceArea"
                )
                .sort({
                    createdAt: -1
                })
                .lean();



        /*
        |--------------------------------------------------------------------------
        | Calculate report statistics
        |--------------------------------------------------------------------------
        */

        const reportStats = {

            total: reports.length,

            pending: reports.filter(
                report =>
                    report.status === "Pending"
            ).length,

            assigned: reports.filter(
                report =>
                    report.status === "Assigned"
            ).length,

            inProgress: reports.filter(
                report =>
                    report.status === "In Progress"
            ).length,

            resolved: reports.filter(
                report =>
                    report.status === "Resolved"
            ).length,

            rejected: reports.filter(
                report =>
                    report.status === "Rejected"
            ).length

        };



        return res.status(200).json({

            success: true,

            victim: {

                ...victim,

                emergencyReportCount:
                    reports.length,

                reportStats,

                emergencyReports:
                    reports

            }

        });

    }

    catch (error) {

        console.error(
            "Get victim by ID error:",
            error
        );


        return res.status(500).json({

            success: false,

            message:
                "Failed to fetch victim details."

        });

    }

};