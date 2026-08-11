"use client";

import Link from "next/link";

import {
    ArrowLeft,
    Siren,
    CalendarDays,
    Hash
} from "lucide-react";

import EmergencyStatusCard from "./statusCard";
import SeverityBadge from "./saverityBadge";


const EmergencyDetailsHeader = ({
    emergency
}) => {

    const createdDate =
        emergency?.createdAt
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


    return (

        <section
            className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-slate-100
            bg-white
            shadow-sm
            "
        >

            {/* Decorative background */}

            <div
                className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-64
                w-64
                rounded-full
                bg-blue-100/50
                blur-3xl
                "
            />

            <div
                className="
                pointer-events-none
                absolute
                -bottom-24
                left-1/3
                h-48
                w-48
                rounded-full
                bg-cyan-100/40
                blur-3xl
                "
            />


            {/* Main content */}

            <div
                className="
                relative
                p-5
                sm:p-6
                lg:p-8
                "
            >

                {/* Back */}

                <Link
                    href="/rescue/emergencies"
                    className="
                    mb-6
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-medium
                    text-slate-400
                    transition
                    hover:text-blue-600
                    "
                >

                    <ArrowLeft
                        size={17}
                    />

                    Back to Emergencies

                </Link>



                <div
                    className="
                    flex
                    flex-col
                    gap-6
                    lg:flex-row
                    lg:items-start
                    lg:justify-between
                    "
                >

                    {/* Left */}

                    <div
                        className="
                        flex
                        min-w-0
                        items-start
                        gap-4
                        "
                    >

                        {/* Icon */}

                        <div
                            className="
                            flex
                            h-14
                            w-14
                            shrink-0
                            items-center
                            justify-center
                            rounded-2xl
                            bg-gradient-to-br
                            from-blue-500
                            to-indigo-600
                            text-white
                            shadow-lg
                            shadow-blue-200
                            sm:h-16
                            sm:w-16
                            "
                        >

                            <Siren
                                size={27}
                            />

                        </div>



                        <div
                            className="
                            min-w-0
                            "
                        >

                            <div
                                className="
                                flex
                                flex-wrap
                                items-center
                                gap-2
                                "
                            >

                                <span
                                    className="
                                    rounded-full
                                    bg-blue-50
                                    px-2.5
                                    py-1
                                    text-[10px]
                                    font-bold
                                    uppercase
                                    tracking-wide
                                    text-blue-600
                                    "
                                >

                                    Emergency Report

                                </span>


                                <EmergencyStatusCard
                                    status={
                                        emergency?.status
                                    }
                                />

                            </div>


                            <h1
                                className="
                                mt-3
                                break-words
                                text-2xl
                                font-bold
                                tracking-tight
                                text-slate-800
                                sm:text-3xl
                                lg:text-4xl
                                "
                            >

                                {
                                    emergency?.title ||
                                    "Emergency Details"
                                }

                            </h1>


                            <p
                                className="
                                mt-2
                                text-sm
                                text-slate-500
                                sm:text-base
                                "
                            >

                                {
                                    emergency?.emergencyType ||
                                    "Emergency"
                                }

                            </p>


                            {/* Badges */}

                            <div
                                className="
                                mt-4
                                flex
                                flex-wrap
                                items-center
                                gap-2
                                "
                            >

                                <SeverityBadge
                                    severity={
                                        emergency?.severity
                                    }
                                />


                                <span
                                    className="
                                    inline-flex
                                    items-center
                                    gap-1.5
                                    rounded-full
                                    border
                                    border-slate-200
                                    bg-slate-50
                                    px-2.5
                                    py-1
                                    text-[10px]
                                    font-semibold
                                    text-slate-500
                                    "
                                >

                                    <Hash
                                        size={11}
                                    />

                                    {
                                        emergency?._id ||
                                        "N/A"
                                    }

                                </span>

                            </div>

                        </div>

                    </div>



                    {/* Right metadata */}

                    <div
                        className="
                        grid
                        grid-cols-1
                        gap-3
                        sm:grid-cols-2
                        lg:w-[330px]
                        lg:grid-cols-1
                        "
                    >

                        <div
                            className="
                            flex
                            items-center
                            gap-3
                            rounded-2xl
                            border
                            border-slate-100
                            bg-slate-50
                            p-4
                            "
                        >

                            <div
                                className="
                                flex
                                h-10
                                w-10
                                shrink-0
                                items-center
                                justify-center
                                rounded-xl
                                bg-white
                                text-blue-500
                                shadow-sm
                                "
                            >

                                <CalendarDays
                                    size={18}
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

                                    Reported On

                                </p>


                                <p
                                    className="
                                    mt-0.5
                                    text-sm
                                    font-semibold
                                    text-slate-700
                                    "
                                >

                                    {createdDate}

                                </p>

                            </div>

                        </div>



                        <div
                            className="
                            rounded-2xl
                            border
                            border-blue-100
                            bg-blue-50/70
                            p-4
                            "
                        >

                            <p
                                className="
                                text-[10px]
                                font-semibold
                                uppercase
                                tracking-wider
                                text-blue-500
                                "
                            >

                                Response Status

                            </p>


                            <p
                                className="
                                mt-1
                                text-sm
                                font-semibold
                                text-slate-700
                                "
                            >

                                Rescue team assigned

                            </p>


                            <p
                                className="
                                mt-1
                                text-xs
                                leading-5
                                text-slate-400
                                "
                            >

                                Review the emergency information
                                and take the appropriate response action.

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

};


export default EmergencyDetailsHeader;