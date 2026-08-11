"use client";

import {
    ClipboardList,
    Activity,
    CheckCircle2,
    AlertTriangle
} from "lucide-react";


const EmergencyStats = ({
    emergencies = []
}) => {


    const assignedCount =
        emergencies.filter(
            (emergency) =>
                emergency.status === "Assigned"
        ).length;


    const inProgressCount =
        emergencies.filter(
            (emergency) =>
                emergency.status === "In Progress"
        ).length;


    const resolvedCount =
        emergencies.filter(
            (emergency) =>
                emergency.status === "Resolved"
        ).length;


    const urgentCount =
        emergencies.filter(
            (emergency) =>
                emergency.severity === "Critical" ||
                emergency.severity === "High"
        ).length;



    const stats = [

        {
            title: "Assigned",
            value: assignedCount,
            description: "Waiting for response",
            icon: ClipboardList,
            iconBg: "bg-blue-100",
            iconColor: "text-blue-600",
            valueColor: "text-blue-700"
        },

        {
            title: "In Progress",
            value: inProgressCount,
            description: "Currently responding",
            icon: Activity,
            iconBg: "bg-amber-100",
            iconColor: "text-amber-600",
            valueColor: "text-amber-700"
        },

        {
            title: "Resolved",
            value: resolvedCount,
            description: "Successfully completed",
            icon: CheckCircle2,
            iconBg: "bg-emerald-100",
            iconColor: "text-emerald-600",
            valueColor: "text-emerald-700"
        },

        {
            title: "Urgent",
            value: urgentCount,
            description: "High or critical severity",
            icon: AlertTriangle,
            iconBg: "bg-rose-100",
            iconColor: "text-rose-600",
            valueColor: "text-rose-700"
        }

    ];



    return (

        <div
            className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            xl:grid-cols-4
            "
        >

            {
                stats.map(
                    (stat) => {

                        const Icon =
                            stat.icon;


                        return (

                            <div
                                key={
                                    stat.title
                                }
                                className="
                                group
                                relative
                                overflow-hidden
                                rounded-2xl
                                border
                                border-slate-100
                                bg-white
                                p-5
                                shadow-sm
                                transition-all
                                duration-200
                                hover:-translate-y-0.5
                                hover:shadow-md
                                "
                            >

                                {/* Decorative circle */}

                                <div
                                    className="
                                    pointer-events-none
                                    absolute
                                    -right-8
                                    -top-8
                                    h-24
                                    w-24
                                    rounded-full
                                    bg-slate-50
                                    transition-transform
                                    duration-300
                                    group-hover:scale-125
                                    "
                                />



                                <div
                                    className="
                                    relative
                                    flex
                                    items-start
                                    justify-between
                                    gap-3
                                    "
                                >

                                    {/* Text */}

                                    <div>

                                        <p
                                            className="
                                            text-sm
                                            font-medium
                                            text-slate-500
                                            "
                                        >

                                            {
                                                stat.title
                                            }

                                        </p>


                                        <p
                                            className={`
                                            mt-1
                                            text-2xl
                                            font-bold
                                            ${stat.valueColor}
                                            sm:text-3xl
                                            `}
                                        >

                                            {
                                                stat.value
                                            }

                                        </p>


                                        <p
                                            className="
                                            mt-1
                                            text-xs
                                            text-slate-400
                                            "
                                        >

                                            {
                                                stat.description
                                            }

                                        </p>

                                    </div>



                                    {/* Icon */}

                                    <div
                                        className={`
                                        flex
                                        h-11
                                        w-11
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-xl
                                        ${stat.iconBg}
                                        ${stat.iconColor}
                                        transition-transform
                                        duration-300
                                        group-hover:scale-105
                                        `}
                                    >

                                        <Icon
                                            size={21}
                                        />

                                    </div>

                                </div>

                            </div>

                        );

                    }
                )
            }

        </div>

    );

};


export default EmergencyStats;