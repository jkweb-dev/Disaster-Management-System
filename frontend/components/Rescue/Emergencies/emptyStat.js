"use client";

import Link from "next/link";

import {
    Siren,
    RefreshCw,
    SearchX
} from "lucide-react";


const EmptyState = ({
    filtered = false,
    onClearFilters
}) => {


    return (

        <div
            className="
            flex
            min-h-[320px]
            flex-col
            items-center
            justify-center
            rounded-3xl
            border
            border-dashed
            border-slate-200
            bg-white
            px-6
            py-12
            text-center
            shadow-sm
            "
        >

            {/* Icon */}

            <div
                className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-3xl
                bg-blue-50
                text-blue-500
                "
            >

                {
                    filtered ? (

                        <SearchX
                            size={30}
                        />

                    ) : (

                        <Siren
                            size={30}
                        />

                    )
                }

            </div>



            {/* Title */}

            <h3
                className="
                mt-5
                text-lg
                font-bold
                text-slate-800
                "
            >

                {
                    filtered
                        ? "No matching emergencies"
                        : "No emergencies assigned"
                }

            </h3>



            {/* Description */}

            <p
                className="
                mt-2
                max-w-md
                text-sm
                leading-6
                text-slate-400
                "
            >

                {
                    filtered

                        ? "Try changing your search or filters to find the emergency you're looking for."

                        : "There are currently no emergency reports assigned to your rescue team."
                }

            </p>



            {/* Actions */}

            {
                filtered ? (

                    <button
                        type="button"
                        onClick={
                            onClearFilters
                        }
                        className="
                        mt-6
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        bg-slate-900
                        px-5
                        py-2.5
                        text-sm
                        font-semibold
                        text-white
                        transition
                        hover:bg-blue-600
                        "
                    >

                        <RefreshCw
                            size={16}
                        />

                        Clear Filters

                    </button>

                ) : (

                    <Link
                        href="/rescue/dashboard"
                        className="
                        mt-6
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        bg-blue-600
                        px-5
                        py-2.5
                        text-sm
                        font-semibold
                        text-white
                        shadow-lg
                        shadow-blue-100
                        transition
                        hover:bg-blue-700
                        "
                    >

                        Back to Dashboard

                    </Link>

                )
            }

        </div>

    );

};


export default EmptyState;