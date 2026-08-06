"use client";

import {
    AlertTriangle,
    CalendarDays
} from "lucide-react";

import {
    formatDistanceToNow
} from "date-fns";


const statusStyles = {

    Pending:
        "bg-yellow-100 text-yellow-700",

    Assigned:
        "bg-blue-100 text-blue-700",

    "In Progress":
        "bg-orange-100 text-orange-700",

    Resolved:
        "bg-green-100 text-green-700",

    Rejected:
        "bg-gray-100 text-gray-700"

};



const severityStyles = {

    Low:
        "bg-green-100 text-green-700",

    Medium:
        "bg-yellow-100 text-yellow-700",

    High:
        "bg-orange-100 text-orange-700",

    Critical:
        "bg-red-100 text-red-700"

};



const ReportHeader = ({
    report
}) => {


    return (

        <div
            className="
            rounded-3xl
            bg-white
            p-6
            shadow-sm
            border
            "
        >

            <div
                className="
                flex
                flex-col
                gap-5
                md:flex-row
                md:items-center
                md:justify-between
                "
            >


                <div
                    className="
                    flex
                    items-center
                    gap-4
                    "
                >

                    <div
                        className="
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-2xl
                        bg-red-100
                        text-red-600
                        "
                    >

                        <AlertTriangle
                            size={32}
                        />

                    </div>



                    <div>

                        <h1
                            className="
                            text-2xl
                            font-bold
                            text-gray-800
                            "
                        >

                            {report.title}

                        </h1>


                        <div
                            className="
                            mt-2
                            flex
                            items-center
                            gap-2
                            text-sm
                            text-gray-500
                            "
                        >

                            <CalendarDays
                                size={16}
                            />

                            {formatDistanceToNow(
                                new Date(report.createdAt),
                                {
                                    addSuffix:true
                                }
                            )}

                        </div>


                    </div>


                </div>





                <div
                    className="
                    flex
                    flex-wrap
                    gap-3
                    "
                >


                    <span
                        className={`
                        rounded-full
                        px-4
                        py-2
                        text-sm
                        font-semibold
                        ${severityStyles[report.severity]}
                        `}
                    >

                        {report.severity}

                    </span>




                    <span
                        className={`
                        rounded-full
                        px-4
                        py-2
                        text-sm
                        font-semibold
                        ${statusStyles[report.status]}
                        `}
                    >

                        {report.status}

                    </span>


                </div>


            </div>


        </div>

    );

};


export default ReportHeader;