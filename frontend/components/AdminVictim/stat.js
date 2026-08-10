"use client";

import {
    Users,
    FileText,
    UserCheck,
    Activity
} from "lucide-react";


const VictimsStats = ({
    totalVictims,
    victimsWithReports,
    totalReports
}) => {

    const stats = [

        {
            title: "Total Victims",
            value: totalVictims,
            description: "Registered accounts",
            icon: Users,
            iconBg: "bg-blue-50",
            iconColor: "text-blue-600"
        },

        {
            title: "Active Victims",
            value: victimsWithReports,
            description: "With emergency reports",
            icon: UserCheck,
            iconBg: "bg-green-50",
            iconColor: "text-green-600"
        },

        {
            title: "Emergency Reports",
            value: totalReports,
            description: "Submitted by victims",
            icon: FileText,
            iconBg: "bg-orange-50",
            iconColor: "text-orange-600"
        }

    ];


    return (

        <div
            className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            xl:grid-cols-3
            "
        >

            {
                stats.map((stat) => {

                    const Icon = stat.icon;


                    return (

                        <div
                            key={stat.title}
                            className="
                            group
                            relative
                            overflow-hidden
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
                            "
                        >

                            {/* Decorative background */}

                            <div
                                className="
                                absolute
                                -right-8
                                -top-8
                                h-24
                                w-24
                                rounded-full
                                bg-gray-50
                                transition-transform
                                duration-500
                                group-hover:scale-150
                                "
                            />



                            <div
                                className="
                                relative
                                flex
                                items-start
                                justify-between
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


                                    <p
                                        className="
                                        mt-2
                                        text-3xl
                                        font-bold
                                        tracking-tight
                                        text-gray-900
                                        "
                                    >

                                        {stat.value}

                                    </p>


                                    <div
                                        className="
                                        mt-2
                                        flex
                                        items-center
                                        gap-1.5
                                        "
                                    >

                                        <Activity
                                            size={13}
                                            className="
                                            text-gray-400
                                            "
                                        />

                                        <p
                                            className="
                                            text-xs
                                            text-gray-400
                                            "
                                        >

                                            {stat.description}

                                        </p>

                                    </div>

                                </div>



                                <div
                                    className={`
                                    rounded-2xl
                                    p-3
                                    ${stat.iconBg}
                                    ${stat.iconColor}
                                    `}
                                >

                                    <Icon
                                        size={22}
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


export default VictimsStats;