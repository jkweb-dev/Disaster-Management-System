"use client";

import {
    Search,
    Filter,
    RotateCcw
} from "lucide-react";


const EmergencyReportsFilters = ({
    search,
    setSearch,
    status,
    setStatus,
    severity,
    setSeverity,
    emergencyType,
    setEmergencyType,
    onReset
}) => {

    return (

        <div
            className="
            rounded-3xl
            border
            border-gray-100
            bg-white
            p-5
            shadow-sm
            sm:p-6
            "
        >

            {/* Header */}

            <div
                className="
                mb-5
                flex
                items-center
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
                        rounded-xl
                        bg-orange-100
                        p-3
                        text-orange-600
                        "
                    >

                        <Filter size={20}/>

                    </div>


                    <div>

                        <h2
                            className="
                            font-bold
                            text-gray-800
                            "
                        >

                            Search & Filter

                        </h2>


                        <p
                            className="
                            mt-1
                            text-xs
                            text-gray-500
                            "
                        >

                            Find emergency reports quickly

                        </p>

                    </div>

                </div>


                <button

                    type="button"

                    onClick={onReset}

                    className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    px-3
                    py-2
                    text-sm
                    font-medium
                    text-gray-500
                    transition
                    hover:bg-gray-100
                    hover:text-gray-800
                    "

                >

                    <RotateCcw size={16}/>

                    <span className="hidden sm:inline">
                        Reset
                    </span>

                </button>

            </div>



            {/* Filters */}

            <div
                className="
                grid
                gap-4
                sm:grid-cols-2
                xl:grid-cols-4
                "
            >

                {/* Search */}

                <div
                    className="
                    relative
                    sm:col-span-2
                    xl:col-span-1
                    "
                >

                    <Search

                        size={19}

                        className="
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-gray-400
                        "

                    />


                    <input

                        type="text"

                        value={search}

                        onChange={(e) =>
                            setSearch(e.target.value)
                        }

                        placeholder="Search reports..."

                        className="
                        w-full
                        rounded-2xl
                        border
                        border-gray-200
                        bg-gray-50
                        py-3
                        pl-11
                        pr-4
                        text-sm
                        text-gray-700
                        outline-none
                        transition
                        placeholder:text-gray-400
                        focus:border-orange-400
                        focus:bg-white
                        focus:ring-4
                        focus:ring-orange-100
                        "

                    />

                </div>



                {/* Status */}

                <select

                    value={status}

                    onChange={(e) =>
                        setStatus(e.target.value)
                    }

                    className="
                    rounded-2xl
                    border
                    border-gray-200
                    bg-gray-50
                    px-4
                    py-3
                    text-sm
                    text-gray-700
                    outline-none
                    transition
                    focus:border-orange-400
                    focus:bg-white
                    focus:ring-4
                    focus:ring-orange-100
                    "

                >

                    <option value="all">
                        All Statuses
                    </option>

                    <option value="Pending">
                        Pending
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

                    <option value="Rejected">
                        Rejected
                    </option>

                </select>



                {/* Severity */}

                <select

                    value={severity}

                    onChange={(e) =>
                        setSeverity(e.target.value)
                    }

                    className="
                    rounded-2xl
                    border
                    border-gray-200
                    bg-gray-50
                    px-4
                    py-3
                    text-sm
                    text-gray-700
                    outline-none
                    transition
                    focus:border-orange-400
                    focus:bg-white
                    focus:ring-4
                    focus:ring-orange-100
                    "

                >

                    <option value="all">
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



                {/* Emergency Type */}

                <input

                    type="text"

                    value={emergencyType}

                    onChange={(e) =>
                        setEmergencyType(e.target.value)
                    }

                    placeholder="Emergency type..."

                    className="
                    rounded-2xl
                    border
                    border-gray-200
                    bg-gray-50
                    px-4
                    py-3
                    text-sm
                    text-gray-700
                    outline-none
                    transition
                    placeholder:text-gray-400
                    focus:border-orange-400
                    focus:bg-white
                    focus:ring-4
                    focus:ring-orange-100
                    "

                />

            </div>

        </div>

    );

};


export default EmergencyReportsFilters;