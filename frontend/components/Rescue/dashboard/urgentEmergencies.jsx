"use client";

import Link from "next/link";

import {
    AlertTriangle,
    ArrowRight,
    MapPin,
    Clock3,
    UsersRound,
    Siren
} from "lucide-react";

import EmptyState from "./empty";


const UrgentEmergencies = ({
    emergencies = []
}) => {


    const getSeverityStyle = (
        severity
    ) => {

        switch (severity) {

            case "Critical":

                return {
                    badge:
                        "bg-rose-50 text-rose-700 border-rose-100",
                    icon:
                        "bg-rose-100 text-rose-600",
                    dot:
                        "bg-rose-500"
                };


            case "High":

                return {
                    badge:
                        "bg-orange-50 text-orange-700 border-orange-100",
                    icon:
                        "bg-orange-100 text-orange-600",
                    dot:
                        "bg-orange-500"
                };


            default:

                return {
                    badge:
                        "bg-amber-50 text-amber-700 border-amber-100",
                    icon:
                        "bg-amber-100 text-amber-600",
                    dot:
                        "bg-amber-500"
                };

        }

    };



    const formatDate = (
        date
    ) => {

        if (!date) {

            return "Recently";

        }


        return new Date(
            date
        ).toLocaleDateString(
            "en-US",
            {
                month: "short",
                day: "numeric"
            }
        );

    };



    if (!emergencies.length) {

        return (

            <div
                className="
                h-full
                rounded-3xl
                border
                border-slate-100
                bg-white
                p-5
                shadow-sm
                sm:p-6
                "
            >

                <div
                    className="
                    flex
                    items-center
                    justify-between
                    "
                >

                    <div>

                        <div
                            className="
                            flex
                            items-center
                            gap-2
                            "
                        >

                            <div
                                className="
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center
                                rounded-xl
                                bg-rose-100
                                text-rose-600
                                "
                            >

                                <Siren
                                    size={18}
                                />

                            </div>


                            <h2
                                className="
                                text-lg
                                font-bold
                                text-slate-800
                                "
                            >

                                Urgent Emergencies

                            </h2>

                        </div>


                        <p
                            className="
                            mt-2
                            text-sm
                            text-slate-400
                            "
                        >

                            Critical and high-priority
                            incidents requiring attention.

                        </p>

                    </div>

                </div>


                <div
                    className="
                    mt-5
                    "
                >

                    <EmptyState
                        icon={Siren}
                        title="No urgent emergencies"
                        description="There are currently no critical or high-priority emergencies assigned to your team."
                    />

                </div>

            </div>

        );

    }



    return (

        <section
            className="
            h-full
            rounded-3xl
            border
            border-slate-100
            bg-white
            p-5
            shadow-sm
            sm:p-6
            "
        >

            {/* ================================================= */}
            {/* HEADER */}
            {/* ================================================= */}

            <div
                className="
                flex
                flex-col
                gap-4
                sm:flex-row
                sm:items-start
                sm:justify-between
                "
            >

                <div>

                    <div
                        className="
                        flex
                        items-center
                        gap-2
                        "
                    >

                        <div
                            className="
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-xl
                            bg-rose-100
                            text-rose-600
                            "
                        >

                            <Siren
                                size={18}
                            />

                        </div>


                        <h2
                            className="
                            text-lg
                            font-bold
                            text-slate-800
                            "
                        >

                            Urgent Emergencies

                        </h2>

                    </div>


                    <p
                        className="
                        mt-2
                        text-sm
                        text-slate-400
                        "
                    >

                        Critical and high-priority incidents.

                    </p>

                </div>


                <div
                    className="
                    inline-flex
                    w-fit
                    items-center
                    gap-2
                    rounded-full
                    bg-rose-50
                    px-3
                    py-1.5
                    "
                >

                    <span
                        className="
                        h-2
                        w-2
                        animate-pulse
                        rounded-full
                        bg-rose-500
                        "
                    />

                    <span
                        className="
                        text-xs
                        font-bold
                        text-rose-600
                        "
                    >

                        {emergencies.length} urgent

                    </span>

                </div>

            </div>



            {/* ================================================= */}
            {/* EMERGENCIES */}
            {/* ================================================= */}

            <div
                className="
                mt-5
                space-y-3
                "
            >

                {
                    emergencies.map(
                        (emergency) => {

                            const style =
                                getSeverityStyle(
                                    emergency.severity
                                );


                            const people =
                                emergency.peopleAffected;


                            const totalPeople =
                                people
                                    ?

                                (
                                    (people.adults || 0) +
                                    (people.children || 0) +
                                    (people.elderly || 0) +
                                    (people.disabled || 0) +
                                    (people.injured || 0)
                                )

                                    :

                                0;


                            return (

                                <Link
                                    key={
                                        emergency._id
                                    }
                                    href={
                                        `/rescue/emergencies/${emergency._id}`
                                    }
                                    className="
                                    group
                                    block
                                    rounded-2xl
                                    border
                                    border-slate-100
                                    bg-slate-50/70
                                    p-4
                                    transition-all
                                    duration-200
                                    hover:-translate-y-0.5
                                    hover:border-slate-200
                                    hover:bg-white
                                    hover:shadow-md
                                    "
                                >

                                    <div
                                        className="
                                        flex
                                        items-start
                                        gap-3
                                        "
                                    >

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
                                            ${style.icon}
                                            `}
                                        >

                                            <AlertTriangle
                                                size={20}
                                            />

                                        </div>



                                        {/* Main */}

                                        <div
                                            className="
                                            min-w-0
                                            flex-1
                                            "
                                        >

                                            <div
                                                className="
                                                flex
                                                flex-col
                                                gap-2
                                                sm:flex-row
                                                sm:items-start
                                                sm:justify-between
                                                "
                                            >

                                                <div
                                                    className="
                                                    min-w-0
                                                    "
                                                >

                                                    <h3
                                                        className="
                                                        truncate
                                                        text-sm
                                                        font-bold
                                                        text-slate-800
                                                        group-hover:text-blue-600
                                                        "
                                                    >

                                                        {
                                                            emergency.title
                                                        }

                                                    </h3>


                                                    <p
                                                        className="
                                                        mt-1
                                                        truncate
                                                        text-xs
                                                        text-slate-400
                                                        "
                                                    >

                                                        {
                                                            emergency.emergencyType
                                                        }

                                                    </p>

                                                </div>


                                                <span
                                                    className={`
                                                    inline-flex
                                                    w-fit
                                                    shrink-0
                                                    items-center
                                                    gap-1.5
                                                    rounded-full
                                                    border
                                                    px-2.5
                                                    py-1
                                                    text-[10px]
                                                    font-bold
                                                    ${style.badge}
                                                    `}
                                                >

                                                    <span
                                                        className={`
                                                        h-1.5
                                                        w-1.5
                                                        rounded-full
                                                        ${style.dot}
                                                        `}
                                                    />

                                                    {
                                                        emergency.severity
                                                    }

                                                </span>

                                            </div>



                                            {/* Meta */}

                                            <div
                                                className="
                                                mt-3
                                                flex
                                                flex-wrap
                                                items-center
                                                gap-x-4
                                                gap-y-2
                                                "
                                            >

                                                {
                                                    (
                                                        emergency.city ||
                                                        emergency.location?.city
                                                    ) && (

                                                        <span
                                                            className="
                                                            flex
                                                            min-w-0
                                                            items-center
                                                            gap-1.5
                                                            text-xs
                                                            text-slate-500
                                                            "
                                                        >

                                                            <MapPin
                                                                size={13}
                                                                className="
                                                                shrink-0
                                                                text-slate-400
                                                                "
                                                            />

                                                            <span
                                                                className="
                                                                truncate
                                                                "
                                                            >

                                                                {
                                                                    emergency.city ||
                                                                    emergency.location?.city
                                                                }

                                                            </span>

                                                        </span>

                                                    )
                                                }


                                                <span
                                                    className="
                                                    flex
                                                    items-center
                                                    gap-1.5
                                                    text-xs
                                                    text-slate-500
                                                    "
                                                >

                                                    <UsersRound
                                                        size={13}
                                                        className="
                                                        text-slate-400
                                                        "
                                                    />

                                                    {totalPeople}
                                                    {" "}
                                                    affected

                                                </span>


                                                <span
                                                    className="
                                                    flex
                                                    items-center
                                                    gap-1.5
                                                    text-xs
                                                    text-slate-500
                                                    "
                                                >

                                                    <Clock3
                                                        size={13}
                                                        className="
                                                        text-slate-400
                                                        "
                                                    />

                                                    {
                                                        formatDate(
                                                            emergency.assignedAt
                                                        )
                                                    }

                                                </span>

                                            </div>

                                        </div>



                                        {/* Arrow */}

                                        <div
                                            className="
                                            hidden
                                            shrink-0
                                            items-center
                                            self-center
                                            text-slate-300
                                            transition
                                            group-hover:translate-x-1
                                            group-hover:text-blue-500
                                            sm:flex
                                            "
                                        >

                                            <ArrowRight
                                                size={18}
                                            />

                                        </div>

                                    </div>

                                </Link>

                            );

                        }
                    )
                }

            </div>



            {/* ================================================= */}
            {/* VIEW ALL */}
            {/* ================================================= */}

            <div
                className="
                mt-5
                border-t
                border-slate-100
                pt-4
                "
            >

                <Link
                    href="/rescue/emergencies"
                    className="
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-blue-600
                    transition
                    hover:text-blue-700
                    "
                >

                    View all emergencies

                    <ArrowRight
                        size={16}
                    />

                </Link>

            </div>

        </section>

    );

};


export default UrgentEmergencies;