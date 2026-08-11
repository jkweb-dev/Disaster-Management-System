"use client";

import Link from "next/link";

import {
    Siren,
    ArrowLeft,
    ShieldCheck
} from "lucide-react";


const EmergencyHeader = ({
    total = 0
}) => {

    return (

        <div
            className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-slate-100
            bg-white
            p-5
            shadow-sm
            sm:p-6
            lg:p-7
            "
        >

            {/* Decorative background */}

            <div
                className="
                pointer-events-none
                absolute
                -right-16
                -top-20
                h-52
                w-52
                rounded-full
                bg-blue-100/50
                blur-3xl
                "
            />

            <div
                className="
                pointer-events-none
                absolute
                -bottom-20
                right-20
                h-40
                w-40
                rounded-full
                bg-cyan-100/40
                blur-3xl
                "
            />



            <div
                className="
                relative
                flex
                flex-col
                gap-6
                lg:flex-row
                lg:items-center
                lg:justify-between
                "
            >

                {/* Left */}

                <div
                    className="
                    min-w-0
                    "
                >

                    {/* Back */}

                    <Link
                        href="/rescue/dashboard"
                        className="
                        mb-4
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
                            size={16}
                        />

                        Back to Dashboard

                    </Link>



                    <div
                        className="
                        flex
                        items-start
                        gap-4
                        "
                    >

                        {/* Icon */}

                        <div
                            className="
                            flex
                            h-12
                            w-12
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
                            sm:h-14
                            sm:w-14
                            "
                        >

                            <Siren
                                size={25}
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

                                <h1
                                    className="
                                    text-2xl
                                    font-bold
                                    tracking-tight
                                    text-slate-800
                                    sm:text-3xl
                                    "
                                >

                                    Emergency Management

                                </h1>


                                <span
                                    className="
                                    inline-flex
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

                                    Live

                                </span>

                            </div>


                            <p
                                className="
                                mt-2
                                max-w-2xl
                                text-sm
                                leading-6
                                text-slate-500
                                sm:text-base
                                "
                            >

                                Monitor and manage emergencies assigned
                                to your rescue team.

                            </p>

                        </div>

                    </div>

                </div>



                {/* Right summary */}

                <div
                    className="
                    flex
                    w-full
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-blue-100
                    bg-blue-50/70
                    p-4
                    sm:w-fit
                    lg:min-w-[210px]
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
                        text-blue-600
                        shadow-sm
                        "
                    >

                        <ShieldCheck
                            size={20}
                        />

                    </div>


                    <div>

                        <p
                            className="
                            text-xs
                            font-medium
                            text-slate-500
                            "
                        >

                            Assigned Emergencies

                        </p>


                        <p
                            className="
                            mt-0.5
                            text-xl
                            font-bold
                            text-slate-800
                            "
                        >

                            {total}

                        </p>

                    </div>

                </div>

            </div>

        </div>

    );

};


export default EmergencyHeader;