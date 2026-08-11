"use client";

import {
    Activity,
    CheckCircle2,
    ClipboardList,
    Clock3
} from "lucide-react";


const EmergencyStatusCard = ({
    status
}) => {


    const statusConfig = {

        Assigned: {
            title: "Assigned",
            description:
                "This emergency has been assigned to your rescue team and is waiting for response.",
            icon: ClipboardList,
            wrapper:
                "border-blue-100 bg-blue-50/70",
            iconWrapper:
                "bg-blue-100 text-blue-600",
            text:
                "text-blue-700",
            dot:
                "bg-blue-500"
        },

        "In Progress": {
            title: "In Progress",
            description:
                "Your rescue team is currently responding to this emergency.",
            icon: Activity,
            wrapper:
                "border-amber-100 bg-amber-50/70",
            iconWrapper:
                "bg-amber-100 text-amber-600",
            text:
                "text-amber-700",
            dot:
                "bg-amber-500"
        },

        Resolved: {
            title: "Resolved",
            description:
                "This emergency has been successfully handled by the rescue team.",
            icon: CheckCircle2,
            wrapper:
                "border-emerald-100 bg-emerald-50/70",
            iconWrapper:
                "bg-emerald-100 text-emerald-600",
            text:
                "text-emerald-700",
            dot:
                "bg-emerald-500"
        }

    };


    const config =
        statusConfig[status] ||
        statusConfig.Assigned;


    const Icon =
        config.icon;



    return (

        <section
            className={`
            overflow-hidden
            rounded-3xl
            border
            p-5
            shadow-sm
            sm:p-6
            ${config.wrapper}
            `}
        >

            <div
                className="
                flex
                flex-col
                gap-5
                sm:flex-row
                sm:items-center
                sm:justify-between
                "
            >

                {/* Left */}

                <div
                    className="
                    flex
                    items-center
                    gap-4
                    "
                >

                    <div
                        className={`
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        ${config.iconWrapper}
                        `}
                    >

                        <Icon
                            size={23}
                        />

                    </div>


                    <div>

                        <div
                            className="
                            flex
                            items-center
                            gap-2
                            "
                        >

                            <p
                                className="
                                text-xs
                                font-medium
                                text-slate-400
                                "
                            >

                                Current Status

                            </p>


                            <span
                                className={`
                                h-2
                                w-2
                                rounded-full
                                ${config.dot}
                                ${
                                    status ===
                                    "In Progress"
                                        ? "animate-pulse"
                                        : ""
                                }
                                `}
                            />

                        </div>


                        <h2
                            className={`
                            mt-1
                            text-xl
                            font-bold
                            ${config.text}
                            `}
                        >

                            {config.title}

                        </h2>


                        <p
                            className="
                            mt-1
                            max-w-xl
                            text-xs
                            leading-5
                            text-slate-500
                            sm:text-sm
                            "
                        >

                            {config.description}

                        </p>

                    </div>

                </div>



                {/* Timeline indicator */}

                <div
                    className="
                    flex
                    items-center
                    gap-2
                    "
                >

                    <div
                        className={`
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-xl
                        bg-white/80
                        ${config.text}
                        `}
                    >

                        <Clock3
                            size={17}
                        />

                    </div>


                    <div>

                        <p
                            className="
                            text-[10px]
                            font-medium
                            text-slate-400
                            "
                        >

                            Workflow

                        </p>


                        <p
                            className="
                            text-xs
                            font-semibold
                            text-slate-600
                            "
                        >

                            Rescue Response

                        </p>

                    </div>

                </div>

            </div>



            {/* Progress */}

            <div
                className="
                mt-6
                flex
                items-center
                "
            >

                <div
                    className="
                    flex
                    flex-1
                    items-center
                    "
                >

                    <span
                        className="
                        flex
                        h-3
                        w-3
                        shrink-0
                        rounded-full
                        bg-blue-500
                        ring-4
                        ring-blue-100
                        "
                    />


                    <span
                        className={`
                        h-1
                        flex-1
                        ${
                            status === "Assigned"
                                ? "bg-slate-200"
                                : "bg-amber-400"
                        }
                        `}
                    />

                </div>


                <div
                    className="
                    flex
                    flex-1
                    items-center
                    "
                >

                    <span
                        className={`
                        h-3
                        w-3
                        shrink-0
                        rounded-full
                        ${
                            status === "Assigned"
                                ? "bg-slate-300"
                                : "bg-amber-500"
                        }
                        ${
                            status === "In Progress"
                                ? "ring-4 ring-amber-100"
                                : ""
                        }
                        `}
                    />


                    <span
                        className={`
                        h-1
                        flex-1
                        ${
                            status === "Resolved"
                                ? "bg-emerald-400"
                                : "bg-slate-200"
                        }
                        `}
                    />

                </div>


                <span
                    className={`
                    h-3
                    w-3
                    shrink-0
                    rounded-full
                    ${
                        status === "Resolved"
                            ? "bg-emerald-500 ring-4 ring-emerald-100"
                            : "bg-slate-300"
                    }
                    `}
                />

            </div>



            <div
                className="
                mt-2
                flex
                justify-between
                text-[10px]
                font-medium
                text-slate-400
                "
            >

                <span>
                    Assigned
                </span>

                <span>
                    In Progress
                </span>

                <span>
                    Resolved
                </span>

            </div>

        </section>

    );

};


export default EmergencyStatusCard;