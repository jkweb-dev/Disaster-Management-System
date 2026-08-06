"use client";

import {
    FileText,
    Clock3,
    Activity,
    CheckCircle2
} from "lucide-react";

const ReportsStats = ({ stats }) => {

    const total = stats.total;

    const pending = stats.pending
        
    const inProgress = stats.inProgress
       
    const resolved = stats.resolved

    const stat = [

        {
            title: "Total Reports",
            value: total,
            icon: FileText,
            bg: "bg-blue-100",
            color: "text-blue-600"
        },

        {
            title: "Pending",
            value: pending,
            icon: Clock3,
            bg: "bg-yellow-100",
            color: "text-yellow-600"
        },

        {
            title: "In Progress",
            value: inProgress,
            icon: Activity,
            bg: "bg-orange-100",
            color: "text-orange-600"
        },

        {
            title: "Resolved",
            value: resolved,
            icon: CheckCircle2,
            bg: "bg-green-100",
            color: "text-green-600"
        }

    ];

    return (

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

            {stat.map((item) => {

                const Icon = item.icon;

                return (

                    <div
                        key={item.title}
                        className="rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-sm text-gray-500">
                                    {item.title}
                                </p>

                                <h2 className="mt-2 text-3xl font-bold text-gray-800">
                                    {item.value}
                                </h2>

                            </div>

                            <div className={`rounded-2xl p-4 ${item.bg}`}>

                                <Icon
                                    className={item.color}
                                    size={28}
                                />

                            </div>

                        </div>

                    </div>

                );

            })}

        </div>

    );

};

export default ReportsStats;