"use client";


import {
    Inbox
} from "lucide-react";


const EmptyState = ({
    icon: Icon = Inbox,
    title = "Nothing here yet",
    description = "There is currently no information to display."
}) => {

    return (

        <div
            className="
            flex
            min-h-[190px]
            flex-col
            items-center
            justify-center
            rounded-2xl
            border
            border-dashed
            border-slate-200
            bg-slate-50/60
            px-5
            py-8
            text-center
            "
        >

            {/* Icon */}

            <div
                className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-white
                text-slate-400
                shadow-sm
                ring-1
                ring-slate-100
                "
            >

                <Icon
                    size={22}
                />

            </div>


            {/* Title */}

            <h3
                className="
                mt-4
                text-sm
                font-bold
                text-slate-700
                "
            >

                {title}

            </h3>


            {/* Description */}

            <p
                className="
                mt-1.5
                max-w-sm
                text-xs
                leading-5
                text-slate-400
                "
            >

                {description}

            </p>

        </div>

    );

};


export default EmptyState;