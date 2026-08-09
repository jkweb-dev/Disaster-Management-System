import EmergencyReport from "../models/report-Emergency.js";

import User from "../models/user.js";

/*
|--------------------------------------------------------------------------
| Get All Emergency Reports
|--------------------------------------------------------------------------
*/

export const getAllEmergencyReports = async (req, res) => {

    try {

        const reports = await EmergencyReport
            .find()
            .populate(
                "assignedRescue",
                "organizationName contactPerson phone email teamSize serviceArea"
            )
            .sort({
                createdAt: -1
            });


        return res.status(200).json({

            success: true,

            count: reports.length,

            reports

        });


    } catch (error) {

        console.error(
            "Get emergency reports error:",
            error
        );


        return res.status(500).json({

            success: false,

            message:
                "Failed to fetch emergency reports"

        });

    }

};





/*
|--------------------------------------------------------------------------
| Get Single Emergency Report
|--------------------------------------------------------------------------
*/

export const getEmergencyReportById = async (
    req,
    res
) => {

    try {

        const { id } = req.params;


        const report = await EmergencyReport
            .findById(id)
            .populate(
                "victim",
                "name email phone address city"
            )
            .populate(
                "assignedRescue",
                "organizationName contactPerson phone email teamSize serviceArea emergencyCategories"
            );



        if (!report) {

            return res.status(404).json({

                success: false,

                message:
                    "Emergency report not found"

            });

        }



        return res.status(200).json({

            success: true,

            report

        });


    } catch (error) {

        console.error(
            "Get emergency report error:",
            error
        );


        return res.status(500).json({

            success: false,

            message:
                "Failed to fetch emergency report"

        });

    }

};





/*
|--------------------------------------------------------------------------
| Update Emergency Report Status
|--------------------------------------------------------------------------
*/

export const updateEmergencyReportStatus = async (
    req,
    res
) => {

    try {

        const { id } = req.params;

        const { status } = req.body;



        const allowedStatuses = [

            "Pending",
            "Assigned",
            "In Progress",
            "Resolved",
            "Rejected"

        ];



        if (
            !allowedStatuses.includes(status)
        ) {

            return res.status(400).json({

                success: false,

                message:
                    "Invalid emergency report status"

            });

        }



        const report =
            await EmergencyReport.findById(id);



        if (!report) {

            return res.status(404).json({

                success: false,

                message:
                    "Emergency report not found"

            });

        }



        report.status = status;



        if (status === "Resolved") {

            report.completedAt = new Date();

        }



        if (status !== "Resolved") {

            report.completedAt = null;

        }



        await report.save();



        return res.status(200).json({

            success: true,

            message:
                "Emergency report status updated successfully",

            report

        });


    } catch (error) {

        console.error(
            "Update emergency status error:",
            error
        );


        return res.status(500).json({

            success: false,

            message:
                "Failed to update emergency report status"

        });

    }

};






/*
|--------------------------------------------------------------------------
| Get Approved Rescue Teams
|--------------------------------------------------------------------------
*/

export const getApprovedRescueTeams = async (req, res) => {

    try {

        const rescueTeams = await User
            .find({
                role: "rescue",
                verificationStatus: "approved"
            })
            .select(
                "organizationName contactPerson email phone teamSize serviceArea emergencyCategories"
            )
            .sort({
                organizationName: 1
            });


        return res.status(200).json({

            success: true,

            count: rescueTeams.length,

            rescueTeams

        });

    }

    catch (error) {

        console.error(
            "Get approved rescue teams error:",
            error
        );

        return res.status(500).json({

            success: false,

            message:
                "Failed to fetch approved rescue teams."

        });

    }

};


/*
|--------------------------------------------------------------------------
| Assign Rescue Team To Emergency Report
|--------------------------------------------------------------------------
*/

export const assignRescueTeam = async (req, res) => {

    try {

        const {
            id
        } = req.params;


        const {
            rescueId
        } = req.body;



        // ------------------------------------------------
        // Validate rescue ID
        // ------------------------------------------------

        if (!rescueId) {

            return res.status(400).json({

                success: false,

                message:
                    "Rescue team is required."

            });

        }



        // ------------------------------------------------
        // Find emergency report
        // ------------------------------------------------

        const report =
            await EmergencyReport.findById(id);


        if (!report) {

            return res.status(404).json({

                success: false,

                message:
                    "Emergency report not found."

            });

        }



        // ------------------------------------------------
        // Find rescue team
        // ------------------------------------------------

        const rescueTeam =
            await User.findOne({

                _id: rescueId,

                role: "rescue",

                verificationStatus: "approved"

            });


        if (!rescueTeam) {

            return res.status(404).json({

                success: false,

                message:
                    "Approved rescue team not found."

            });

        }



        // ------------------------------------------------
        // Prevent assignment of rejected reports
        // ------------------------------------------------

        if (
            report.status === "Rejected"
        ) {

            return res.status(400).json({

                success: false,

                message:
                    "A rejected emergency report cannot be assigned."

            });

        }



        // ------------------------------------------------
        // Prevent assigning resolved reports
        // ------------------------------------------------

        if (
            report.status === "Resolved"
        ) {

            return res.status(400).json({

                success: false,

                message:
                    "A resolved emergency report cannot be assigned."

            });

        }



        // ------------------------------------------------
        // Assign rescue
        // ------------------------------------------------

        report.assignedRescue =
            rescueTeam._id;


        report.assignedAt =
            new Date();


        report.status =
            "Assigned";



        await report.save();



        // ------------------------------------------------
        // Return populated report
        // ------------------------------------------------

        await report.populate(
            "assignedRescue",
            "organizationName contactPerson email phone teamSize serviceArea emergencyCategories"
        );



        return res.status(200).json({

            success: true,

            message:
                "Rescue team assigned successfully.",

            report

        });

    }

    catch (error) {

        console.error(
            "Assign rescue team error:",
            error
        );


        return res.status(500).json({

            success: false,

            message:
                "Failed to assign rescue team."

        });

    }

};