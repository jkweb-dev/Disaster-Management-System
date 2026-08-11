"use client";

import {
    Activity,
    CheckCircle2,
    Clock3,
    Loader2,
    ShieldCheck
} from "lucide-react";


const EmergencyActions = ({
    status,
    updating = false,
    onStatusChange
}) => {


    const isAssigned =
        status === "Assigned";

    const isInProgress =
        status === "In Progress";

    const isResolved =
        status === "Resolved";



    const handleStartResponse = () => {

        if (
            updating ||
            !isAssigned
        ) {
            return;
        }


        onStatusChange(
            "In Progress"
        );

    };



    const handleResolve = () => {

        if (
            updating ||
            !isInProgress
        ) {
            return;
        }


        onStatusChange(
            "Resolved"
        );

    };



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
                items-start
                gap-3
                "
            >

                <div
                    className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-blue-50
                    text-blue-600
                    "
                >

                    <ShieldCheck
                        size={21}
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

                        Rescue Actions

                    </h2>


                    <p
                        className="
                        mt-0.5
                        text-xs
                        leading-5
                        text-slate-400
                        "
                    >

                        Update the emergency status as your
                        team progresses with the response.

                    </p>

                </div>

            </div>



            {/* Workflow */}

            <div
                className="
                mt-6
                rounded-2xl
                border
                border-slate-100
                bg-slate-50
                p-4
                "
            >

                <div
                    className="
                    flex
                    items-center
                    justify-between
                    gap-2
                    "
                >

                    <div
                        className="
                        flex
                        items-center
                        gap-2
                        "
                    >

                        <Clock3
                            size={15}
                            className="text-slate-400"
                        />

                        <span
                            className="
                            text-xs
                            font-semibold
                            text-slate-600
                            "
                        >

                            Response Workflow

                        </span>

                    </div>


                    <span
                        className="
                        rounded-full
                        bg-white
                        px-2.5
                        py-1
                        text-[10px]
                        font-bold
                        text-slate-500
                        shadow-sm
                        "
                    >

                        {status}

                    </span>

                </div>



                {/* Workflow steps */}

                <div
                    className="
                    mt-5
                    flex
                    items-center
                    "
                >

                    {/* Assigned */}

                    <div
                        className="
                        flex
                        shrink-0
                        flex-col
                        items-center
                        gap-1.5
                        "
                    >

                        <div
                            className="
                            flex
                            h-8
                            w-8
                            items-center
                            justify-center
                            rounded-full
                            bg-blue-500
                            text-white
                            "
                        >

                            <ShieldCheck
                                size={14}
                            />

                        </div>


                        <span
                            className="
                            text-[9px]
                            font-semibold
                            text-slate-500
                            "
                        >

                            Assigned

                        </span>

                    </div>



                    {/* Line */}

                    <div
                        className={`
                        mx-2
                        h-1
                        flex-1
                        rounded-full
                        ${
                            isInProgress ||
                            isResolved
                                ? "bg-amber-400"
                                : "bg-slate-200"
                        }
                        `}
                    />



                    {/* In Progress */}

                    <div
                        className="
                        flex
                        shrink-0
                        flex-col
                        items-center
                        gap-1.5
                        "
                    >

                        <div
                            className={`
                            flex
                            h-8
                            w-8
                            items-center
                            justify-center
                            rounded-full
                            ${
                                isInProgress ||
                                isResolved
                                    ? "bg-amber-500 text-white"
                                    : "bg-slate-200 text-slate-400"
                            }
                            `}
                        >

                            <Activity
                                size={14}
                            />

                        </div>


                        <span
                            className="
                            text-[9px]
                            font-semibold
                            text-slate-500
                            "
                        >

                            In Progress

                        </span>

                    </div>



                    {/* Line */}

                    <div
                        className={`
                        mx-2
                        h-1
                        flex-1
                        rounded-full
                        ${
                            isResolved
                                ? "bg-emerald-400"
                                : "bg-slate-200"
                        }
                        `}
                    />



                    {/* Resolved */}

                    <div
                        className="
                        flex
                        shrink-0
                        flex-col
                        items-center
                        gap-1.5
                        "
                    >

                        <div
                            className={`
                            flex
                            h-8
                            w-8
                            items-center
                            justify-center
                            rounded-full
                            ${
                                isResolved
                                    ? "bg-emerald-500 text-white"
                                    : "bg-slate-200 text-slate-400"
                            }
                            `}
                        >

                            <CheckCircle2
                                size={14}
                            />

                        </div>


                        <span
                            className="
                            text-[9px]
                            font-semibold
                            text-slate-500
                            "
                        >

                            Resolved

                        </span>

                    </div>

                </div>

            </div>



            {/* Action */}

            <div
                className="
                mt-5
                "
            >

                {
                    isAssigned && (

                        <button
                            type="button"
                            disabled={updating}
                            onClick={
                                handleStartResponse
                            }
                            className="
                            flex
                            w-full
                            items-center
                            justify-center
                            gap-2
                            rounded-2xl
                            bg-amber-500
                            px-5
                            py-3.5
                            text-sm
                            font-bold
                            text-white
                            shadow-lg
                            shadow-amber-100
                            transition
                            hover:bg-amber-600
                            disabled:cursor-not-allowed
                            disabled:opacity-60
                            "
                        >

                            {
                                updating ? (

                                    <Loader2
                                        size={18}
                                        className="
                                        animate-spin
                                        "
                                    />

                                ) : (

                                    <Activity
                                        size={18}
                                    />

                                )
                            }


                            {
                                updating
                                    ? "Updating..."
                                    : "Start Response"
                            }

                        </button>

                    )
                }



                {
                    isInProgress && (

                        <button
                            type="button"
                            disabled={updating}
                            onClick={
                                handleResolve
                            }
                            className="
                            flex
                            w-full
                            items-center
                            justify-center
                            gap-2
                            rounded-2xl
                            bg-emerald-600
                            px-5
                            py-3.5
                            text-sm
                            font-bold
                            text-white
                            shadow-lg
                            shadow-emerald-100
                            transition
                            hover:bg-emerald-700
                            disabled:cursor-not-allowed
                            disabled:opacity-60
                            "
                        >

                            {
                                updating ? (

                                    <Loader2
                                        size={18}
                                        className="
                                        animate-spin
                                        "
                                    />

                                ) : (

                                    <CheckCircle2
                                        size={18}
                                    />

                                )
                            }


                            {
                                updating
                                    ? "Updating..."
                                    : "Mark as Resolved"
                            }

                        </button>

                    )
                }



                {
                    isResolved && (

                        <div
                            className="
                            flex
                            items-center
                            gap-3
                            rounded-2xl
                            border
                            border-emerald-100
                            bg-emerald-50
                            p-4
                            "
                        >

                            <div
                                className="
                                flex
                                h-10
                                w-10
                                shrink-0
                                items-center
                                justify-center
                                rounded-xl
                                bg-white
                                text-emerald-500
                                shadow-sm
                                "
                            >

                                <CheckCircle2
                                    size={20}
                                />

                            </div>


                            <div>

                                <p
                                    className="
                                    text-sm
                                    font-bold
                                    text-emerald-700
                                    "
                                >

                                    Emergency Resolved

                                </p>


                                <p
                                    className="
                                    mt-0.5
                                    text-xs
                                    leading-5
                                    text-emerald-600
                                    "
                                >

                                    This emergency has been
                                    successfully completed.

                                </p>

                            </div>

                        </div>

                    )
                }

            </div>

        </section>

    );

};


export default EmergencyActions;