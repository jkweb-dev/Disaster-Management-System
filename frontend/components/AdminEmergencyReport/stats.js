"use client";

import {
    AlertTriangle,
    Clock3,
    ShieldCheck,
    Activity
} from "lucide-react";


const EmergencyReportsStats = ({
    reports = []
}) => {


    const totalReports =
        reports.length;


    const pendingReports =
        reports.filter(
            report =>
                report.status === "Pending"
        ).length;


    const assignedReports =
        reports.filter(
            report =>
                report.status === "Assigned"
        ).length;


    const activeReports =
        reports.filter(
            report =>
                report.status === "In Progress"
        ).length;



    const stats = [

        {
            title: "Total Reports",

            value: totalReports,

            icon: AlertTriangle,

            iconStyle:
                "bg-blue-100 text-blue-600"
        },


        {
            title: "Pending",

            value: pendingReports,

            icon: Clock3,

            iconStyle:
                "bg-orange-100 text-orange-600"
        },


        {
            title: "Assigned",

            value: assignedReports,

            icon: ShieldCheck,

            iconStyle:
                "bg-indigo-100 text-indigo-600"
        },


        {
            title: "In Progress",

            value: activeReports,

            icon: Activity,

            iconStyle:
                "bg-green-100 text-green-600"
        }

    ];



    return (

        <div
            className="
            grid
            gap-5
            sm:grid-cols-2
            xl:grid-cols-4
            "
        >

            {
                stats.map((stat) => {

                    const Icon =
                        stat.icon;


                    return (

                        <div
                            key={stat.title}
                            className="
                            rounded-3xl
                            border
                            border-gray-100
                            bg-white
                            p-5
                            shadow-sm
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:shadow-lg
                            sm:p-6
                            "
                        >

                            <div
                                className="
                                flex
                                items-center
                                justify-between
                                gap-4
                                "
                            >

                                <div>

                                    <p
                                        className="
                                        text-sm
                                        font-medium
                                        text-gray-500
                                        "
                                    >

                                        {stat.title}

                                    </p>


                                    <h2
                                        className="
                                        mt-2
                                        text-3xl
                                        font-bold
                                        text-gray-800
                                        sm:text-4xl
                                        "
                                    >

                                        {stat.value}

                                    </h2>

                                </div>


                                <div
                                    className={`
                                    rounded-2xl
                                    p-3
                                    sm:p-4
                                    ${stat.iconStyle}
                                    `}
                                >

                                    <Icon
                                        size={24}
                                    />

                                </div>

                            </div>

                        </div>

                    );

                })
            }

        </div>

    );

};


export default EmergencyReportsStats;