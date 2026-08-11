"use client";

import {
    ShieldCheck,
    Activity
} from "lucide-react";


const DashboardHeader = ({
    statistics
}) => {

    return (

        <section
            className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-blue-100
            bg-gradient-to-br
            from-blue-50
            via-indigo-50
            to-violet-50
            p-5
            sm:p-7
            lg:p-8
            "
        >

            {/* Decorative background */}

            <div
                className="
                pointer-events-none
                absolute
                -right-16
                -top-20
                h-48
                w-48
                rounded-full
                bg-blue-200/30
                blur-2xl
                "
            />

            <div
                className="
                pointer-events-none
                absolute
                -bottom-24
                right-20
                h-56
                w-56
                rounded-full
                bg-violet-200/30
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

                    <div
                        className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-blue-100
                        bg-white/70
                        px-3
                        py-1.5
                        shadow-sm
                        "
                    >

                        <span
                            className="
                            h-2
                            w-2
                            rounded-full
                            bg-emerald-500
                            "
                        />

                        <span
                            className="
                            text-xs
                            font-semibold
                            text-slate-600
                            "
                        >

                            Rescue operations active

                        </span>

                    </div>


                    <h1
                        className="
                        mt-4
                        text-2xl
                        font-bold
                        tracking-tight
                        text-slate-800
                        sm:text-3xl
                        lg:text-4xl
                        "
                    >

                        Emergency Response
                        Dashboard

                    </h1>


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

                        Monitor your assigned emergencies,
                        active responses, and completed
                        rescue operations from one place.

                    </p>

                </div>



                {/* Right summary */}

                <div
                    className="
                    flex
                    shrink-0
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-white/80
                    bg-white/70
                    p-3
                    shadow-sm
                    backdrop-blur
                    sm:p-4
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
                        rounded-xl
                        bg-blue-100
                        text-blue-600
                        "
                    >

                        <ShieldCheck
                            size={22}
                        />

                    </div>


                    <div>

                        <p
                            className="
                            text-xs
                            font-medium
                            text-slate-400
                            "
                        >

                            Total assigned

                        </p>


                        <p
                            className="
                            mt-0.5
                            text-xl
                            font-bold
                            text-slate-800
                            "
                        >

                            {
                                statistics.total ?? 0
                            }

                        </p>

                    </div>


                    <div
                        className="
                        ml-2
                        hidden
                        h-10
                        w-px
                        bg-slate-200
                        sm:block
                        "
                    />


                    <div
                        className="
                        hidden
                        items-center
                        gap-2
                        sm:flex
                        "
                    >

                        <Activity
                            size={17}
                            className="
                            text-emerald-500
                            "
                        />


                        <span
                            className="
                            text-xs
                            font-semibold
                            text-emerald-600
                            "
                        >

                            {
                                statistics.inProgress ?? 0
                            } active

                        </span>

                    </div>

                </div>

            </div>

        </section>

    );

};


export default DashboardHeader;