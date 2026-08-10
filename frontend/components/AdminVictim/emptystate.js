"use client";

import {
    SearchX,
    Users,
    X
} from "lucide-react";


const VictimsEmptyState = ({
    hasSearch,
    onClearSearch
}) => {

    return (

        <div
            className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-gray-100
            bg-white
            px-6
            py-16
            text-center
            shadow-sm
            sm:px-10
            "
        >

            {/* Decorative background */}

            <div
                className="
                absolute
                -left-16
                -top-16
                h-40
                w-40
                rounded-full
                bg-blue-50
                "
            />


            <div
                className="
                absolute
                -bottom-20
                -right-10
                h-44
                w-44
                rounded-full
                bg-indigo-50
                "
            />



            {/* Icon */}

            <div
                className="
                relative
                mx-auto
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-3xl
                bg-gradient-to-br
                from-blue-50
                to-indigo-100
                text-blue-600
                shadow-sm
                "
            >

                {
                    hasSearch

                        ?

                        <SearchX size={34} />

                        :

                        <Users size={34} />

                }

            </div>



            {/* Title */}

            <h3
                className="
                relative
                mt-6
                text-xl
                font-bold
                text-gray-800
                "
            >

                {
                    hasSearch

                        ?

                        "No victims found"

                        :

                        "No victims registered yet"

                }

            </h3>



            {/* Description */}

            <p
                className="
                relative
                mx-auto
                mt-2
                max-w-md
                text-sm
                leading-6
                text-gray-500
                "
            >

                {
                    hasSearch

                        ?

                        "We couldn't find any victim matching your search. Try a different name, email, phone number, or city."

                        :

                        "Registered victims will appear here once they create an account and join the emergency response system."

                }

            </p>



            {/* Clear search */}

            {
                hasSearch && (

                    <button
                        type="button"
                        onClick={onClearSearch}
                        className="
                        relative
                        mt-6
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        bg-gray-900
                        px-5
                        py-3
                        text-sm
                        font-semibold
                        text-white
                        transition
                        hover:bg-blue-600
                        "
                    >

                        <X size={16} />

                        Clear Search

                    </button>

                )
            }

        </div>

    );

};


export default VictimsEmptyState;