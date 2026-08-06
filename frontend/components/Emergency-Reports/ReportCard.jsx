"use client";

import Link from "next/link";

import {

    MapPin,

    Calendar,

    Eye,

    Images,

    TriangleAlert

} from "lucide-react";

import { formatDistanceToNow } from "date-fns";



const severityColors = {

    Low: "bg-green-100 text-green-700",

    Medium: "bg-yellow-100 text-yellow-700",

    High: "bg-orange-100 text-orange-700",

    Critical: "bg-red-100 text-red-700"

};



const statusColors = {

    Pending: "bg-yellow-100 text-yellow-700",

    Assigned: "bg-blue-100 text-blue-700",

    "In Progress": "bg-orange-100 text-orange-700",

    Resolved: "bg-green-100 text-green-700",

    Rejected: "bg-gray-200 text-gray-700"

};



const ReportCard = ({ report }) => {

    return (

        <div
            className="
                rounded-2xl
                border
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
            "
        >

            <div className="flex items-start justify-between">

                <div className="flex gap-4">

                    <div
                        className="
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-2xl
                            bg-red-100
                            text-red-600
                        "
                    >

                        <TriangleAlert size={28} />

                    </div>

                    <div>

                        <h2 className="text-xl font-bold text-gray-800">

                            {report.title}

                        </h2>

                        <p className="mt-1 text-gray-500">

                            {report.emergencyType}

                        </p>

                    </div>

                </div>

                <span
                    className={`
                        rounded-full
                        px-3
                        py-1
                        text-sm
                        font-medium
                        ${severityColors[report.severity]}
                    `}
                >

                    {report.severity}

                </span>

            </div>

            

            <div className="mt-6 flex flex-wrap gap-3">

                <span
                    className={`
                        rounded-full
                        px-3
                        py-1
                        text-sm
                        ${statusColors[report.status]}
                    `}
                >

                    {report.status}

                </span>

            </div>

            <div className="mt-6 space-y-3 text-gray-600">

                <div className="flex items-center gap-2">

                    <MapPin size={18} />

                    <span>

                        {report.location?.city || "Unknown"}

                    </span>

                </div>

                <div className="flex items-center gap-2">

                    <Images size={18} />

                    <span>

                        {report.images.length} image(s)

                    </span>

                </div>

                <div className="flex items-center gap-2">

                    <Calendar size={18} />

                    <span>

                        {formatDistanceToNow(
                            new Date(report.createdAt),
                            {
                                addSuffix: true
                            }
                        )}

                    </span>

                </div>

            </div>

            <div className="mt-8">

                <Link
                    href={`/victim/my-reports/${report._id}`}
                    className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        bg-blue-600
                        px-5
                        py-3
                        font-medium
                        text-white
                        transition
                        hover:bg-blue-700
                    "
                >

                    <Eye size={18} />

                    View Details

                </Link>

            </div>

        </div>

    );

};

export default ReportCard;