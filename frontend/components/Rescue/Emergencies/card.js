"use client";

import Link from "next/link";

import {
    MapPin,
    User,
    CalendarDays,
    Users,
    ArrowRight,
    Siren,
    Clock3
} from "lucide-react";

import EmergencyStatusBadge from "./statusBadge";

import EmergencySeverityBadge from "./saverityBadge";


const EmergencyCard = ({
    emergency
}) => {


    const peopleAffected =
        emergency.peopleAffected || {};


    const totalPeople =

        Number(
            peopleAffected.adults || 0
        ) +

        Number(
            peopleAffected.children || 0
        ) +

        Number(
            peopleAffected.elderly || 0
        ) +

        Number(
            peopleAffected.disabled || 0
        ) +

        Number(
            peopleAffected.injured || 0
        );



    const createdDate =
        emergency.createdAt
            ? new Date(
                emergency.createdAt
            ).toLocaleDateString(
                "en-US",
                {
                    day: "numeric",
                    month: "short",
                    year: "numeric"
                }
            )
            : "N/A";



    const location =
        emergency.location || {};



    return (

        <article
            className="
            group
            relative
            overflow-hidden
            rounded-3xl
            border
            border-slate-100
            bg-white
            p-5
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-xl
            hover:shadow-slate-200/60
            sm:p-6
            "
        >

            {/* Top accent */}

            <div
                className="
                absolute
                left-0
                top-0
                h-1
                w-full
                bg-gradient-to-r
                from-blue-500
                via-indigo-500
                to-cyan-400
                "
            />



            {/* Header */}

            <div
                className="
                flex
                items-start
                justify-between
                gap-4
                "
            >

                <div
                    className="
                    flex
                    min-w-0
                    items-start
                    gap-3
                    "
                >

                    <div
                        className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        bg-blue-50
                        text-blue-600
                        transition
                        group-hover:bg-blue-600
                        group-hover:text-white
                        "
                    >

                        <Siren
                            size={21}
                        />

                    </div>


                    <div
                        className="
                        min-w-0
                        "
                    >

                        <h3
                            className="
                            truncate
                            text-base
                            font-bold
                            text-slate-800
                            sm:text-lg
                            "
                        >

                            {
                                emergency.title ||
                                "Emergency Report"
                            }

                        </h3>


                        <p
                            className="
                            mt-0.5
                            text-xs
                            text-slate-400
                            "
                        >

                            {
                                emergency.emergencyType ||
                                "Emergency"
                            }

                        </p>

                    </div>

                </div>



                {/* Status */}

                <EmergencyStatusBadge
                    status={
                        emergency.status
                    }
                />

            </div>



            {/* Severity */}

            <div
                className="
                mt-5
                flex
                flex-wrap
                items-center
                gap-2
                "
            >

                <EmergencySeverityBadge
                    severity={
                        emergency.severity
                    }
                />


                <span
                    className="
                    rounded-full
                    bg-slate-50
                    px-3
                    py-1
                    text-[10px]
                    font-semibold
                    text-slate-500
                    "
                >

                    {
                        emergency.emergencyType ||
                        "General Emergency"
                    }

                </span>

            </div>



            {/* Description */}

            <p
                className="
                mt-4
                line-clamp-2
                text-sm
                leading-6
                text-slate-500
                "
            >

                {
                    emergency.description ||
                    "No emergency description provided."
                }

            </p>



            {/* Information */}

            <div
                className="
                mt-5
                grid
                grid-cols-1
                gap-3
                sm:grid-cols-2
                "
            >

                {/* Victim */}

                <div
                    className="
                    flex
                    min-w-0
                    items-center
                    gap-3
                    rounded-2xl
                    bg-slate-50
                    p-3
                    "
                >

                    <div
                        className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-white
                        text-slate-500
                        shadow-sm
                        "
                    >

                        <User
                            size={17}
                        />

                    </div>


                    <div
                        className="
                        min-w-0
                        "
                    >

                        <p
                            className="
                            text-[10px]
                            font-medium
                            text-slate-400
                            "
                        >

                            Victim

                        </p>


                        <p
                            className="
                            truncate
                            text-sm
                            font-semibold
                            text-slate-700
                            "
                        >

                            {
                                emergency.name ||
                                emergency.victim?.name ||
                                "Unknown"
                            }

                        </p>

                    </div>

                </div>



                {/* Location */}

                <div
                    className="
                    flex
                    min-w-0
                    items-center
                    gap-3
                    rounded-2xl
                    bg-slate-50
                    p-3
                    "
                >

                    <div
                        className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-white
                        text-rose-500
                        shadow-sm
                        "
                    >

                        <MapPin
                            size={17}
                        />

                    </div>


                    <div
                        className="
                        min-w-0
                        "
                    >

                        <p
                            className="
                            text-[10px]
                            font-medium
                            text-slate-400
                            "
                        >

                            Location

                        </p>


                        <p
                            className="
                            truncate
                            text-sm
                            font-semibold
                            text-slate-700
                            "
                        >

                            {
                                location.city ||
                                location.address ||
                                "Location unavailable"
                            }

                        </p>

                    </div>

                </div>



                {/* People */}

                <div
                    className="
                    flex
                    min-w-0
                    items-center
                    gap-3
                    rounded-2xl
                    bg-slate-50
                    p-3
                    "
                >

                    <div
                        className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-white
                        text-violet-500
                        shadow-sm
                        "
                    >

                        <Users
                            size={17}
                        />

                    </div>


                    <div>

                        <p
                            className="
                            text-[10px]
                            font-medium
                            text-slate-400
                            "
                        >

                            People Affected

                        </p>


                        <p
                            className="
                            text-sm
                            font-semibold
                            text-slate-700
                            "
                        >

                            {totalPeople}

                        </p>

                    </div>

                </div>



                {/* Date */}

                <div
                    className="
                    flex
                    min-w-0
                    items-center
                    gap-3
                    rounded-2xl
                    bg-slate-50
                    p-3
                    "
                >

                    <div
                        className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-white
                        text-amber-500
                        shadow-sm
                        "
                    >

                        <CalendarDays
                            size={17}
                        />

                    </div>


                    <div>

                        <p
                            className="
                            text-[10px]
                            font-medium
                            text-slate-400
                            "
                        >

                            Reported

                        </p>


                        <p
                            className="
                            text-sm
                            font-semibold
                            text-slate-700
                            "
                        >

                            {createdDate}

                        </p>

                    </div>

                </div>

            </div>



            {/* Footer */}

            <div
                className="
                mt-5
                flex
                flex-col
                gap-3
                border-t
                border-slate-100
                pt-4
                sm:flex-row
                sm:items-center
                sm:justify-between
                "
            >

                <div
                    className="
                    flex
                    items-center
                    gap-2
                    text-xs
                    text-slate-400
                    "
                >

                    <Clock3
                        size={14}
                    />

                    <span>
                        Emergency ID:
                    </span>

                    <span
                        className="
                        max-w-[120px]
                        truncate
                        font-medium
                        text-slate-500
                        "
                    >

                        {
                            emergency._id
                        }

                    </span>

                </div>



                <Link
                    href={
                        `/rescue/emergencies/${emergency._id}`
                    }
                    className="
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-slate-900
                    px-4
                    py-2.5
                    text-sm
                    font-semibold
                    text-white
                    transition
                    hover:bg-blue-600
                    sm:w-auto
                    "
                >

                    View Details

                    <ArrowRight
                        size={16}
                        className="
                        transition-transform
                        group-hover:translate-x-0.5
                        "
                    />

                </Link>

            </div>

        </article>

    );

};


export default EmergencyCard;