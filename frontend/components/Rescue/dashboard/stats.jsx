"use client";

import {
    ClipboardList,
    Activity,
    CheckCircle2,
    Siren
} from "lucide-react";


const StatCards = ({
    statistics
}) => {

    const cards = [

        {
            title: "Assigned",
            value: statistics?.assigned ?? 0,
            description: "Waiting for response",
            icon: ClipboardList,
            iconBg: "bg-blue-100",
            iconColor: "text-blue-600",
            valueColor: "text-blue-700"
        },

        {
            title: "In Progress",
            value: statistics?.inProgress ?? 0,
            description: "Active responses",
            icon: Activity,
            iconBg: "bg-amber-100",
            iconColor: "text-amber-600",
            valueColor: "text-amber-700"
        },

        {
            title: "Resolved",
            value: statistics?.resolved ?? 0,
            description: "Successfully completed",
            icon: CheckCircle2,
            iconBg: "bg-emerald-100",
            iconColor: "text-emerald-600",
            valueColor: "text-emerald-700"
        },

        {
            title: "Critical",
            value: statistics?.critical ?? 0,
            description: "Requires immediate attention",
            icon: Siren,
            iconBg: "bg-rose-100",
            iconColor: "text-rose-600",
            valueColor: "text-rose-700"
        }

    ];


    return (

        <section
            className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            xl:grid-cols-4
            "
        >

            {
                cards.map((card) => {

                    const Icon =
                        card.icon;


                    return (

                        <div
                            key={card.title}
                            className="
                            group
                            relative
                            overflow-hidden
                            rounded-3xl
                            border
                            border-slate-100
                            bg-white
                            p-5
                            shadow-sm
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:shadow-lg
                            sm:p-6
                            "
                        >

                            {/* Decorative circle */}

                            <div
                                className={`
                                pointer-events-none
                                absolute
                                -right-8
                                -top-8
                                h-24
                                w-24
                                rounded-full
                                opacity-40
                                transition-transform
                                duration-500
                                group-hover:scale-125
                                ${card.iconBg}
                                `}
                            />


                            <div
                                className="
                                relative
                                flex
                                items-start
                                justify-between
                                gap-4
                                "
                            >

                                {/* Icon */}

                                <div
                                    className={`
                                    flex
                                    h-12
                                    w-12
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    ${card.iconBg}
                                    ${card.iconColor}
                                    `}
                                >

                                    <Icon
                                        size={22}
                                        strokeWidth={2}
                                    />

                                </div>


                                {/* Value */}

                                <div
                                    className="
                                    text-right
                                    "
                                >

                                    <p
                                        className={`
                                        text-3xl
                                        font-bold
                                        tracking-tight
                                        ${card.valueColor}
                                        sm:text-4xl
                                        `}
                                    >

                                        {card.value}

                                    </p>

                                </div>

                            </div>


                            {/* Text */}

                            <div
                                className="
                                relative
                                mt-5
                                "
                            >

                                <h3
                                    className="
                                    text-sm
                                    font-bold
                                    text-slate-700
                                    "
                                >

                                    {card.title}

                                </h3>


                                <p
                                    className="
                                    mt-1
                                    text-xs
                                    leading-5
                                    text-slate-400
                                    "
                                >

                                    {card.description}

                                </p>

                            </div>


                            {/* Bottom indicator */}

                            <div
                                className="
                                mt-4
                                h-1
                                overflow-hidden
                                rounded-full
                                bg-slate-100
                                "
                            >

                                <div
                                    className={`
                                    h-full
                                    w-1/3
                                    rounded-full
                                    transition-all
                                    duration-500
                                    group-hover:w-2/3
                                    ${card.iconBg.replace(
                                        "bg-",
                                        "bg-"
                                    )}
                                    `}
                                />

                            </div>

                        </div>

                    );

                })

            }

        </section>

    );

};


export default StatCards;