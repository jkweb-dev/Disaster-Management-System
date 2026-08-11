import EmergencyReport from "../models/report-Emergency.js";



const getRescueDashboard = async (req, res) => {

    try {

        const rescueId = req.user._id;



        /*
        |--------------------------------------------------------------------------
        | BASIC STATISTICS
        |--------------------------------------------------------------------------
        */

        const [

            assignedCount,

            inProgressCount,

            resolvedCount,

            criticalCount

        ] = await Promise.all([


            EmergencyReport.countDocuments({

                assignedRescue: rescueId,

                status: "Assigned"

            }),



            EmergencyReport.countDocuments({

                assignedRescue: rescueId,

                status: "In Progress"

            }),



            EmergencyReport.countDocuments({

                assignedRescue: rescueId,

                status: "Resolved"

            }),



            EmergencyReport.countDocuments({

                assignedRescue: rescueId,

                severity: "Critical",

                status: {
                    $in: [
                        "Assigned",
                        "In Progress"
                    ]
                }

            })

        ]);





        /*
        |--------------------------------------------------------------------------
        | TOTAL ASSIGNED EMERGENCIES
        |--------------------------------------------------------------------------
        */

        const totalEmergencies =
            await EmergencyReport.countDocuments({

                assignedRescue: rescueId

            });





        /*
        |--------------------------------------------------------------------------
        | URGENT EMERGENCIES
        |--------------------------------------------------------------------------
        |
        | Only emergencies currently requiring rescue attention.
        |
        */

        const urgentEmergencies =
            await EmergencyReport.find({

                assignedRescue: rescueId,

                severity: {
                    $in: [
                        "Critical",
                        "High"
                    ]
                },

                status: {
                    $in: [
                        "Assigned",
                        "In Progress"
                    ]
                }

            })

            .select(
                `
                _id
                title
                emergencyType
                severity
                city
                location
                peopleAffected
                status
                assignedAt
                createdAt
                `
            )

            .sort({

                severity: 1,

                assignedAt: -1

            })

            .limit(5)

            .lean();





        /*
        |--------------------------------------------------------------------------
        | ACTIVE RESPONSES
        |--------------------------------------------------------------------------
        */

        const activeResponses =
            await EmergencyReport.find({

                assignedRescue: rescueId,

                status: "In Progress"

            })

            .select(
                `
                _id
                title
                emergencyType
                severity
                city
                location
                peopleAffected
                status
                assignedAt
                createdAt
                `
            )

            .sort({

                assignedAt: -1

            })

            .limit(5)

            .lean();





        /*
        |--------------------------------------------------------------------------
        | RECENT ASSIGNMENTS
        |--------------------------------------------------------------------------
        */

        const recentAssignments =
            await EmergencyReport.find({

                assignedRescue: rescueId

            })

            .select(
                `
                _id
                title
                emergencyType
                severity
                city
                location
                peopleAffected
                status
                assignedAt
                createdAt
                completedAt
                `
            )

            .sort({

                assignedAt: -1

            })

            .limit(8)

            .lean();





        /*
        |--------------------------------------------------------------------------
        | RESPONSE RATE
        |--------------------------------------------------------------------------
        */

        const completedCount =
            resolvedCount;


        const responseRate =
            totalEmergencies > 0

                ?

            Math.round(
                (
                    completedCount /
                    totalEmergencies
                ) * 100
            )

                :

            0;





        /*
        |--------------------------------------------------------------------------
        | RESPONSE
        |--------------------------------------------------------------------------
        */

        return res.status(200).json({

            success: true,

            dashboard: {

                statistics: {

                    assigned:
                        assignedCount,

                    inProgress:
                        inProgressCount,

                    resolved:
                        resolvedCount,

                    critical:
                        criticalCount,

                    total:
                        totalEmergencies,

                    responseRate

                },


                urgentEmergencies,

                activeResponses,

                recentAssignments

            }

        });

    }

    catch (error) {

        console.error(
            "Rescue dashboard error:",
            error
        );


        return res.status(500).json({

            success: false,

            message:
                "Failed to load rescue dashboard."

        });

    }

};



export {
    getRescueDashboard
};