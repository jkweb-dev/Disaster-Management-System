"use client";

import {
    AlertTriangle,
    RefreshCcw,
    ShieldAlert
} from "lucide-react";


const EmergencyReportsHeader = ({
    onRefresh,
    loading = false
}) => {

    return (

        <div
            className="
            overflow-hidden
            rounded-3xl
            bg-gradient-to-r
            from-red-600
            via-orange-600
            to-amber-500
            p-6
            text-white
            shadow-xl
            sm:p-8
            "
        >

            <div
                className="
                flex
                flex-col
                gap-6
                lg:flex-row
                lg:items-center
                lg:justify-between
                "
            >

                {/* Left Content */}

                <div>

                    <div
                        className="
                        flex
                        items-center
                        gap-3
                        "
                    >

                        <div
                            className="
                            rounded-2xl
                            bg-white/20
                            p-3
                            backdrop-blur-md
                            "
                        >

                            <AlertTriangle
                                size={28}
                            />

                        </div>


                        <h1
                            className="
                            text-2xl
                            font-bold
                            sm:text-3xl
                            "
                        >

                            Emergency Reports

                        </h1>

                    </div>


                    <p
                        className="
                        mt-4
                        max-w-2xl
                        text-sm
                        leading-6
                        text-orange-50
                        sm:text-base
                        "
                    >

                        Monitor, review and coordinate
                        emergency reports submitted by
                        victims across the response network.

                    </p>


                    <div
                        className="
                        mt-5
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        bg-white/20
                        px-4
                        py-2
                        backdrop-blur-md
                        "
                    >

                        <ShieldAlert
                            size={17}
                        />

                        <span
                            className="
                            text-xs
                            font-semibold
                            sm:text-sm
                            "
                        >

                            Emergency Response Center

                        </span>

                    </div>

                </div>


                {/* Refresh Button */}

                <button

                    onClick={onRefresh}

                    disabled={loading}

                    className="
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-2xl
                    bg-white
                    px-5
                    py-3
                    font-semibold
                    text-orange-600
                    shadow-md
                    transition
                    hover:bg-orange-50
                    disabled:cursor-not-allowed
                    disabled:opacity-70
                    sm:w-auto
                    "

                >

                    <RefreshCcw
                        size={18}
                        className={
                            loading
                                ? "animate-spin"
                                : ""
                        }
                    />

                    {loading
                        ? "Refreshing..."
                        : "Refresh"
                    }

                </button>

            </div>

        </div>

    );

};


export default EmergencyReportsHeader;