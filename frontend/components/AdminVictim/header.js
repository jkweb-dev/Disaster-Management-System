"use client";

import {
    Search,
    RefreshCw,
    Users
} from "lucide-react";


const VictimsHeader = ({
    search,
    setSearch,
    onRefresh,
    loading
}) => {

    return (

        <div
            className="
            overflow-hidden
            rounded-3xl
            border
            border-gray-100
            bg-white
            shadow-sm
            "
        >

            {/* Top */}

            <div
                className="
                flex
                flex-col
                gap-5
                p-5
                sm:p-6
                lg:flex-row
                lg:items-center
                lg:justify-between
                "
            >

                <div
                    className="
                    flex
                    items-start
                    gap-4
                    "
                >

                    <div
                        className="
                        rounded-2xl
                        bg-gradient-to-br
                        from-blue-500
                        to-indigo-600
                        p-3
                        text-white
                        shadow-lg
                        shadow-blue-200
                        "
                    >

                        <Users
                            size={24}
                        />

                    </div>


                    <div>

                        <h1
                            className="
                            text-2xl
                            font-bold
                            tracking-tight
                            text-gray-900
                            sm:text-3xl
                            "
                        >

                            Victims

                        </h1>


                        <p
                            className="
                            mt-1
                            max-w-xl
                            text-sm
                            leading-6
                            text-gray-500
                            "
                        >

                            Manage registered victims and
                            review their emergency activity.

                        </p>

                    </div>

                </div>



                {/* Search + Refresh */}

                <div
                    className="
                    flex
                    w-full
                    flex-col
                    gap-3
                    sm:flex-row
                    lg:w-auto
                    "
                >

                    {/* Search */}

                    <div
                        className="
                        relative
                        w-full
                        sm:w-80
                        "
                    >

                        <Search
                            size={18}
                            className="
                            absolute
                            left-3
                            top-1/2
                            -translate-y-1/2
                            text-gray-400
                            "
                        />


                        <input

                            type="text"

                            value={search}

                            onChange={(event) =>
                                setSearch(
                                    event.target.value
                                )
                            }

                            placeholder="
                            Search victims...
                            "

                            className="
                            h-11
                            w-full
                            rounded-xl
                            border
                            border-gray-200
                            bg-gray-50
                            pl-10
                            pr-4
                            text-sm
                            text-gray-800
                            outline-none
                            transition
                            placeholder:text-gray-400
                            focus:border-blue-400
                            focus:bg-white
                            focus:ring-4
                            focus:ring-blue-50
                            "

                        />

                    </div>



                    {/* Refresh */}

                    <button

                        type="button"

                        onClick={onRefresh}

                        disabled={loading}

                        className="
                        flex
                        h-11
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        border
                        border-gray-200
                        bg-white
                        px-4
                        text-sm
                        font-semibold
                        text-gray-700
                        transition
                        hover:border-blue-200
                        hover:bg-blue-50
                        hover:text-blue-600
                        disabled:cursor-not-allowed
                        disabled:opacity-50
                        "

                    >

                        <RefreshCw
                            size={17}
                            className={
                                loading
                                    ? "animate-spin"
                                    : ""
                            }
                        />

                        <span>
                            Refresh
                        </span>

                    </button>

                </div>

            </div>



            {/* Accent line */}

            <div
                className="
                h-1
                bg-gradient-to-r
                from-blue-500
                via-indigo-500
                to-purple-500
                "
            />

        </div>

    );

};


export default VictimsHeader;