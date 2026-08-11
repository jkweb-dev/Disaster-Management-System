"use client";

import {
    ClipboardCheck,
    CheckCircle2,
    AlertCircle
} from "lucide-react";


const AssistanceRequired = ({
    assistance = []
}) => {


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
                items-center
                gap-3
                "
            >

                <div
                    className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-2xl
                    bg-emerald-50
                    text-emerald-600
                    "
                >

                    <ClipboardCheck
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

                        Assistance Required

                    </h2>


                    <p
                        className="
                        mt-0.5
                        text-xs
                        text-slate-400
                        "
                    >

                        Assistance requested by the victim.

                    </p>

                </div>

            </div>



            {/* Content */}

            {
                assistance.length > 0 ? (

                    <div
                        className="
                        mt-6
                        space-y-3
                        "
                    >

                        {
                            assistance.map(
                                (item, index) => (

                                    <div
                                        key={`${item}-${index}`}
                                        className="
                                        flex
                                        items-center
                                        gap-3
                                        rounded-2xl
                                        border
                                        border-emerald-100
                                        bg-emerald-50/50
                                        p-4
                                        "
                                    >

                                        <div
                                            className="
                                            flex
                                            h-9
                                            w-9
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
                                                size={17}
                                            />

                                        </div>


                                        <p
                                            className="
                                            text-sm
                                            font-semibold
                                            text-slate-700
                                            "
                                        >

                                            {item}

                                        </p>

                                    </div>

                                )
                            )
                        }

                    </div>

                ) : (

                    <div
                        className="
                        mt-6
                        flex
                        items-start
                        gap-3
                        rounded-2xl
                        border
                        border-slate-100
                        bg-slate-50
                        p-4
                        "
                    >

                        <AlertCircle
                            size={18}
                            className="
                            mt-0.5
                            shrink-0
                            text-slate-400
                            "
                        />


                        <p
                            className="
                            text-xs
                            leading-5
                            text-slate-500
                            "
                        >

                            No specific assistance requirements
                            were provided in this report.

                        </p>

                    </div>

                )
            }

        </section>

    );

};


export default AssistanceRequired;