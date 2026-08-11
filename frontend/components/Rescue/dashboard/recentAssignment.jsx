"use client";

import Link from "next/link";

import {
    ClipboardList,
    ArrowRight,
    MapPin,
    CalendarDays,
    ChevronRight
} from "lucide-react";

import EmptyState from "./empty";


const RecentAssignments = ({
    assignments = []
}) => {


    const getSeverityStyle = (
        severity
    ) => {

        switch (severity) {

            case "Critical":

                return "bg-rose-50 text-rose-700 border-rose-100";


            case "High":

                return "bg-orange-50 text-orange-700 border-orange-100";


            case "Medium":

                return "bg-amber-50 text-amber-700 border-amber-100";


            default:

                return "bg-slate-50 text-slate-600 border-slate-100";

        }

    };



    const getStatusStyle = (
        status
    ) => {

        switch (status) {

            case "Assigned":

                return "bg-blue-50 text-blue-700";


            case "In Progress":

                return "bg-amber-50 text-amber-700";


            case "Resolved":

                return "bg-emerald-50 text-emerald-700";


            case "Rejected":

                return "bg-rose-50 text-rose-700";


            default:

                return "bg-slate-50 text-slate-600";

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
                day: "numeric",
                year: "numeric"
            }
        );

    };



    if (!assignments.length) {

        return (

            <section
                className="
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
                        bg-blue-100
                        text-blue-600
                        "
                    >

                        <ClipboardList
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

                            Recent Assignments

                        </h2>


                        <p
                            className="
                            mt-1
                            text-xs
                            text-slate-400
                            "
                        >

                            Your team's latest emergency assignments

                        </p>

                    </div>

                </div>


                <div
                    className="
                    mt-5
                    "
                >

                    <EmptyState
                        icon={ClipboardList}
                        title="No assignments yet"
                        description="No emergencies have been assigned to your rescue team."
                    />

                </div>

            </section>

        );

    }



    return (

        <section
            className="
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
                flex-col
                gap-4
                sm:flex-row
                sm:items-center
                sm:justify-between
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
                        bg-blue-100
                        text-blue-600
                        "
                    >

                        <ClipboardList
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

                            Recent Assignments

                        </h2>


                        <p
                            className="
                            mt-1
                            text-xs
                            text-slate-400
                            "
                        >

                            Your team's latest emergency assignments

                        </p>

                    </div>

                </div>


                <Link
                    href="/rescue/emergencies"
                    className="
                    inline-flex
                    w-fit
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-blue-600
                    transition
                    hover:text-blue-700
                    "
                >

                    View all

                    <ArrowRight
                        size={16}
                    />

                </Link>

            </div>



            {/* ================================================= */}
            {/* DESKTOP TABLE */}
            {/* ================================================= */}

            <div
                className="
                mt-6
                hidden
                overflow-x-auto
                md:block
                "
            >

                <table
                    className="
                    w-full
                    min-w-[700px]
                    border-collapse
                    "
                >

                    <thead>

                        <tr
                            className="
                            border-b
                            border-slate-100
                            text-left
                            "
                        >

                            <th
                                className="
                                px-4
                                pb-3
                                text-xs
                                font-semibold
                                text-slate-400
                                "
                            >

                                Emergency

                            </th>


                            <th
                                className="
                                px-4
                                pb-3
                                text-xs
                                font-semibold
                                text-slate-400
                                "
                            >

                                Severity

                            </th>


                            <th
                                className="
                                px-4
                                pb-3
                                text-xs
                                font-semibold
                                text-slate-400
                                "
                            >

                                Location

                            </th>


                            <th
                                className="
                                px-4
                                pb-3
                                text-xs
                                font-semibold
                                text-slate-400
                                "
                            >

                                Status

                            </th>


                            <th
                                className="
                                px-4
                                pb-3
                                text-xs
                                font-semibold
                                text-slate-400
                                "
                            >

                                Assigned

                            </th>


                            <th
                                className="
                                px-4
                                pb-3
                                "
                            />

                        </tr>

                    </thead>


                    <tbody>

                        {
                            assignments.map(
                                (assignment) => (

                                    <tr
                                        key={
                                            assignment._id
                                        }
                                        className="
                                        group
                                        border-b
                                        border-slate-50
                                        last:border-0
                                        "
                                    >

                                        <td
                                            className="
                                            px-4
                                            py-4
                                            "
                                        >

                                            <Link
                                                href={
                                                    `/rescue/emergencies/${assignment._id}`
                                                }
                                                className="
                                                block
                                                "
                                            >

                                                <p
                                                    className="
                                                    max-w-[220px]
                                                    truncate
                                                    text-sm
                                                    font-semibold
                                                    text-slate-700
                                                    transition
                                                    group-hover:text-blue-600
                                                    "
                                                >

                                                    {
                                                        assignment.title
                                                    }

                                                </p>


                                                <p
                                                    className="
                                                    mt-1
                                                    text-xs
                                                    text-slate-400
                                                    "
                                                >

                                                    {
                                                        assignment.emergencyType
                                                    }

                                                </p>

                                            </Link>

                                        </td>


                                        <td
                                            className="
                                            px-4
                                            py-4
                                            "
                                        >

                                            <span
                                                className={`
                                                inline-flex
                                                rounded-full
                                                border
                                                px-2.5
                                                py-1
                                                text-[10px]
                                                font-bold
                                                ${getSeverityStyle(
                                                    assignment.severity
                                                )}
                                                `}
                                            >

                                                {
                                                    assignment.severity
                                                }

                                            </span>

                                        </td>


                                        <td
                                            className="
                                            px-4
                                            py-4
                                            "
                                        >

                                            <div
                                                className="
                                                flex
                                                max-w-[150px]
                                                items-center
                                                gap-1.5
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
                                                    text-xs
                                                    text-slate-500
                                                    "
                                                >

                                                    {
                                                        assignment.city ||
                                                        assignment.location?.city ||
                                                        "Unknown"
                                                    }

                                                </span>

                                            </div>

                                        </td>


                                        <td
                                            className="
                                            px-4
                                            py-4
                                            "
                                        >

                                            <span
                                                className={`
                                                inline-flex
                                                rounded-full
                                                px-2.5
                                                py-1
                                                text-[10px]
                                                font-bold
                                                ${getStatusStyle(
                                                    assignment.status
                                                )}
                                                `}
                                            >

                                                {
                                                    assignment.status
                                                }

                                            </span>

                                        </td>


                                        <td
                                            className="
                                            px-4
                                            py-4
                                            "
                                        >

                                            <div
                                                className="
                                                flex
                                                items-center
                                                gap-1.5
                                                text-xs
                                                text-slate-500
                                                "
                                            >

                                                <CalendarDays
                                                    size={13}
                                                    className="
                                                    text-slate-400
                                                    "
                                                />

                                                {
                                                    formatDate(
                                                        assignment.assignedAt
                                                    )
                                                }

                                            </div>

                                        </td>


                                        <td
                                            className="
                                            px-4
                                            py-4
                                            text-right
                                            "
                                        >

                                            <Link
                                                href={
                                                    `/rescue/emergencies/${assignment._id}`
                                                }
                                                className="
                                                inline-flex
                                                h-8
                                                w-8
                                                items-center
                                                justify-center
                                                rounded-lg
                                                text-slate-400
                                                transition
                                                hover:bg-blue-50
                                                hover:text-blue-600
                                                "
                                            >

                                                <ChevronRight
                                                    size={17}
                                                />

                                            </Link>

                                        </td>

                                    </tr>

                                )
                            )
                        }

                    </tbody>

                </table>

            </div>



            {/* ================================================= */}
            {/* MOBILE CARDS */}
            {/* ================================================= */}

            <div
                className="
                mt-5
                space-y-3
                md:hidden
                "
            >

                {
                    assignments.map(
                        (assignment) => (

                            <Link
                                key={
                                    assignment._id
                                }
                                href={
                                    `/rescue/emergencies/${assignment._id}`
                                }
                                className="
                                group
                                block
                                rounded-2xl
                                border
                                border-slate-100
                                bg-slate-50/60
                                p-4
                                transition
                                hover:border-blue-100
                                hover:bg-blue-50/30
                                "
                            >

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
                                        min-w-0
                                        "
                                    >

                                        <h3
                                            className="
                                            truncate
                                            text-sm
                                            font-bold
                                            text-slate-700
                                            group-hover:text-blue-600
                                            "
                                        >

                                            {
                                                assignment.title
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
                                                assignment.emergencyType
                                            }

                                        </p>

                                    </div>


                                    <ChevronRight
                                        size={18}
                                        className="
                                        shrink-0
                                        text-slate-300
                                        transition
                                        group-hover:translate-x-1
                                        group-hover:text-blue-500
                                        "
                                    />

                                </div>



                                <div
                                    className="
                                    mt-3
                                    flex
                                    flex-wrap
                                    gap-2
                                    "
                                >

                                    <span
                                        className={`
                                        rounded-full
                                        border
                                        px-2.5
                                        py-1
                                        text-[10px]
                                        font-bold
                                        ${getSeverityStyle(
                                            assignment.severity
                                        )}
                                        `}
                                    >

                                        {
                                            assignment.severity
                                        }

                                    </span>


                                    <span
                                        className={`
                                        rounded-full
                                        px-2.5
                                        py-1
                                        text-[10px]
                                        font-bold
                                        ${getStatusStyle(
                                            assignment.status
                                        )}
                                        `}
                                    >

                                        {
                                            assignment.status
                                        }

                                    </span>

                                </div>



                                <div
                                    className="
                                    mt-3
                                    flex
                                    flex-wrap
                                    gap-x-4
                                    gap-y-2
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

                                        <MapPin
                                            size={13}
                                            className="
                                            text-slate-400
                                            "
                                        />

                                        {
                                            assignment.city ||
                                            assignment.location?.city ||
                                            "Unknown"
                                        }

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

                                        <CalendarDays
                                            size={13}
                                            className="
                                            text-slate-400
                                            "
                                        />

                                        {
                                            formatDate(
                                                assignment.assignedAt
                                            )
                                        }

                                    </span>

                                </div>

                            </Link>

                        )
                    )
                }

            </div>

        </section>

    );

};


export default RecentAssignments;