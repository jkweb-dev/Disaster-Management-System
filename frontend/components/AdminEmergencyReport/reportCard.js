"use client";

import {
    AlertTriangle,
    MapPin,
    User,
    Clock3,
    Users,
    ShieldCheck,
    ArrowRight
} from "lucide-react";



const severityStyles = {

    Critical: {
        badge: "bg-red-100 text-red-700",
        dot: "bg-red-500",
        border: "border-red-100"
    },

    High: {
        badge: "bg-orange-100 text-orange-700",
        dot: "bg-orange-500",
        border: "border-orange-100"
    },

    Medium: {
        badge: "bg-yellow-100 text-yellow-700",
        dot: "bg-yellow-500",
        border: "border-yellow-100"
    },

    Low: {
        badge: "bg-green-100 text-green-700",
        dot: "bg-green-500",
        border: "border-green-100"
    }

};



const statusStyles = {

    Pending:
        "bg-orange-50 text-orange-700",

    Assigned:
        "bg-blue-50 text-blue-700",

    "In Progress":
        "bg-indigo-50 text-indigo-700",

    Resolved:
        "bg-green-50 text-green-700",

    Rejected:
        "bg-red-50 text-red-700"

};



const EmergencyReportCard = ({
    report,
    onView
}) => {


    const severity =
        severityStyles[report.severity]
        || severityStyles.Medium;


    const statusStyle =
        statusStyles[report.status]
        || "bg-gray-100 text-gray-700";



    const peopleAffected =
        report.peopleAffected || {};



    const totalPeople =

        (peopleAffected.adults || 0) +

        (peopleAffected.children || 0) +

        (peopleAffected.elderly || 0) +

        (peopleAffected.disabled || 0) +

        (peopleAffected.injured || 0);



    const formattedDate = report.createdAt

        ? new Date(
            report.createdAt
        ).toLocaleString(
            undefined,
            {
                dateStyle: "medium",
                timeStyle: "short"
            }
        )

        : "Unknown time";



    return (

        <div
            className={`
            group
            overflow-hidden
            rounded-3xl
            border
            bg-white
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-xl
            ${severity.border}
            `}
        >

            {/* Top severity line */}

            <div
                className={`
                h-1.5
                w-full
                ${severity.dot}
                `}
            />



            <div className="p-5 sm:p-6">

                {/* Header */}

                <div
                    className="
                    flex
                    items-start
                    justify-between
                    gap-4
                    "
                >

                    <div className="min-w-0">

                        <div
                            className="
                            flex
                            items-center
                            gap-2
                            "
                        >

                            <span
                                className={`
                                h-2.5
                                w-2.5
                                shrink-0
                                rounded-full
                                ${severity.dot}
                                `}
                            />


                            <span
                                className={`
                                rounded-full
                                px-3
                                py-1
                                text-xs
                                font-bold
                                ${severity.badge}
                                `}
                            >

                                {report.severity}

                            </span>

                        </div>


                        <h3
                            className="
                            mt-3
                            line-clamp-2
                            text-lg
                            font-bold
                            text-gray-800
                            "
                        >

                            {report.title}

                        </h3>


                        <p
                            className="
                            mt-1
                            text-sm
                            font-medium
                            text-gray-500
                            "
                        >

                            {report.emergencyType}

                        </p>

                    </div>



                    <div
                        className="
                        shrink-0
                        rounded-xl
                        bg-gray-50
                        p-2
                        text-gray-500
                        "
                    >

                        <AlertTriangle
                            size={20}
                        />

                    </div>

                </div>





                {/* Description */}

                <p
                    className="
                    mt-4
                    line-clamp-2
                    text-sm
                    leading-6
                    text-gray-500
                    "
                >

                    {report.description}

                </p>





                {/* Victim */}

                <div
                    className="
                    mt-5
                    rounded-2xl
                    bg-gray-50
                    p-4
                    "
                >

                    <div
                        className="
                        flex
                        items-center
                        gap-3
                        "
                    >

                        <div
                            className="
                            rounded-xl
                            bg-white
                            p-2
                            text-gray-500
                            shadow-sm
                            "
                        >

                            <User size={18}/>

                        </div>


                        <div className="min-w-0">

                            <p
                                className="
                                text-xs
                                text-gray-400
                                "
                            >

                                Reported By

                            </p>


                            <p
                                className="
                                truncate
                                text-sm
                                font-semibold
                                text-gray-700
                                "
                            >

                                {report.name}

                            </p>

                        </div>

                    </div>

                </div>





                {/* Information */}

                <div
                    className="
                    mt-5
                    space-y-3
                    "
                >

                    <div
                        className="
                        flex
                        items-center
                        gap-3
                        text-sm
                        text-gray-600
                        "
                    >

                        <MapPin
                            size={18}
                            className="shrink-0 text-gray-400"
                        />

                        <span className="truncate">

                            {report.location?.city
                                || report.location?.address
                                || "Location unavailable"
                            }

                        </span>

                    </div>



                    <div
                        className="
                        flex
                        items-center
                        gap-3
                        text-sm
                        text-gray-600
                        "
                    >

                        <Clock3
                            size={18}
                            className="shrink-0 text-gray-400"
                        />

                        <span>

                            {formattedDate}

                        </span>

                    </div>



                    <div
                        className="
                        flex
                        items-center
                        gap-3
                        text-sm
                        text-gray-600
                        "
                    >

                        <Users
                            size={18}
                            className="shrink-0 text-gray-400"
                        />

                        <span>

                            {totalPeople} people affected

                        </span>

                    </div>

                </div>





                {/* Bottom */}

                <div
                    className="
                    mt-6
                    flex
                    items-center
                    justify-between
                    gap-3
                    border-t
                    border-gray-100
                    pt-5
                    "
                >

                    <span
                        className={`
                        rounded-full
                        px-3
                        py-1.5
                        text-xs
                        font-semibold
                        ${statusStyle}
                        `}
                    >

                        {report.status}

                    </span>



                    {
                        report.assignedRescue

                        &&

                        (

                            <div
                                className="
                                flex
                                items-center
                                gap-1.5
                                text-xs
                                font-medium
                                text-green-600
                                "
                            >

                                <ShieldCheck
                                    size={15}
                                />

                                Rescue Assigned

                            </div>

                        )
                    }

                </div>





                {/* View button */}

                <button

                    type="button"

                    onClick={() =>
                        onView(report)
                    }

                    className="
                    mt-4
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-2xl
                    bg-gray-900
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    transition
                    hover:bg-orange-600
                    "

                >

                    View Emergency

                    <ArrowRight
                        size={17}
                    />

                </button>

            </div>

        </div>

    );

};


export default EmergencyReportCard;