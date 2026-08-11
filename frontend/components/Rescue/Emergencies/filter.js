"use client";

import {
    Search,
    SlidersHorizontal,
    X
} from "lucide-react";


const EmergencyFilters = ({
    search,
    setSearch,
    statusFilter,
    setStatusFilter,
    severityFilter,
    setSeverityFilter,
    totalResults = 0
}) => {


    const clearFilters = () => {

        setSearch("");
        setStatusFilter("All");
        setSeverityFilter("All");

    };



    const hasFilters =
        search.trim() !== "" ||
        statusFilter !== "All" ||
        severityFilter !== "All";



    return (

        <section
            className="
            rounded-3xl
            border
            border-slate-100
            bg-white
            p-4
            shadow-sm
            sm:p-5
            "
        >

            {/* Top */}

            <div
                className="
                flex
                flex-col
                gap-4
                xl:flex-row
                xl:items-center
                xl:justify-between
                "
            >

                {/* Search */}

                <div
                    className="
                    relative
                    w-full
                    xl:max-w-md
                    "
                >

                    <Search
                        size={18}
                        className="
                        pointer-events-none
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-slate-400
                        "
                    />


                    <input
                        type="text"
                        value={search}
                        onChange={(e) =>
                            setSearch(
                                e.target.value
                            )
                        }
                        placeholder="Search emergencies..."
                        className="
                        h-11
                        w-full
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50
                        pl-11
                        pr-4
                        text-sm
                        text-slate-700
                        outline-none
                        transition
                        placeholder:text-slate-400
                        focus:border-blue-400
                        focus:bg-white
                        focus:ring-4
                        focus:ring-blue-50
                        "
                    />

                </div>



                {/* Filters */}

                <div
                    className="
                    flex
                    flex-col
                    gap-3
                    sm:flex-row
                    sm:flex-wrap
                    "
                >

                    {/* Status */}

                    <div
                        className="
                        relative
                        min-w-0
                        sm:min-w-[155px]
                        "
                    >

                        <select
                            value={statusFilter}
                            onChange={(e) =>
                                setStatusFilter(
                                    e.target.value
                                )
                            }
                            className="
                            h-11
                            w-full
                            appearance-none
                            rounded-xl
                            border
                            border-slate-200
                            bg-slate-50
                            px-4
                            pr-9
                            text-sm
                            font-medium
                            text-slate-600
                            outline-none
                            transition
                            focus:border-blue-400
                            focus:bg-white
                            focus:ring-4
                            focus:ring-blue-50
                            "
                        >

                            <option value="All">
                                All Statuses
                            </option>

                            <option value="Assigned">
                                Assigned
                            </option>

                            <option value="In Progress">
                                In Progress
                            </option>

                            <option value="Resolved">
                                Resolved
                            </option>

                        </select>


                        <SlidersHorizontal
                            size={15}
                            className="
                            pointer-events-none
                            absolute
                            right-3
                            top-1/2
                            -translate-y-1/2
                            rotate-90
                            text-slate-400
                            "
                        />

                    </div>



                    {/* Severity */}

                    <div
                        className="
                        relative
                        min-w-0
                        sm:min-w-[155px]
                        "
                    >

                        <select
                            value={severityFilter}
                            onChange={(e) =>
                                setSeverityFilter(
                                    e.target.value
                                )
                            }
                            className="
                            h-11
                            w-full
                            appearance-none
                            rounded-xl
                            border
                            border-slate-200
                            bg-slate-50
                            px-4
                            pr-9
                            text-sm
                            font-medium
                            text-slate-600
                            outline-none
                            transition
                            focus:border-blue-400
                            focus:bg-white
                            focus:ring-4
                            focus:ring-blue-50
                            "
                        >

                            <option value="All">
                                All Severities
                            </option>

                            <option value="Critical">
                                Critical
                            </option>

                            <option value="High">
                                High
                            </option>

                            <option value="Medium">
                                Medium
                            </option>

                            <option value="Low">
                                Low
                            </option>

                        </select>


                        <SlidersHorizontal
                            size={15}
                            className="
                            pointer-events-none
                            absolute
                            right-3
                            top-1/2
                            -translate-y-1/2
                            rotate-90
                            text-slate-400
                            "
                        />

                    </div>



                    {/* Clear */}

                    {
                        hasFilters && (

                            <button
                                type="button"
                                onClick={
                                    clearFilters
                                }
                                className="
                                inline-flex
                                h-11
                                items-center
                                justify-center
                                gap-2
                                rounded-xl
                                border
                                border-slate-200
                                bg-white
                                px-4
                                text-sm
                                font-semibold
                                text-slate-500
                                transition
                                hover:border-rose-200
                                hover:bg-rose-50
                                hover:text-rose-600
                                "
                            >

                                <X
                                    size={16}
                                />

                                Clear

                            </button>

                        )
                    }

                </div>

            </div>



            {/* Bottom summary */}

            <div
                className="
                mt-4
                flex
                flex-wrap
                items-center
                justify-between
                gap-2
                border-t
                border-slate-100
                pt-4
                "
            >

                <p
                    className="
                    text-xs
                    text-slate-400
                    "
                >

                    Showing{" "}

                    <span
                        className="
                        font-semibold
                        text-slate-600
                        "
                    >

                        {totalResults}

                    </span>

                    {" "}emergenc
                    {totalResults === 1
                        ? "y"
                        : "ies"
                    }

                </p>


                {
                    hasFilters && (

                        <span
                            className="
                            rounded-full
                            bg-blue-50
                            px-3
                            py-1
                            text-[10px]
                            font-semibold
                            text-blue-600
                            "
                        >

                            Filters active

                        </span>

                    )
                }

            </div>

        </section>

    );

};


export default EmergencyFilters;