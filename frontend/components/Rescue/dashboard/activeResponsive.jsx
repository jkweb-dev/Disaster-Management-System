"use client";

import Link from "next/link";

import {
    Activity,
    ArrowRight,
    MapPin,
    Clock3,
    UsersRound,
    Navigation
} from "lucide-react";

import EmptyState from "./empty";


const ActiveResponses = ({
    emergencies = []
}) => {


    const getElapsedTime = (date) => {

        if (!date) {
            return "Recently started";
        }

        const start =
            new Date(date).getTime();

        const now =
            Date.now();

        const difference =
            Math.max(0, now - start);

        const minutes =
            Math.floor(
                difference / 60000
            );

        if (minutes < 1) {
            return "Just started";
        }

        if (minutes < 60) {
            return `${minutes} min ago`;
        }

        const hours =
            Math.floor(minutes / 60);

        if (hours < 24) {
            return `${hours} hr ago`;
        }

        const days =
            Math.floor(hours / 24);

        return `${days} day${days > 1 ? "s" : ""} ago`;

    };



    const getSeverityStyle = (
        severity
    ) => {

        switch (severity) {

            case "Critical":

                return {
                    badge:
                        "bg-rose-50 text-rose-700 border-rose-100"
                };


            case "High":

                return {
                    badge:
                        "bg-orange-50 text-orange-700 border-orange-100"
                };


            default:

                return {
                    badge:
                        "bg-amber-50 text-amber-700 border-amber-100"
                };

        }

    };



    if (!emergencies.length) {

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

                <div
                    className="
                    flex
                    items-center
                    gap-3
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
                        bg-emerald-100
                        text-emerald-600
                        "
                    >

                        <Activity
                            size={18}
                        />

                    </div>


                    <div>

                        <h2
                            className="
                            text-lg
                            font-bold
                            text-slate-800
                            "
                        >

                            Active Responses

                        </h2>


                        <p
                            className="
                            mt-1
                            text-xs
                            text-slate-400
                            "
                        >

                            Currently being handled

                        </p>

                    </div>

                </div>


                <div
                    className="
                    mt-5
                    "
                >

                    <EmptyState
                        icon={Activity}
                        title="No active responses"
                        description="Your team is not currently handling an emergency."
                    />

                </div>

            </section>

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

            {/* Header */}

            <div
                className="
                flex
                items-start
                justify-between
                gap-3
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
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-xl
                        bg-emerald-100
                        text-emerald-600
                        "
                    >

                        <Activity
                            size={18}
                        />

                    </div>


                    <div>

                        <h2
                            className="
                            text-lg
                            font-bold
                            text-slate-800
                            "
                        >

                            Active Responses

                        </h2>


                        <p
                            className="
                            mt-1
                            text-xs
                            text-slate-400
                            "
                        >

                            Currently being handled

                        </p>

                    </div>

                </div>


                <span
                    className="
                    inline-flex
                    shrink-0
                    items-center
                    gap-1.5
                    rounded-full
                    bg-emerald-50
                    px-2.5
                    py-1
                    text-[10px]
                    font-bold
                    text-emerald-600
                    "
                >

                    <span
                        className="
                        h-1.5
                        w-1.5
                        animate-pulse
                        rounded-full
                        bg-emerald-500
                        "
                    />

                    {emergencies.length} active

                </span>

            </div>



            {/* Active responses */}

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
                                    hover:border-emerald-100
                                    hover:bg-emerald-50/30
                                    "
                                >

                                    {/* Title */}

                                    <div
                                        className="
                                        flex
                                        items-start
                                        justify-between
                                        gap-3
                                        "
                                    >

                                        <h3
                                            className="
                                            min-w-0
                                            truncate
                                            text-sm
                                            font-bold
                                            text-slate-800
                                            group-hover:text-emerald-600
                                            "
                                        >

                                            {
                                                emergency.title
                                            }

                                        </h3>


                                        <span
                                            className={`
                                            shrink-0
                                            rounded-full
                                            border
                                            px-2
                                            py-1
                                            text-[9px]
                                            font-bold
                                            ${style.badge}
                                            `}
                                        >

                                            {
                                                emergency.severity
                                            }

                                        </span>

                                    </div>



                                    {/* Type */}

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



                                    {/* Meta */}

                                    <div
                                        className="
                                        mt-3
                                        space-y-2
                                        "
                                    >

                                        {
                                            (
                                                emergency.city ||
                                                emergency.location?.city
                                            ) && (

                                                <div
                                                    className="
                                                    flex
                                                    items-center
                                                    gap-2
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

                                                </div>

                                            )
                                        }


                                        <div
                                            className="
                                            flex
                                            items-center
                                            justify-between
                                            gap-2
                                            "
                                        >

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
                                                text-[10px]
                                                font-medium
                                                text-slate-400
                                                "
                                            >

                                                <Clock3
                                                    size={12}
                                                />

                                                {
                                                    getElapsedTime(
                                                        emergency.assignedAt
                                                    )
                                                }

                                            </span>

                                        </div>

                                    </div>



                                    {/* Progress */}

                                    <div
                                        className="
                                        mt-4
                                        "
                                    >

                                        <div
                                            className="
                                            flex
                                            items-center
                                            justify-between
                                            text-[10px]
                                            "
                                        >

                                            <span
                                                className="
                                                font-semibold
                                                text-emerald-600
                                                "
                                            >

                                                Response in progress

                                            </span>


                                            <Navigation
                                                size={12}
                                                className="
                                                text-emerald-500
                                                "
                                            />

                                        </div>


                                        <div
                                            className="
                                            mt-2
                                            h-1.5
                                            overflow-hidden
                                            rounded-full
                                            bg-slate-100
                                            "
                                        >

                                            <div
                                                className="
                                                h-full
                                                w-2/3
                                                animate-pulse
                                                rounded-full
                                                bg-gradient-to-r
                                                from-emerald-400
                                                to-teal-500
                                                "
                                            />

                                        </div>

                                    </div>

                                </Link>

                            );

                        }
                    )
                }

            </div>



            {/* Footer */}

            <div
                className="
                mt-5
                border-t
                border-slate-100
                pt-4
                "
            >

                <Link
                    href="/rescue/emergencies?status=In%20Progress"
                    className="
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-emerald-600
                    transition
                    hover:text-emerald-700
                    "
                >

                    View active responses

                    <ArrowRight
                        size={16}
                    />

                </Link>

            </div>

        </section>

    );

};


export default ActiveResponses;